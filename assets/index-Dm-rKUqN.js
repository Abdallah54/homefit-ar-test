var Ox=Object.defineProperty;var kx=(n,e,t)=>e in n?Ox(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ze=(n,e,t)=>kx(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var v_={exports:{}},Pc={},x_={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),Bx=Symbol.for("react.portal"),zx=Symbol.for("react.fragment"),Hx=Symbol.for("react.strict_mode"),Vx=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),Wx=Symbol.for("react.context"),Xx=Symbol.for("react.forward_ref"),jx=Symbol.for("react.suspense"),Yx=Symbol.for("react.memo"),qx=Symbol.for("react.lazy"),Ap=Symbol.iterator;function $x(n){return n===null||typeof n!="object"?null:(n=Ap&&n[Ap]||n["@@iterator"],typeof n=="function"?n:null)}var y_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S_=Object.assign,M_={};function oo(n,e,t){this.props=n,this.context=e,this.refs=M_,this.updater=t||y_}oo.prototype.isReactComponent={};oo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};oo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function E_(){}E_.prototype=oo.prototype;function ed(n,e,t){this.props=n,this.context=e,this.refs=M_,this.updater=t||y_}var td=ed.prototype=new E_;td.constructor=ed;S_(td,oo.prototype);td.isPureReactComponent=!0;var Rp=Array.isArray,T_=Object.prototype.hasOwnProperty,nd={current:null},w_={key:!0,ref:!0,__self:!0,__source:!0};function A_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T_.call(e,i)&&!w_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:n,key:s,ref:o,props:r,_owner:nd.current}}function Kx(n,e){return{$$typeof:Pa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function id(n){return typeof n=="object"&&n!==null&&n.$$typeof===Pa}function Zx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Cp=/\/+/g;function Qc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Zx(""+n.key):e.toString(36)}function Fl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Pa:case Bx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Qc(o,0):i,Rp(r)?(t="",n!=null&&(t=n.replace(Cp,"$&/")+"/"),Fl(r,e,t,"",function(c){return c})):r!=null&&(id(r)&&(r=Kx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Rp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Qc(s,a);o+=Fl(s,e,t,l,r)}else if(l=$x(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Qc(s,a++),o+=Fl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Va(n,e,t){if(n==null)return n;var i=[],r=0;return Fl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Jx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var on={current:null},Ol={transition:null},Qx={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:nd};function R_(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Va,forEach:function(n,e,t){Va(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Va(n,function(){e++}),e},toArray:function(n){return Va(n,function(e){return e})||[]},only:function(n){if(!id(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ve.Component=oo;Ve.Fragment=zx;Ve.Profiler=Vx;Ve.PureComponent=ed;Ve.StrictMode=Hx;Ve.Suspense=jx;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;Ve.act=R_;Ve.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=S_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)T_.call(e,l)&&!w_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:n.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(n){return n={$$typeof:Wx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Gx,_context:n},n.Consumer=n};Ve.createElement=A_;Ve.createFactory=function(n){var e=A_.bind(null,n);return e.type=n,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(n){return{$$typeof:Xx,render:n}};Ve.isValidElement=id;Ve.lazy=function(n){return{$$typeof:qx,_payload:{_status:-1,_result:n},_init:Jx}};Ve.memo=function(n,e){return{$$typeof:Yx,type:n,compare:e===void 0?null:e}};Ve.startTransition=function(n){var e=Ol.transition;Ol.transition={};try{n()}finally{Ol.transition=e}};Ve.unstable_act=R_;Ve.useCallback=function(n,e){return on.current.useCallback(n,e)};Ve.useContext=function(n){return on.current.useContext(n)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(n){return on.current.useDeferredValue(n)};Ve.useEffect=function(n,e){return on.current.useEffect(n,e)};Ve.useId=function(){return on.current.useId()};Ve.useImperativeHandle=function(n,e,t){return on.current.useImperativeHandle(n,e,t)};Ve.useInsertionEffect=function(n,e){return on.current.useInsertionEffect(n,e)};Ve.useLayoutEffect=function(n,e){return on.current.useLayoutEffect(n,e)};Ve.useMemo=function(n,e){return on.current.useMemo(n,e)};Ve.useReducer=function(n,e,t){return on.current.useReducer(n,e,t)};Ve.useRef=function(n){return on.current.useRef(n)};Ve.useState=function(n){return on.current.useState(n)};Ve.useSyncExternalStore=function(n,e,t){return on.current.useSyncExternalStore(n,e,t)};Ve.useTransition=function(){return on.current.useTransition()};Ve.version="18.3.1";x_.exports=Ve;var Dt=x_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey=Dt,ty=Symbol.for("react.element"),ny=Symbol.for("react.fragment"),iy=Object.prototype.hasOwnProperty,ry=ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sy={key:!0,ref:!0,__self:!0,__source:!0};function C_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)iy.call(e,i)&&!sy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ty,type:n,key:s,ref:o,props:r,_owner:ry.current}}Pc.Fragment=ny;Pc.jsx=C_;Pc.jsxs=C_;v_.exports=Pc;var Ae=v_.exports,b_={exports:{}},Tn={},P_={exports:{}},L_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,W){var K=I.length;I.push(W);e:for(;0<K;){var se=K-1>>>1,Se=I[se];if(0<r(Se,W))I[se]=W,I[K]=Se,K=se;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var W=I[0],K=I.pop();if(K!==W){I[0]=K;e:for(var se=0,Se=I.length,Ke=Se>>>1;se<Ke;){var V=2*(se+1)-1,te=I[V],de=V+1,re=I[de];if(0>r(te,K))de<Se&&0>r(re,te)?(I[se]=re,I[de]=K,se=de):(I[se]=te,I[V]=K,se=V);else if(de<Se&&0>r(re,K))I[se]=re,I[de]=K,se=de;else break e}}return W}function r(I,W){var K=I.sortIndex-W.sortIndex;return K!==0?K:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var W=t(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=I)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=t(c)}}function y(I){if(x=!1,v(I),!g)if(t(l)!==null)g=!0,X(C);else{var W=t(c);W!==null&&J(y,W.startTime-I)}}function C(I,W){g=!1,x&&(x=!1,d(b),b=-1),p=!0;var K=f;try{for(v(W),h=t(l);h!==null&&(!(h.expirationTime>W)||I&&!L());){var se=h.callback;if(typeof se=="function"){h.callback=null,f=h.priorityLevel;var Se=se(h.expirationTime<=W);W=n.unstable_now(),typeof Se=="function"?h.callback=Se:h===t(l)&&i(l),v(W)}else i(l);h=t(l)}if(h!==null)var Ke=!0;else{var V=t(c);V!==null&&J(y,V.startTime-W),Ke=!1}return Ke}finally{h=null,f=K,p=!1}}var R=!1,w=null,b=-1,T=5,M=-1;function L(){return!(n.unstable_now()-M<T)}function G(){if(w!==null){var I=n.unstable_now();M=I;var W=!0;try{W=w(!0,I)}finally{W?z():(R=!1,w=null)}}else R=!1}var z;if(typeof _=="function")z=function(){_(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Z=$.port2;$.port1.onmessage=G,z=function(){Z.postMessage(null)}}else z=function(){m(G,0)};function X(I){w=I,R||(R=!0,z())}function J(I,W){b=m(function(){I(n.unstable_now())},W)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,X(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var K=f;f=W;try{return I()}finally{f=K}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=f;f=I;try{return W()}finally{f=K}},n.unstable_scheduleCallback=function(I,W,K){var se=n.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=K+Se,I={id:u++,callback:W,priorityLevel:I,startTime:K,expirationTime:Se,sortIndex:-1},K>se?(I.sortIndex=K,e(c,I),t(l)===null&&I===t(c)&&(x?(d(b),b=-1):x=!0,J(y,K-se))):(I.sortIndex=Se,e(l,I),g||p||(g=!0,X(C))),I},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(I){var W=f;return function(){var K=f;f=W;try{return I.apply(this,arguments)}finally{f=K}}}})(L_);P_.exports=L_;var oy=P_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay=Dt,En=oy;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I_=new Set,oa={};function Qr(n,e){Vs(n,e),Vs(n+"Capture",e)}function Vs(n,e){for(oa[n]=e,n=0;n<e.length;n++)I_.add(e[n])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,ly=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Pp={};function cy(n){return fh.call(Pp,n)?!0:fh.call(bp,n)?!1:ly.test(n)?Pp[n]=!0:(bp[n]=!0,!1)}function uy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function hy(n,e,t,i){if(e===null||typeof e>"u"||uy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Gt[n]=new an(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Gt[e]=new an(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Gt[n]=new an(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Gt[n]=new an(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Gt[n]=new an(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Gt[n]=new an(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Gt[n]=new an(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Gt[n]=new an(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Gt[n]=new an(n,5,!1,n.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function sd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(rd,sd);Gt[e]=new an(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(rd,sd);Gt[e]=new an(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(rd,sd);Gt[e]=new an(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Gt[n]=new an(n,1,!1,n.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Gt[n]=new an(n,1,!1,n.toLowerCase(),null,!0,!0)});function od(n,e,t,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hy(e,t,r,i)&&(t=null),i||r===null?cy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var zi=ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),vs=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),mh=Symbol.for("react.suspense_list"),cd=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),U_=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function _o(n){return n===null||typeof n!="object"?null:(n=Lp&&n[Lp]||n["@@iterator"],typeof n=="function"?n:null)}var yt=Object.assign,eu;function Uo(n){if(eu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+n}var tu=!1;function nu(n,e){if(!n||tu)return"";tu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{tu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Uo(n):""}function fy(n){switch(n.tag){case 5:return Uo(n.type);case 16:return Uo("Lazy");case 13:return Uo("Suspense");case 19:return Uo("SuspenseList");case 0:case 2:case 15:return n=nu(n.type,!1),n;case 11:return n=nu(n.type.render,!1),n;case 1:return n=nu(n.type,!0),n;default:return""}}function gh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case xs:return"Fragment";case vs:return"Portal";case dh:return"Profiler";case ad:return"StrictMode";case ph:return"Suspense";case mh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D_:return(n.displayName||"Context")+".Consumer";case N_:return(n._context.displayName||"Context")+".Provider";case ld:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case cd:return e=n.displayName||null,e!==null?e:gh(n.type)||"Memo";case Ji:e=n._payload,n=n._init;try{return gh(n(e))}catch{}}return null}function dy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gh(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function F_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function py(n){var e=F_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wa(n){n._valueTracker||(n._valueTracker=py(n))}function O_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=F_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function tc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _h(n,e){var t=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Ip(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=vr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k_(n,e){e=e.checked,e!=null&&od(n,"checked",e,!1)}function vh(n,e){k_(n,e);var t=vr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xh(n,e.type,t):e.hasOwnProperty("defaultValue")&&xh(n,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Np(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xh(n,e,t){(e!=="number"||tc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Fo=Array.isArray;function Is(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+vr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function yh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Dp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(Fo(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:vr(t)}}function B_(n,e){var t=vr(e.value),i=vr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Up(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function z_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?z_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Xa,H_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function aa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},my=["Webkit","ms","Moz","O"];Object.keys(Wo).forEach(function(n){my.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Wo[e]=Wo[n]})});function V_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Wo.hasOwnProperty(n)&&Wo[n]?(""+e).trim():e+"px"}function G_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=V_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var gy=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mh(n,e){if(e){if(gy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Eh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=null;function ud(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wh=null,Ns=null,Ds=null;function Fp(n){if(n=Na(n)){if(typeof wh!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Uc(e),wh(n.stateNode,n.type,e))}}function W_(n){Ns?Ds?Ds.push(n):Ds=[n]:Ns=n}function X_(){if(Ns){var n=Ns,e=Ds;if(Ds=Ns=null,Fp(n),e)for(n=0;n<e.length;n++)Fp(e[n])}}function j_(n,e){return n(e)}function Y_(){}var iu=!1;function q_(n,e,t){if(iu)return n(e,t);iu=!0;try{return j_(n,e,t)}finally{iu=!1,(Ns!==null||Ds!==null)&&(Y_(),X_())}}function la(n,e){var t=n.stateNode;if(t===null)return null;var i=Uc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Ah=!1;if(Di)try{var vo={};Object.defineProperty(vo,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",vo,vo),window.removeEventListener("test",vo,vo)}catch{Ah=!1}function _y(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Xo=!1,nc=null,ic=!1,Rh=null,vy={onError:function(n){Xo=!0,nc=n}};function xy(n,e,t,i,r,s,o,a,l){Xo=!1,nc=null,_y.apply(vy,arguments)}function yy(n,e,t,i,r,s,o,a,l){if(xy.apply(this,arguments),Xo){if(Xo){var c=nc;Xo=!1,nc=null}else throw Error(ee(198));ic||(ic=!0,Rh=c)}}function es(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function $_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Op(n){if(es(n)!==n)throw Error(ee(188))}function Sy(n){var e=n.alternate;if(!e){if(e=es(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Op(r),n;if(s===i)return Op(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function K_(n){return n=Sy(n),n!==null?Z_(n):null}function Z_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Z_(n);if(e!==null)return e;n=n.sibling}return null}var J_=En.unstable_scheduleCallback,kp=En.unstable_cancelCallback,My=En.unstable_shouldYield,Ey=En.unstable_requestPaint,Tt=En.unstable_now,Ty=En.unstable_getCurrentPriorityLevel,hd=En.unstable_ImmediatePriority,Q_=En.unstable_UserBlockingPriority,rc=En.unstable_NormalPriority,wy=En.unstable_LowPriority,ev=En.unstable_IdlePriority,Lc=null,li=null;function Ay(n){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Lc,n,void 0,(n.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:by,Ry=Math.log,Cy=Math.LN2;function by(n){return n>>>=0,n===0?32:31-(Ry(n)/Cy|0)|0}var ja=64,Ya=4194304;function Oo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function sc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Oo(a):(s&=o,s!==0&&(i=Oo(s)))}else o=t&~r,o!==0?i=Oo(o):s!==0&&(i=Oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Qn(e),r=1<<t,i|=n[t],e&=~r;return i}function Py(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ly(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=Py(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ch(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tv(){var n=ja;return ja<<=1,!(ja&4194240)&&(ja=64),n}function ru(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function La(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Qn(e),n[e]=t}function Iy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Qn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function fd(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Qn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var rt=0;function nv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var iv,dd,rv,sv,ov,bh=!1,qa=[],lr=null,cr=null,ur=null,ca=new Map,ua=new Map,tr=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(n,e){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function xo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Na(e),e!==null&&dd(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Dy(n,e,t,i,r){switch(e){case"focusin":return lr=xo(lr,n,e,t,i,r),!0;case"dragenter":return cr=xo(cr,n,e,t,i,r),!0;case"mouseover":return ur=xo(ur,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,xo(ca.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,xo(ua.get(s)||null,n,e,t,i,r)),!0}return!1}function av(n){var e=Or(n.target);if(e!==null){var t=es(e);if(t!==null){if(e=t.tag,e===13){if(e=$_(t),e!==null){n.blockedOn=e,ov(n.priority,function(){rv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function kl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ph(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Th=i,t.target.dispatchEvent(i),Th=null}else return e=Na(t),e!==null&&dd(e),n.blockedOn=t,!1;e.shift()}return!0}function zp(n,e,t){kl(n)&&t.delete(e)}function Uy(){bh=!1,lr!==null&&kl(lr)&&(lr=null),cr!==null&&kl(cr)&&(cr=null),ur!==null&&kl(ur)&&(ur=null),ca.forEach(zp),ua.forEach(zp)}function yo(n,e){n.blockedOn===e&&(n.blockedOn=null,bh||(bh=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Uy)))}function ha(n){function e(r){return yo(r,n)}if(0<qa.length){yo(qa[0],n);for(var t=1;t<qa.length;t++){var i=qa[t];i.blockedOn===n&&(i.blockedOn=null)}}for(lr!==null&&yo(lr,n),cr!==null&&yo(cr,n),ur!==null&&yo(ur,n),ca.forEach(e),ua.forEach(e),t=0;t<tr.length;t++)i=tr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<tr.length&&(t=tr[0],t.blockedOn===null);)av(t),t.blockedOn===null&&tr.shift()}var Us=zi.ReactCurrentBatchConfig,oc=!0;function Fy(n,e,t,i){var r=rt,s=Us.transition;Us.transition=null;try{rt=1,pd(n,e,t,i)}finally{rt=r,Us.transition=s}}function Oy(n,e,t,i){var r=rt,s=Us.transition;Us.transition=null;try{rt=4,pd(n,e,t,i)}finally{rt=r,Us.transition=s}}function pd(n,e,t,i){if(oc){var r=Ph(n,e,t,i);if(r===null)pu(n,e,i,ac,t),Bp(n,i);else if(Dy(r,n,e,t,i))i.stopPropagation();else if(Bp(n,i),e&4&&-1<Ny.indexOf(n)){for(;r!==null;){var s=Na(r);if(s!==null&&iv(s),s=Ph(n,e,t,i),s===null&&pu(n,e,i,ac,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(n,e,i,null,t)}}var ac=null;function Ph(n,e,t,i){if(ac=null,n=ud(i),n=Or(n),n!==null)if(e=es(n),e===null)n=null;else if(t=e.tag,t===13){if(n=$_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ac=n,null}function lv(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ty()){case hd:return 1;case Q_:return 4;case rc:case wy:return 16;case ev:return 536870912;default:return 16}default:return 16}}var rr=null,md=null,Bl=null;function cv(){if(Bl)return Bl;var n,e=md,t=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Bl=r.slice(n,1<i?1-i:void 0)}function zl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function $a(){return!0}function Hp(){return!1}function wn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:Hp,this.isPropagationStopped=Hp,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gd=wn(ao),Ia=yt({},ao,{view:0,detail:0}),ky=wn(Ia),su,ou,So,Ic=yt({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==So&&(So&&n.type==="mousemove"?(su=n.screenX-So.screenX,ou=n.screenY-So.screenY):ou=su=0,So=n),su)},movementY:function(n){return"movementY"in n?n.movementY:ou}}),Vp=wn(Ic),By=yt({},Ic,{dataTransfer:0}),zy=wn(By),Hy=yt({},Ia,{relatedTarget:0}),au=wn(Hy),Vy=yt({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),Gy=wn(Vy),Wy=yt({},ao,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xy=wn(Wy),jy=yt({},ao,{data:0}),Gp=wn(jy),Yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=$y[n])?!!e[n]:!1}function _d(){return Ky}var Zy=yt({},Ia,{key:function(n){if(n.key){var e=Yy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?qy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(n){return n.type==="keypress"?zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Jy=wn(Zy),Qy=yt({},Ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=wn(Qy),eS=yt({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),tS=wn(eS),nS=yt({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),iS=wn(nS),rS=yt({},Ic,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),sS=wn(rS),oS=[9,13,27,32],vd=Di&&"CompositionEvent"in window,jo=null;Di&&"documentMode"in document&&(jo=document.documentMode);var aS=Di&&"TextEvent"in window&&!jo,uv=Di&&(!vd||jo&&8<jo&&11>=jo),Xp=" ",jp=!1;function hv(n,e){switch(n){case"keyup":return oS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function lS(n,e){switch(n){case"compositionend":return fv(e);case"keypress":return e.which!==32?null:(jp=!0,Xp);case"textInput":return n=e.data,n===Xp&&jp?null:n;default:return null}}function cS(n,e){if(ys)return n==="compositionend"||!vd&&hv(n,e)?(n=cv(),Bl=md=rr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uv&&e.locale!=="ko"?null:e.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!uS[n.type]:e==="textarea"}function dv(n,e,t,i){W_(i),e=lc(e,"onChange"),0<e.length&&(t=new gd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Yo=null,fa=null;function hS(n){Tv(n,0)}function Nc(n){var e=Es(n);if(O_(e))return n}function fS(n,e){if(n==="change")return e}var pv=!1;if(Di){var lu;if(Di){var cu="oninput"in document;if(!cu){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),cu=typeof qp.oninput=="function"}lu=cu}else lu=!1;pv=lu&&(!document.documentMode||9<document.documentMode)}function $p(){Yo&&(Yo.detachEvent("onpropertychange",mv),fa=Yo=null)}function mv(n){if(n.propertyName==="value"&&Nc(fa)){var e=[];dv(e,fa,n,ud(n)),q_(hS,e)}}function dS(n,e,t){n==="focusin"?($p(),Yo=e,fa=t,Yo.attachEvent("onpropertychange",mv)):n==="focusout"&&$p()}function pS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Nc(fa)}function mS(n,e){if(n==="click")return Nc(e)}function gS(n,e){if(n==="input"||n==="change")return Nc(e)}function _S(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ti=typeof Object.is=="function"?Object.is:_S;function da(n,e){if(ti(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!fh.call(e,r)||!ti(n[r],e[r]))return!1}return!0}function Kp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zp(n,e){var t=Kp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Kp(t)}}function gv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?gv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function _v(){for(var n=window,e=tc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=tc(n.document)}return e}function xd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function vS(n){var e=_v(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&gv(t.ownerDocument.documentElement,t)){if(i!==null&&xd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Zp(t,s);var o=Zp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var xS=Di&&"documentMode"in document&&11>=document.documentMode,Ss=null,Lh=null,qo=null,Ih=!1;function Jp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ih||Ss==null||Ss!==tc(i)||(i=Ss,"selectionStart"in i&&xd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qo&&da(qo,i)||(qo=i,i=lc(Lh,"onSelect"),0<i.length&&(e=new gd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ss)))}function Ka(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ms={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},uu={},vv={};Di&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Dc(n){if(uu[n])return uu[n];if(!Ms[n])return n;var e=Ms[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in vv)return uu[n]=e[t];return n}var xv=Dc("animationend"),yv=Dc("animationiteration"),Sv=Dc("animationstart"),Mv=Dc("transitionend"),Ev=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,e){Ev.set(n,e),Qr(e,[n])}for(var hu=0;hu<Qp.length;hu++){var fu=Qp[hu],yS=fu.toLowerCase(),SS=fu[0].toUpperCase()+fu.slice(1);Sr(yS,"on"+SS)}Sr(xv,"onAnimationEnd");Sr(yv,"onAnimationIteration");Sr(Sv,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(Mv,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function em(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,yy(i,e,void 0,n),n.currentTarget=null}function Tv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;em(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;em(r,a,c),s=l}}}if(ic)throw n=Rh,ic=!1,Rh=null,n}function ft(n,e){var t=e[Oh];t===void 0&&(t=e[Oh]=new Set);var i=n+"__bubble";t.has(i)||(wv(e,n,2,!1),t.add(i))}function du(n,e,t){var i=0;e&&(i|=4),wv(t,n,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function pa(n){if(!n[Za]){n[Za]=!0,I_.forEach(function(t){t!=="selectionchange"&&(MS.has(t)||du(t,!1,n),du(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Za]||(e[Za]=!0,du("selectionchange",!1,e))}}function wv(n,e,t,i){switch(lv(e)){case 1:var r=Fy;break;case 4:r=Oy;break;default:r=pd}t=r.bind(null,e,t,n),r=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function pu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}q_(function(){var c=s,u=ud(t),h=[];e:{var f=Ev.get(n);if(f!==void 0){var p=gd,g=n;switch(n){case"keypress":if(zl(t)===0)break e;case"keydown":case"keyup":p=Jy;break;case"focusin":g="focus",p=au;break;case"focusout":g="blur",p=au;break;case"beforeblur":case"afterblur":p=au;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tS;break;case xv:case yv:case Sv:p=Gy;break;case Mv:p=iS;break;case"scroll":p=ky;break;case"wheel":p=sS;break;case"copy":case"cut":case"paste":p=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wp}var x=(e&4)!==0,m=!x&&n==="scroll",d=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=la(_,d),y!=null&&x.push(ma(_,y,v)))),m)break;_=_.return}0<x.length&&(f=new p(f,g,null,t,u),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Th&&(g=t.relatedTarget||t.fromElement)&&(Or(g)||g[Ui]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Or(g):null,g!==null&&(m=es(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Vp,y="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(x=Wp,y="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?f:Es(p),v=g==null?f:Es(g),f=new x(y,_+"leave",p,t,u),f.target=m,f.relatedTarget=v,y=null,Or(u)===c&&(x=new x(d,_+"enter",g,t,u),x.target=v,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,d=g,_=0,v=x;v;v=ns(v))_++;for(v=0,y=d;y;y=ns(y))v++;for(;0<_-v;)x=ns(x),_--;for(;0<v-_;)d=ns(d),v--;for(;_--;){if(x===d||d!==null&&x===d.alternate)break t;x=ns(x),d=ns(d)}x=null}else x=null;p!==null&&tm(h,f,p,x,!1),g!==null&&m!==null&&tm(h,m,g,x,!0)}}e:{if(f=c?Es(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=fS;else if(Yp(f))if(pv)C=gS;else{C=pS;var R=dS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=mS);if(C&&(C=C(n,c))){dv(h,C,t,u);break e}R&&R(n,f,c),n==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&xh(f,"number",f.value)}switch(R=c?Es(c):window,n){case"focusin":(Yp(R)||R.contentEditable==="true")&&(Ss=R,Lh=c,qo=null);break;case"focusout":qo=Lh=Ss=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,Jp(h,t,u);break;case"selectionchange":if(xS)break;case"keydown":case"keyup":Jp(h,t,u)}var w;if(vd)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ys?hv(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(uv&&t.locale!=="ko"&&(ys||b!=="onCompositionStart"?b==="onCompositionEnd"&&ys&&(w=cv()):(rr=u,md="value"in rr?rr.value:rr.textContent,ys=!0)),R=lc(c,b),0<R.length&&(b=new Gp(b,n,null,t,u),h.push({event:b,listeners:R}),w?b.data=w:(w=fv(t),w!==null&&(b.data=w)))),(w=aS?lS(n,t):cS(n,t))&&(c=lc(c,"onBeforeInput"),0<c.length&&(u=new Gp("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=w))}Tv(h,e)})}function ma(n,e,t){return{instance:n,listener:e,currentTarget:t}}function lc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(n,t),s!=null&&i.unshift(ma(n,s,r)),s=la(n,e),s!=null&&i.push(ma(n,s,r))),n=n.return}return i}function ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(t,s),l!=null&&o.unshift(ma(t,l,a))):r||(l=la(t,s),l!=null&&o.push(ma(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var ES=/\r\n?/g,TS=/\u0000|\uFFFD/g;function nm(n){return(typeof n=="string"?n:""+n).replace(ES,`
`).replace(TS,"")}function Ja(n,e,t){if(e=nm(e),nm(n)!==e&&t)throw Error(ee(425))}function cc(){}var Nh=null,Dh=null;function Uh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(n){return im.resolve(null).then(n).catch(RS)}:Fh;function RS(n){setTimeout(function(){throw n})}function mu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ha(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ha(e)}function hr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function rm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var lo=Math.random().toString(36).slice(2),ai="__reactFiber$"+lo,ga="__reactProps$"+lo,Ui="__reactContainer$"+lo,Oh="__reactEvents$"+lo,CS="__reactListeners$"+lo,bS="__reactHandles$"+lo;function Or(n){var e=n[ai];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ui]||t[ai]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=rm(n);n!==null;){if(t=n[ai])return t;n=rm(n)}return e}n=t,t=n.parentNode}return null}function Na(n){return n=n[ai]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Es(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Uc(n){return n[ga]||null}var kh=[],Ts=-1;function Mr(n){return{current:n}}function dt(n){0>Ts||(n.current=kh[Ts],kh[Ts]=null,Ts--)}function lt(n,e){Ts++,kh[Ts]=n.current,n.current=e}var xr={},Kt=Mr(xr),hn=Mr(!1),Wr=xr;function Gs(n,e){var t=n.type.contextTypes;if(!t)return xr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function fn(n){return n=n.childContextTypes,n!=null}function uc(){dt(hn),dt(Kt)}function sm(n,e,t){if(Kt.current!==xr)throw Error(ee(168));lt(Kt,e),lt(hn,t)}function Av(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,dy(n)||"Unknown",r));return yt({},t,i)}function hc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,Wr=Kt.current,lt(Kt,n),lt(hn,hn.current),!0}function om(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=Av(n,e,Wr),i.__reactInternalMemoizedMergedChildContext=n,dt(hn),dt(Kt),lt(Kt,n)):dt(hn),lt(hn,t)}var Ri=null,Fc=!1,gu=!1;function Rv(n){Ri===null?Ri=[n]:Ri.push(n)}function PS(n){Fc=!0,Rv(n)}function Er(){if(!gu&&Ri!==null){gu=!0;var n=0,e=rt;try{var t=Ri;for(rt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ri=null,Fc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(n+1)),J_(hd,Er),r}finally{rt=e,gu=!1}}return null}var ws=[],As=0,fc=null,dc=0,Pn=[],Ln=0,Xr=null,Ci=1,bi="";function Ir(n,e){ws[As++]=dc,ws[As++]=fc,fc=n,dc=e}function Cv(n,e,t){Pn[Ln++]=Ci,Pn[Ln++]=bi,Pn[Ln++]=Xr,Xr=n;var i=Ci;n=bi;var r=32-Qn(i)-1;i&=~(1<<r),t+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-Qn(e)+r|t<<r|i,bi=s+n}else Ci=1<<s|t<<r|i,bi=n}function yd(n){n.return!==null&&(Ir(n,1),Cv(n,1,0))}function Sd(n){for(;n===fc;)fc=ws[--As],ws[As]=null,dc=ws[--As],ws[As]=null;for(;n===Xr;)Xr=Pn[--Ln],Pn[Ln]=null,bi=Pn[--Ln],Pn[Ln]=null,Ci=Pn[--Ln],Pn[Ln]=null}var Mn=null,yn=null,pt=!1,Yn=null;function bv(n,e){var t=Nn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function am(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mn=n,yn=hr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mn=n,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Xr!==null?{id:Ci,overflow:bi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Nn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mn=n,yn=null,!0):!1;default:return!1}}function Bh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zh(n){if(pt){var e=yn;if(e){var t=e;if(!am(n,e)){if(Bh(n))throw Error(ee(418));e=hr(t.nextSibling);var i=Mn;e&&am(n,e)?bv(i,t):(n.flags=n.flags&-4097|2,pt=!1,Mn=n)}}else{if(Bh(n))throw Error(ee(418));n.flags=n.flags&-4097|2,pt=!1,Mn=n}}}function lm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mn=n}function Qa(n){if(n!==Mn)return!1;if(!pt)return lm(n),pt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Uh(n.type,n.memoizedProps)),e&&(e=yn)){if(Bh(n))throw Pv(),Error(ee(418));for(;e;)bv(n,e),e=hr(e.nextSibling)}if(lm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yn=hr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yn=null}}else yn=Mn?hr(n.stateNode.nextSibling):null;return!0}function Pv(){for(var n=yn;n;)n=hr(n.nextSibling)}function Ws(){yn=Mn=null,pt=!1}function Md(n){Yn===null?Yn=[n]:Yn.push(n)}var LS=zi.ReactCurrentBatchConfig;function Mo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function el(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function cm(n){var e=n._init;return e(n._payload)}function Lv(n){function e(d,_){if(n){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=mr(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,y){return _===null||_.tag!==6?(_=Eu(v,d.mode,y),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,y){var C=v.type;return C===xs?u(d,_,v.props.children,y,v.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ji&&cm(C)===_.type)?(y=r(_,v.props),y.ref=Mo(d,_,v),y.return=d,y):(y=Yl(v.type,v.key,v.props,null,d.mode,y),y.ref=Mo(d,_,v),y.return=d,y)}function c(d,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Tu(v,d.mode,y),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function u(d,_,v,y,C){return _===null||_.tag!==7?(_=Gr(v,d.mode,y,C),_.return=d,_):(_=r(_,v),_.return=d,_)}function h(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Eu(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ga:return v=Yl(_.type,_.key,_.props,null,d.mode,v),v.ref=Mo(d,null,_),v.return=d,v;case vs:return _=Tu(_,d.mode,v),_.return=d,_;case Ji:var y=_._init;return h(d,y(_._payload),v)}if(Fo(_)||_o(_))return _=Gr(_,d.mode,v,null),_.return=d,_;el(d,_)}return null}function f(d,_,v,y){var C=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(d,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ga:return v.key===C?l(d,_,v,y):null;case vs:return v.key===C?c(d,_,v,y):null;case Ji:return C=v._init,f(d,_,C(v._payload),y)}if(Fo(v)||_o(v))return C!==null?null:u(d,_,v,y,null);el(d,v)}return null}function p(d,_,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(_,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ga:return d=d.get(y.key===null?v:y.key)||null,l(_,d,y,C);case vs:return d=d.get(y.key===null?v:y.key)||null,c(_,d,y,C);case Ji:var R=y._init;return p(d,_,v,R(y._payload),C)}if(Fo(y)||_o(y))return d=d.get(v)||null,u(_,d,y,C,null);el(_,y)}return null}function g(d,_,v,y){for(var C=null,R=null,w=_,b=_=0,T=null;w!==null&&b<v.length;b++){w.index>b?(T=w,w=null):T=w.sibling;var M=f(d,w,v[b],y);if(M===null){w===null&&(w=T);break}n&&w&&M.alternate===null&&e(d,w),_=s(M,_,b),R===null?C=M:R.sibling=M,R=M,w=T}if(b===v.length)return t(d,w),pt&&Ir(d,b),C;if(w===null){for(;b<v.length;b++)w=h(d,v[b],y),w!==null&&(_=s(w,_,b),R===null?C=w:R.sibling=w,R=w);return pt&&Ir(d,b),C}for(w=i(d,w);b<v.length;b++)T=p(w,d,b,v[b],y),T!==null&&(n&&T.alternate!==null&&w.delete(T.key===null?b:T.key),_=s(T,_,b),R===null?C=T:R.sibling=T,R=T);return n&&w.forEach(function(L){return e(d,L)}),pt&&Ir(d,b),C}function x(d,_,v,y){var C=_o(v);if(typeof C!="function")throw Error(ee(150));if(v=C.call(v),v==null)throw Error(ee(151));for(var R=C=null,w=_,b=_=0,T=null,M=v.next();w!==null&&!M.done;b++,M=v.next()){w.index>b?(T=w,w=null):T=w.sibling;var L=f(d,w,M.value,y);if(L===null){w===null&&(w=T);break}n&&w&&L.alternate===null&&e(d,w),_=s(L,_,b),R===null?C=L:R.sibling=L,R=L,w=T}if(M.done)return t(d,w),pt&&Ir(d,b),C;if(w===null){for(;!M.done;b++,M=v.next())M=h(d,M.value,y),M!==null&&(_=s(M,_,b),R===null?C=M:R.sibling=M,R=M);return pt&&Ir(d,b),C}for(w=i(d,w);!M.done;b++,M=v.next())M=p(w,d,b,M.value,y),M!==null&&(n&&M.alternate!==null&&w.delete(M.key===null?b:M.key),_=s(M,_,b),R===null?C=M:R.sibling=M,R=M);return n&&w.forEach(function(G){return e(d,G)}),pt&&Ir(d,b),C}function m(d,_,v,y){if(typeof v=="object"&&v!==null&&v.type===xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ga:e:{for(var C=v.key,R=_;R!==null;){if(R.key===C){if(C=v.type,C===xs){if(R.tag===7){t(d,R.sibling),_=r(R,v.props.children),_.return=d,d=_;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ji&&cm(C)===R.type){t(d,R.sibling),_=r(R,v.props),_.ref=Mo(d,R,v),_.return=d,d=_;break e}t(d,R);break}else e(d,R);R=R.sibling}v.type===xs?(_=Gr(v.props.children,d.mode,y,v.key),_.return=d,d=_):(y=Yl(v.type,v.key,v.props,null,d.mode,y),y.ref=Mo(d,_,v),y.return=d,d=y)}return o(d);case vs:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=Tu(v,d.mode,y),_.return=d,d=_}return o(d);case Ji:return R=v._init,m(d,_,R(v._payload),y)}if(Fo(v))return g(d,_,v,y);if(_o(v))return x(d,_,v,y);el(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,v),_.return=d,d=_):(t(d,_),_=Eu(v,d.mode,y),_.return=d,d=_),o(d)):t(d,_)}return m}var Xs=Lv(!0),Iv=Lv(!1),pc=Mr(null),mc=null,Rs=null,Ed=null;function Td(){Ed=Rs=mc=null}function wd(n){var e=pc.current;dt(pc),n._currentValue=e}function Hh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Fs(n,e){mc=n,Ed=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function On(n){var e=n._currentValue;if(Ed!==n)if(n={context:n,memoizedValue:e,next:null},Rs===null){if(mc===null)throw Error(ee(308));Rs=n,mc.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return e}var kr=null;function Ad(n){kr===null?kr=[n]:kr.push(n)}function Nv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Ad(e)):(t.next=r.next,r.next=t),e.interleaved=t,Fi(n,i)}function Fi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Qi=!1;function Rd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ii(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(n,t)}return r=i.interleaved,r===null?(e.next=e,Ad(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(n,t)}function Hl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fd(n,t)}}function um(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function gc(n,e,t,i){var r=n.updateQueue;Qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,x=a;switch(f=e,p=t,x.tag){case 1:if(g=x.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=yt({},h,f);break e;case 2:Qi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,n.lanes=o,n.memoizedState=h}}function hm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Da={},ci=Mr(Da),_a=Mr(Da),va=Mr(Da);function Br(n){if(n===Da)throw Error(ee(174));return n}function Cd(n,e){switch(lt(va,e),lt(_a,n),lt(ci,Da),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Sh(e,n)}dt(ci),lt(ci,e)}function js(){dt(ci),dt(_a),dt(va)}function Uv(n){Br(va.current);var e=Br(ci.current),t=Sh(e,n.type);e!==t&&(lt(_a,n),lt(ci,t))}function bd(n){_a.current===n&&(dt(ci),dt(_a))}var _t=Mr(0);function _c(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function Pd(){for(var n=0;n<_u.length;n++)_u[n]._workInProgressVersionPrimary=null;_u.length=0}var Vl=zi.ReactCurrentDispatcher,vu=zi.ReactCurrentBatchConfig,jr=0,xt=null,Ct=null,Ut=null,vc=!1,$o=!1,xa=0,IS=0;function Xt(){throw Error(ee(321))}function Ld(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ti(n[t],e[t]))return!1;return!0}function Id(n,e,t,i,r,s){if(jr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=n===null||n.memoizedState===null?FS:OS,n=t(i,r),$o){s=0;do{if($o=!1,xa=0,25<=s)throw Error(ee(301));s+=1,Ut=Ct=null,e.updateQueue=null,Vl.current=kS,n=t(i,r)}while($o)}if(Vl.current=xc,e=Ct!==null&&Ct.next!==null,jr=0,Ut=Ct=xt=null,vc=!1,e)throw Error(ee(300));return n}function Nd(){var n=xa!==0;return xa=0,n}function si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?xt.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function kn(){if(Ct===null){var n=xt.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=Ut===null?xt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=n;else{if(n===null)throw Error(ee(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?xt.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function ya(n,e){return typeof e=="function"?e(n):e}function xu(n){var e=kn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((jr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,xt.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,xt.lanes|=s,Yr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function yu(n){var e=kn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Fv(){}function Ov(n,e){var t=xt,i=kn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Dd(zv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,Sa(9,Bv.bind(null,t,i,r,e),void 0,null),Ot===null)throw Error(ee(349));jr&30||kv(t,e,r)}return r}function kv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Bv(n,e,t,i){e.value=t,e.getSnapshot=i,Hv(e)&&Vv(n)}function zv(n,e,t){return t(function(){Hv(e)&&Vv(n)})}function Hv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ti(n,t)}catch{return!0}}function Vv(n){var e=Fi(n,1);e!==null&&ei(e,n,1,-1)}function fm(n){var e=si();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},e.queue=n,n=n.dispatch=US.bind(null,xt,n),[e.memoizedState,n]}function Sa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Gv(){return kn().memoizedState}function Gl(n,e,t,i){var r=si();xt.flags|=n,r.memoizedState=Sa(1|e,t,void 0,i===void 0?null:i)}function Oc(n,e,t,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Ld(i,o.deps)){r.memoizedState=Sa(e,t,s,i);return}}xt.flags|=n,r.memoizedState=Sa(1|e,t,s,i)}function dm(n,e){return Gl(8390656,8,n,e)}function Dd(n,e){return Oc(2048,8,n,e)}function Wv(n,e){return Oc(4,2,n,e)}function Xv(n,e){return Oc(4,4,n,e)}function jv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Yv(n,e,t){return t=t!=null?t.concat([n]):null,Oc(4,4,jv.bind(null,e,n),t)}function Ud(){}function qv(n,e){var t=kn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function $v(n,e){var t=kn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Kv(n,e,t){return jr&21?(ti(t,e)||(t=tv(),xt.lanes|=t,Yr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function NS(n,e){var t=rt;rt=t!==0&&4>t?t:4,n(!0);var i=vu.transition;vu.transition={};try{n(!1),e()}finally{rt=t,vu.transition=i}}function Zv(){return kn().memoizedState}function DS(n,e,t){var i=pr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Jv(n))Qv(e,t);else if(t=Nv(n,e,t,i),t!==null){var r=tn();ei(t,n,i,r),e0(t,e,i)}}function US(n,e,t){var i=pr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Jv(n))Qv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,Ad(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Nv(n,e,r,i),t!==null&&(r=tn(),ei(t,n,i,r),e0(t,e,i))}}function Jv(n){var e=n.alternate;return n===xt||e!==null&&e===xt}function Qv(n,e){$o=vc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function e0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fd(n,t)}}var xc={readContext:On,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},FS={readContext:On,useCallback:function(n,e){return si().memoizedState=[n,e===void 0?null:e],n},useContext:On,useEffect:dm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Gl(4194308,4,jv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Gl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Gl(4,2,n,e)},useMemo:function(n,e){var t=si();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=si();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=DS.bind(null,xt,n),[i.memoizedState,n]},useRef:function(n){var e=si();return n={current:n},e.memoizedState=n},useState:fm,useDebugValue:Ud,useDeferredValue:function(n){return si().memoizedState=n},useTransition:function(){var n=fm(!1),e=n[0];return n=NS.bind(null,n[1]),si().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=xt,r=si();if(pt){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Ot===null)throw Error(ee(349));jr&30||kv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,dm(zv.bind(null,i,s,n),[n]),i.flags|=2048,Sa(9,Bv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=si(),e=Ot.identifierPrefix;if(pt){var t=bi,i=Ci;t=(i&~(1<<32-Qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=xa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=IS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},OS={readContext:On,useCallback:qv,useContext:On,useEffect:Dd,useImperativeHandle:Yv,useInsertionEffect:Wv,useLayoutEffect:Xv,useMemo:$v,useReducer:xu,useRef:Gv,useState:function(){return xu(ya)},useDebugValue:Ud,useDeferredValue:function(n){var e=kn();return Kv(e,Ct.memoizedState,n)},useTransition:function(){var n=xu(ya)[0],e=kn().memoizedState;return[n,e]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Zv,unstable_isNewReconciler:!1},kS={readContext:On,useCallback:qv,useContext:On,useEffect:Dd,useImperativeHandle:Yv,useInsertionEffect:Wv,useLayoutEffect:Xv,useMemo:$v,useReducer:yu,useRef:Gv,useState:function(){return yu(ya)},useDebugValue:Ud,useDeferredValue:function(n){var e=kn();return Ct===null?e.memoizedState=n:Kv(e,Ct.memoizedState,n)},useTransition:function(){var n=yu(ya)[0],e=kn().memoizedState;return[n,e]},useMutableSource:Fv,useSyncExternalStore:Ov,useId:Zv,unstable_isNewReconciler:!1};function Xn(n,e){if(n&&n.defaultProps){e=yt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Vh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:yt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var kc={isMounted:function(n){return(n=n._reactInternals)?es(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=tn(),r=pr(n),s=Ii(i,r);s.payload=e,t!=null&&(s.callback=t),e=fr(n,s,r),e!==null&&(ei(e,n,r,i),Hl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=tn(),r=pr(n),s=Ii(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=fr(n,s,r),e!==null&&(ei(e,n,r,i),Hl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=tn(),i=pr(n),r=Ii(t,i);r.tag=2,e!=null&&(r.callback=e),e=fr(n,r,i),e!==null&&(ei(e,n,i,t),Hl(e,n,i))}};function pm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(t,i)||!da(r,s):!0}function t0(n,e,t){var i=!1,r=xr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=fn(e)?Wr:Kt.current,i=e.contextTypes,s=(i=i!=null)?Gs(n,r):xr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function mm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&kc.enqueueReplaceState(e,e.state,null)}function Gh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Rd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=fn(e)?Wr:Kt.current,r.context=Gs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kc.enqueueReplaceState(r,r.state,null),gc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,e){try{var t="",i=e;do t+=fy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Su(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Wh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var BS=typeof WeakMap=="function"?WeakMap:Map;function n0(n,e,t){t=Ii(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Sc||(Sc=!0,ef=i),Wh(n,e)},t}function i0(n,e,t){t=Ii(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Wh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Wh(n,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function gm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new BS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=QS.bind(null,n,e,t),e.then(n,n))}function _m(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function vm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ii(-1,1),e.tag=2,fr(t,e,1))),t.lanes|=1),n)}var zS=zi.ReactCurrentOwner,un=!1;function Qt(n,e,t,i){e.child=n===null?Iv(e,null,t,i):Xs(e,n.child,t,i)}function xm(n,e,t,i,r){t=t.render;var s=e.ref;return Fs(e,r),i=Id(n,e,t,i,s,r),t=Nd(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(pt&&t&&yd(e),e.flags|=1,Qt(n,e,i,r),e.child)}function ym(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Gd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,r0(n,e,s,i,r)):(n=Yl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:da,t(o,i)&&n.ref===e.ref)return Oi(n,e,r)}return e.flags|=1,n=mr(s,i),n.ref=e.ref,n.return=e,e.child=n}function r0(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(da(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Oi(n,e,r)}return Xh(n,e,t,i,r)}function s0(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(bs,xn),xn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,lt(bs,xn),xn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,lt(bs,xn),xn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,lt(bs,xn),xn|=i;return Qt(n,e,r,t),e.child}function o0(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Xh(n,e,t,i,r){var s=fn(t)?Wr:Kt.current;return s=Gs(e,s),Fs(e,r),t=Id(n,e,t,i,s,r),i=Nd(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(pt&&i&&yd(e),e.flags|=1,Qt(n,e,t,r),e.child)}function Sm(n,e,t,i,r){if(fn(t)){var s=!0;hc(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Wl(n,e),t0(e,t,i),Gh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=On(c):(c=fn(t)?Wr:Kt.current,c=Gs(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&mm(e,o,i,c),Qi=!1;var f=e.memoizedState;o.state=f,gc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||hn.current||Qi?(typeof u=="function"&&(Vh(e,t,u,i),l=e.memoizedState),(a=Qi||pm(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Dv(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=On(l):(l=fn(t)?Wr:Kt.current,l=Gs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&mm(e,o,i,l),Qi=!1,f=e.memoizedState,o.state=f,gc(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||hn.current||Qi?(typeof p=="function"&&(Vh(e,t,p,i),g=e.memoizedState),(c=Qi||pm(e,t,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return jh(n,e,t,i,s,r)}function jh(n,e,t,i,r,s){o0(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&om(e,t,!1),Oi(n,e,s);i=e.stateNode,zS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Xs(e,n.child,null,s),e.child=Xs(e,null,a,s)):Qt(n,e,a,s),e.memoizedState=i.state,r&&om(e,t,!0),e.child}function a0(n){var e=n.stateNode;e.pendingContext?sm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&sm(n,e.context,!1),Cd(n,e.containerInfo)}function Mm(n,e,t,i,r){return Ws(),Md(r),e.flags|=256,Qt(n,e,t,i),e.child}var Yh={dehydrated:null,treeContext:null,retryLane:0};function qh(n){return{baseLanes:n,cachePool:null,transitions:null}}function l0(n,e,t){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),lt(_t,r&1),n===null)return zh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hc(o,i,0,null),n=Gr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=qh(t),e.memoizedState=Yh,n):Fd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Gr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?qh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Yh,i}return s=n.child,n=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Fd(n,e){return e=Hc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function tl(n,e,t,i){return i!==null&&Md(i),Xs(e,n.child,null,t),n=Fd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function HS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Su(Error(ee(422))),tl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,n.child,null,o),e.child.memoizedState=qh(o),e.memoizedState=Yh,s);if(!(e.mode&1))return tl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Su(s,i,void 0),tl(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(n,r),ei(i,n,r,-1))}return Vd(),i=Su(Error(ee(421))),tl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=eM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yn=hr(r.nextSibling),Mn=e,pt=!0,Yn=null,n!==null&&(Pn[Ln++]=Ci,Pn[Ln++]=bi,Pn[Ln++]=Xr,Ci=n.id,bi=n.overflow,Xr=e),e=Fd(e,i.children),e.flags|=4096,e)}function Em(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Hh(n.return,e,t)}function Mu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function c0(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(n,e,i.children,t),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Em(n,t,e);else if(n.tag===19)Em(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(lt(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&_c(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Mu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&_c(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Mu(e,!0,t,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Oi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Yr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=mr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=mr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function VS(n,e,t){switch(e.tag){case 3:a0(e),Ws();break;case 5:Uv(e);break;case 1:fn(e.type)&&hc(e);break;case 4:Cd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(_t,_t.current&1),e.flags|=128,null):t&e.child.childLanes?l0(n,e,t):(lt(_t,_t.current&1),n=Oi(n,e,t),n!==null?n.sibling:null);lt(_t,_t.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return c0(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,s0(n,e,t)}return Oi(n,e,t)}var u0,$h,h0,f0;u0=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};$h=function(){};h0=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Br(ci.current);var s=null;switch(t){case"input":r=_h(n,r),i=_h(n,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=yh(n,r),i=yh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=cc)}Mh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f0=function(n,e,t,i){t!==i&&(e.flags|=4)};function Eo(n,e){if(!pt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function GS(n,e,t){var i=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&uc(),jt(e),null;case 3:return i=e.stateNode,js(),dt(hn),dt(Kt),Pd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Qa(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(rf(Yn),Yn=null))),$h(n,e),jt(e),null;case 5:bd(e);var r=Br(va.current);if(t=e.type,n!==null&&e.stateNode!=null)h0(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return jt(e),null}if(n=Br(ci.current),Qa(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[ga]=s,n=(e.mode&1)!==0,t){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)ft(ko[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Ip(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Dp(i,s),ft("invalid",i)}Mh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,n),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(t){case"input":Wa(i),Np(i,s,!0);break;case"textarea":Wa(i),Up(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=z_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ai]=e,n[ga]=i,u0(n,e,!1,!1),e.stateNode=n;e:{switch(o=Eh(t,i),t){case"dialog":ft("cancel",n),ft("close",n),r=i;break;case"iframe":case"object":case"embed":ft("load",n),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)ft(ko[r],n);r=i;break;case"source":ft("error",n),r=i;break;case"img":case"image":case"link":ft("error",n),ft("load",n),r=i;break;case"details":ft("toggle",n),r=i;break;case"input":Ip(n,i),r=_h(n,i),ft("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ft("invalid",n);break;case"textarea":Dp(n,i),r=yh(n,i),ft("invalid",n);break;default:r=i}Mh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?G_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&H_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&aa(n,l):typeof l=="number"&&aa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",n):l!=null&&od(n,s,l,o))}switch(t){case"input":Wa(n),Np(n,i,!1);break;case"textarea":Wa(n),Up(n);break;case"option":i.value!=null&&n.setAttribute("value",""+vr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Is(n,!!i.multiple,s,!1):i.defaultValue!=null&&Is(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=cc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(n&&e.stateNode!=null)f0(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Br(va.current),Br(ci.current),Qa(e)){if(i=e.stateNode,t=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==t)&&(n=Mn,n!==null))switch(n.tag){case 3:Ja(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return jt(e),null;case 13:if(dt(_t),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pt&&yn!==null&&e.mode&1&&!(e.flags&128))Pv(),Ws(),e.flags|=98560,s=!1;else if(s=Qa(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ai]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Yn!==null&&(rf(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||_t.current&1?bt===0&&(bt=3):Vd())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return js(),$h(n,e),n===null&&pa(e.stateNode.containerInfo),jt(e),null;case 10:return wd(e.type._context),jt(e),null;case 17:return fn(e.type)&&uc(),jt(e),null;case 19:if(dt(_t),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=_c(n),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return lt(_t,_t.current&1|2),e.child}n=n.sibling}s.tail!==null&&Tt()>qs&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(n=_c(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return jt(e),null}else 2*Tt()-s.renderingStartTime>qs&&t!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,t=_t.current,lt(_t,i?t&1|2:t&1),e):(jt(e),null);case 22:case 23:return Hd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function WS(n,e){switch(Sd(e),e.tag){case 1:return fn(e.type)&&uc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return js(),dt(hn),dt(Kt),Pd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return bd(e),null;case 13:if(dt(_t),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ws()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return dt(_t),null;case 4:return js(),null;case 10:return wd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var nl=!1,$t=!1,XS=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Cs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Mt(n,e,i)}else t.current=null}function Kh(n,e,t){try{t()}catch(i){Mt(n,e,i)}}var Tm=!1;function jS(n,e){if(Nh=oc,n=_v(),xd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Dh={focusedElem:n,selectionRange:t},oc=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Xn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){Mt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return g=Tm,Tm=!1,g}function Ko(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kh(e,t,s)}r=r.next}while(r!==i)}}function Bc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Zh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function d0(n){var e=n.alternate;e!==null&&(n.alternate=null,d0(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ai],delete e[ga],delete e[Oh],delete e[CS],delete e[bS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function p0(n){return n.tag===5||n.tag===3||n.tag===4}function wm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||p0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Jh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=cc));else if(i!==4&&(n=n.child,n!==null))for(Jh(n,e,t),n=n.sibling;n!==null;)Jh(n,e,t),n=n.sibling}function Qh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Qh(n,e,t),n=n.sibling;n!==null;)Qh(n,e,t),n=n.sibling}var Bt=null,jn=!1;function Wi(n,e,t){for(t=t.child;t!==null;)m0(n,e,t),t=t.sibling}function m0(n,e,t){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Lc,t)}catch{}switch(t.tag){case 5:$t||Cs(t,e);case 6:var i=Bt,r=jn;Bt=null,Wi(n,e,t),Bt=i,jn=r,Bt!==null&&(jn?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&(jn?(n=Bt,t=t.stateNode,n.nodeType===8?mu(n.parentNode,t):n.nodeType===1&&mu(n,t),ha(n)):mu(Bt,t.stateNode));break;case 4:i=Bt,r=jn,Bt=t.stateNode.containerInfo,jn=!0,Wi(n,e,t),Bt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(t,e,o),r=r.next}while(r!==i)}Wi(n,e,t);break;case 1:if(!$t&&(Cs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Mt(t,e,a)}Wi(n,e,t);break;case 21:Wi(n,e,t);break;case 22:t.mode&1?($t=(i=$t)||t.memoizedState!==null,Wi(n,e,t),$t=i):Wi(n,e,t);break;default:Wi(n,e,t)}}function Am(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new XS),e.forEach(function(i){var r=tM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Hn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,jn=!1;break e;case 3:Bt=a.stateNode.containerInfo,jn=!0;break e;case 4:Bt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Bt===null)throw Error(ee(160));m0(s,o,r),Bt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,n),e=e.sibling}function g0(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Hn(e,n),ri(n),i&4){try{Ko(3,n,n.return),Bc(3,n)}catch(x){Mt(n,n.return,x)}try{Ko(5,n,n.return)}catch(x){Mt(n,n.return,x)}}break;case 1:Hn(e,n),ri(n),i&512&&t!==null&&Cs(t,t.return);break;case 5:if(Hn(e,n),ri(n),i&512&&t!==null&&Cs(t,t.return),n.flags&32){var r=n.stateNode;try{aa(r,"")}catch(x){Mt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&k_(r,s),Eh(a,o);var c=Eh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?G_(r,h):u==="dangerouslySetInnerHTML"?H_(r,h):u==="children"?aa(r,h):od(r,u,h,c)}switch(a){case"input":vh(r,s);break;case"textarea":B_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Is(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(x){Mt(n,n.return,x)}}break;case 6:if(Hn(e,n),ri(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){Mt(n,n.return,x)}}break;case 3:if(Hn(e,n),ri(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(x){Mt(n,n.return,x)}break;case 4:Hn(e,n),ri(n);break;case 13:Hn(e,n),ri(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bd=Tt())),i&4&&Am(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?($t=(c=$t)||u,Hn(e,n),$t=c):Hn(e,n),ri(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(fe=n,u=n.child;u!==null;){for(h=fe=u;fe!==null;){switch(f=fe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ko(4,f,f.return);break;case 1:Cs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Mt(i,t,x)}}break;case 5:Cs(f,f.return);break;case 22:if(f.memoizedState!==null){Cm(h);continue}}p!==null?(p.return=f,fe=p):Cm(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V_("display",o))}catch(x){Mt(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Mt(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,n),ri(n),i&4&&Am(n);break;case 21:break;default:Hn(e,n),ri(n)}}function ri(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(p0(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=wm(n);Qh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wm(n);Jh(n,a,o);break;default:throw Error(ee(161))}}catch(l){Mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function YS(n,e,t){fe=n,_0(n)}function _0(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=nl;var c=$t;if(nl=o,($t=l)&&!c)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?bm(r):l!==null?(l.return=o,fe=l):bm(r);for(;s!==null;)fe=s,_0(s),s=s.sibling;fe=r,nl=a,$t=c}Rm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Rm(n)}}function Rm(n){for(;fe!==null;){var e=fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Bc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Xn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}hm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&ha(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}$t||e.flags&512&&Zh(e)}catch(f){Mt(e,e.return,f)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Cm(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function bm(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Bc(4,e)}catch(l){Mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Zh(e)}catch(l){Mt(e,s,l)}break;case 5:var o=e.return;try{Zh(e)}catch(l){Mt(e,o,l)}}}catch(l){Mt(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var qS=Math.ceil,yc=zi.ReactCurrentDispatcher,Od=zi.ReactCurrentOwner,Un=zi.ReactCurrentBatchConfig,$e=0,Ot=null,Rt=null,Vt=0,xn=0,bs=Mr(0),bt=0,Ma=null,Yr=0,zc=0,kd=0,Zo=null,cn=null,Bd=0,qs=1/0,wi=null,Sc=!1,ef=null,dr=null,il=!1,sr=null,Mc=0,Jo=0,tf=null,Xl=-1,jl=0;function tn(){return $e&6?Tt():Xl!==-1?Xl:Xl=Tt()}function pr(n){return n.mode&1?$e&2&&Vt!==0?Vt&-Vt:LS.transition!==null?(jl===0&&(jl=tv()),jl):(n=rt,n!==0||(n=window.event,n=n===void 0?16:lv(n.type)),n):1}function ei(n,e,t,i){if(50<Jo)throw Jo=0,tf=null,Error(ee(185));La(n,t,i),(!($e&2)||n!==Ot)&&(n===Ot&&(!($e&2)&&(zc|=t),bt===4&&nr(n,Vt)),dn(n,i),t===1&&$e===0&&!(e.mode&1)&&(qs=Tt()+500,Fc&&Er()))}function dn(n,e){var t=n.callbackNode;Ly(n,e);var i=sc(n,n===Ot?Vt:0);if(i===0)t!==null&&kp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&kp(t),e===1)n.tag===0?PS(Pm.bind(null,n)):Rv(Pm.bind(null,n)),AS(function(){!($e&6)&&Er()}),t=null;else{switch(nv(i)){case 1:t=hd;break;case 4:t=Q_;break;case 16:t=rc;break;case 536870912:t=ev;break;default:t=rc}t=w0(t,v0.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function v0(n,e){if(Xl=-1,jl=0,$e&6)throw Error(ee(327));var t=n.callbackNode;if(Os()&&n.callbackNode!==t)return null;var i=sc(n,n===Ot?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Ec(n,i);else{e=i;var r=$e;$e|=2;var s=y0();(Ot!==n||Vt!==e)&&(wi=null,qs=Tt()+500,Vr(n,e));do try{ZS();break}catch(a){x0(n,a)}while(!0);Td(),yc.current=s,$e=r,Rt!==null?e=0:(Ot=null,Vt=0,e=bt)}if(e!==0){if(e===2&&(r=Ch(n),r!==0&&(i=r,e=nf(n,r))),e===1)throw t=Ma,Vr(n,0),nr(n,i),dn(n,Tt()),t;if(e===6)nr(n,i);else{if(r=n.current.alternate,!(i&30)&&!$S(r)&&(e=Ec(n,i),e===2&&(s=Ch(n),s!==0&&(i=s,e=nf(n,s))),e===1))throw t=Ma,Vr(n,0),nr(n,i),dn(n,Tt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Nr(n,cn,wi);break;case 3:if(nr(n,i),(i&130023424)===i&&(e=Bd+500-Tt(),10<e)){if(sc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){tn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Fh(Nr.bind(null,n,cn,wi),e);break}Nr(n,cn,wi);break;case 4:if(nr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*qS(i/1960))-i,10<i){n.timeoutHandle=Fh(Nr.bind(null,n,cn,wi),i);break}Nr(n,cn,wi);break;case 5:Nr(n,cn,wi);break;default:throw Error(ee(329))}}}return dn(n,Tt()),n.callbackNode===t?v0.bind(null,n):null}function nf(n,e){var t=Zo;return n.current.memoizedState.isDehydrated&&(Vr(n,e).flags|=256),n=Ec(n,e),n!==2&&(e=cn,cn=t,e!==null&&rf(e)),n}function rf(n){cn===null?cn=n:cn.push.apply(cn,n)}function $S(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(n,e){for(e&=~kd,e&=~zc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Qn(e),i=1<<t;n[t]=-1,e&=~i}}function Pm(n){if($e&6)throw Error(ee(327));Os();var e=sc(n,0);if(!(e&1))return dn(n,Tt()),null;var t=Ec(n,e);if(n.tag!==0&&t===2){var i=Ch(n);i!==0&&(e=i,t=nf(n,i))}if(t===1)throw t=Ma,Vr(n,0),nr(n,e),dn(n,Tt()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Nr(n,cn,wi),dn(n,Tt()),null}function zd(n,e){var t=$e;$e|=1;try{return n(e)}finally{$e=t,$e===0&&(qs=Tt()+500,Fc&&Er())}}function qr(n){sr!==null&&sr.tag===0&&!($e&6)&&Os();var e=$e;$e|=1;var t=Un.transition,i=rt;try{if(Un.transition=null,rt=1,n)return n()}finally{rt=i,Un.transition=t,$e=e,!($e&6)&&Er()}}function Hd(){xn=bs.current,dt(bs)}function Vr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,wS(t)),Rt!==null)for(t=Rt.return;t!==null;){var i=t;switch(Sd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&uc();break;case 3:js(),dt(hn),dt(Kt),Pd();break;case 5:bd(i);break;case 4:js();break;case 13:dt(_t);break;case 19:dt(_t);break;case 10:wd(i.type._context);break;case 22:case 23:Hd()}t=t.return}if(Ot=n,Rt=n=mr(n.current,null),Vt=xn=e,bt=0,Ma=null,kd=zc=Yr=0,cn=Zo=null,kr!==null){for(e=0;e<kr.length;e++)if(t=kr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}kr=null}return n}function x0(n,e){do{var t=Rt;try{if(Td(),Vl.current=xc,vc){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vc=!1}if(jr=0,Ut=Ct=xt=null,$o=!1,xa=0,Od.current=null,t===null||t.return===null){bt=1,Ma=e,Rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=_m(o);if(p!==null){p.flags&=-257,vm(p,o,a,s,e),p.mode&1&&gm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){gm(s,c,e),Vd();break e}l=Error(ee(426))}}else if(pt&&a.mode&1){var m=_m(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),vm(m,o,a,s,e),Md(Ys(l,a));break e}}s=l=Ys(l,a),bt!==4&&(bt=2),Zo===null?Zo=[s]:Zo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=n0(s,l,e);um(s,d);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(dr===null||!dr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=i0(s,a,e);um(s,y);break e}}s=s.return}while(s!==null)}M0(t)}catch(C){e=C,Rt===t&&t!==null&&(Rt=t=t.return);continue}break}while(!0)}function y0(){var n=yc.current;return yc.current=xc,n===null?xc:n}function Vd(){(bt===0||bt===3||bt===2)&&(bt=4),Ot===null||!(Yr&268435455)&&!(zc&268435455)||nr(Ot,Vt)}function Ec(n,e){var t=$e;$e|=2;var i=y0();(Ot!==n||Vt!==e)&&(wi=null,Vr(n,e));do try{KS();break}catch(r){x0(n,r)}while(!0);if(Td(),$e=t,yc.current=i,Rt!==null)throw Error(ee(261));return Ot=null,Vt=0,bt}function KS(){for(;Rt!==null;)S0(Rt)}function ZS(){for(;Rt!==null&&!My();)S0(Rt)}function S0(n){var e=T0(n.alternate,n,xn);n.memoizedProps=n.pendingProps,e===null?M0(n):Rt=e,Od.current=null}function M0(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=WS(t,e),t!==null){t.flags&=32767,Rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,Rt=null;return}}else if(t=GS(t,e,xn),t!==null){Rt=t;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=n}while(e!==null);bt===0&&(bt=5)}function Nr(n,e,t){var i=rt,r=Un.transition;try{Un.transition=null,rt=1,JS(n,e,t,i)}finally{Un.transition=r,rt=i}return null}function JS(n,e,t,i){do Os();while(sr!==null);if($e&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Iy(n,s),n===Ot&&(Rt=Ot=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||il||(il=!0,w0(rc,function(){return Os(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=rt;rt=1;var a=$e;$e|=4,Od.current=null,jS(n,t),g0(t,n),vS(Dh),oc=!!Nh,Dh=Nh=null,n.current=t,YS(t),Ey(),$e=a,rt=o,Un.transition=s}else n.current=t;if(il&&(il=!1,sr=n,Mc=r),s=n.pendingLanes,s===0&&(dr=null),Ay(t.stateNode),dn(n,Tt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sc)throw Sc=!1,n=ef,ef=null,n;return Mc&1&&n.tag!==0&&Os(),s=n.pendingLanes,s&1?n===tf?Jo++:(Jo=0,tf=n):Jo=0,Er(),null}function Os(){if(sr!==null){var n=nv(Mc),e=Un.transition,t=rt;try{if(Un.transition=null,rt=16>n?16:n,sr===null)var i=!1;else{if(n=sr,sr=null,Mc=0,$e&6)throw Error(ee(331));var r=$e;for($e|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var u=fe;switch(u.tag){case 0:case 11:case 15:Ko(8,u,s)}var h=u.child;if(h!==null)h.return=u,fe=h;else for(;fe!==null;){u=fe;var f=u.sibling,p=u.return;if(d0(u),u===c){fe=null;break}if(f!==null){f.return=p,fe=f;break}fe=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ko(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,fe=d;break e}fe=s.return}}var _=n.current;for(fe=_;fe!==null;){o=fe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,fe=v;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bc(9,a)}}catch(C){Mt(a,a.return,C)}if(a===o){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if($e=r,Er(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Lc,n)}catch{}i=!0}return i}finally{rt=t,Un.transition=e}}return!1}function Lm(n,e,t){e=Ys(t,e),e=n0(n,e,1),n=fr(n,e,1),e=tn(),n!==null&&(La(n,1,e),dn(n,e))}function Mt(n,e,t){if(n.tag===3)Lm(n,n,t);else for(;e!==null;){if(e.tag===3){Lm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){n=Ys(t,n),n=i0(e,n,1),e=fr(e,n,1),n=tn(),e!==null&&(La(e,1,n),dn(e,n));break}}e=e.return}}function QS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=tn(),n.pingedLanes|=n.suspendedLanes&t,Ot===n&&(Vt&t)===t&&(bt===4||bt===3&&(Vt&130023424)===Vt&&500>Tt()-Bd?Vr(n,0):kd|=t),dn(n,e)}function E0(n,e){e===0&&(n.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var t=tn();n=Fi(n,e),n!==null&&(La(n,e,t),dn(n,t))}function eM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),E0(n,t)}function tM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),E0(n,t)}var T0;T0=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||hn.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,VS(n,e,t);un=!!(n.flags&131072)}else un=!1,pt&&e.flags&1048576&&Cv(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(n,e),n=e.pendingProps;var r=Gs(e,Kt.current);Fs(e,t),r=Id(null,e,i,n,r,t);var s=Nd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rd(e),r.updater=kc,e.stateNode=r,r._reactInternals=e,Gh(e,i,n,t),e=jh(null,e,i,!0,s,t)):(e.tag=0,pt&&s&&yd(e),Qt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=iM(i),n=Xn(i,n),r){case 0:e=Xh(null,e,i,n,t);break e;case 1:e=Sm(null,e,i,n,t);break e;case 11:e=xm(null,e,i,n,t);break e;case 14:e=ym(null,e,i,Xn(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Xh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Sm(n,e,i,r,t);case 3:e:{if(a0(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dv(n,e),gc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(ee(423)),e),e=Mm(n,e,i,t,r);break e}else if(i!==r){r=Ys(Error(ee(424)),e),e=Mm(n,e,i,t,r);break e}else for(yn=hr(e.stateNode.containerInfo.firstChild),Mn=e,pt=!0,Yn=null,t=Iv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ws(),i===r){e=Oi(n,e,t);break e}Qt(n,e,i,t)}e=e.child}return e;case 5:return Uv(e),n===null&&zh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Uh(i,r)?o=null:s!==null&&Uh(i,s)&&(e.flags|=32),o0(n,e),Qt(n,e,o,t),e.child;case 6:return n===null&&zh(e),null;case 13:return l0(n,e,t);case 4:return Cd(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Xs(e,null,i,t):Qt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),xm(n,e,i,r,t);case 7:return Qt(n,e,e.pendingProps,t),e.child;case 8:return Qt(n,e,e.pendingProps.children,t),e.child;case 12:return Qt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(pc,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!hn.current){e=Oi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Hh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Hh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,t),r=On(r),i=i(r),e.flags|=1,Qt(n,e,i,t),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),ym(n,e,i,r,t);case 15:return r0(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Wl(n,e),e.tag=1,fn(i)?(n=!0,hc(e)):n=!1,Fs(e,t),t0(e,i,r),Gh(e,i,r,t),jh(null,e,i,!0,n,t);case 19:return c0(n,e,t);case 22:return s0(n,e,t)}throw Error(ee(156,e.tag))};function w0(n,e){return J_(n,e)}function nM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(n,e,t,i){return new nM(n,e,t,i)}function Gd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function iM(n){if(typeof n=="function")return Gd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ld)return 11;if(n===cd)return 14}return 2}function mr(n,e){var t=n.alternate;return t===null?(t=Nn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Yl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Gd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case xs:return Gr(t.children,r,s,e);case ad:o=8,r|=8;break;case dh:return n=Nn(12,t,e,r|2),n.elementType=dh,n.lanes=s,n;case ph:return n=Nn(13,t,e,r),n.elementType=ph,n.lanes=s,n;case mh:return n=Nn(19,t,e,r),n.elementType=mh,n.lanes=s,n;case U_:return Hc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N_:o=10;break e;case D_:o=9;break e;case ld:o=11;break e;case cd:o=14;break e;case Ji:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=Nn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Gr(n,e,t,i){return n=Nn(7,n,i,e),n.lanes=t,n}function Hc(n,e,t,i){return n=Nn(22,n,i,e),n.elementType=U_,n.lanes=t,n.stateNode={isHidden:!1},n}function Eu(n,e,t){return n=Nn(6,n,null,e),n.lanes=t,n}function Tu(n,e,t){return e=Nn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function rM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wd(n,e,t,i,r,s,o,a,l){return n=new rM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(s),n}function sM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function A0(n){if(!n)return xr;n=n._reactInternals;e:{if(es(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(fn(t))return Av(n,t,e)}return e}function R0(n,e,t,i,r,s,o,a,l){return n=Wd(t,i,!0,n,r,s,o,a,l),n.context=A0(null),t=n.current,i=tn(),r=pr(t),s=Ii(i,r),s.callback=e??null,fr(t,s,r),n.current.lanes=r,La(n,r,i),dn(n,i),n}function Vc(n,e,t,i){var r=e.current,s=tn(),o=pr(r);return t=A0(t),e.context===null?e.context=t:e.pendingContext=t,e=Ii(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=fr(r,e,o),n!==null&&(ei(n,r,o,s),Hl(n,r,o)),o}function Tc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Xd(n,e){Im(n,e),(n=n.alternate)&&Im(n,e)}function oM(){return null}var C0=typeof reportError=="function"?reportError:function(n){console.error(n)};function jd(n){this._internalRoot=n}Gc.prototype.render=jd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Vc(n,e,null,null)};Gc.prototype.unmount=jd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;qr(function(){Vc(null,n,null,null)}),e[Ui]=null}};function Gc(n){this._internalRoot=n}Gc.prototype.unstable_scheduleHydration=function(n){if(n){var e=sv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<tr.length&&e!==0&&e<tr[t].priority;t++);tr.splice(t,0,n),t===0&&av(n)}};function Yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function aM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Tc(o);s.call(c)}}var o=R0(e,i,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=o,n[Ui]=o.current,pa(n.nodeType===8?n.parentNode:n),qr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Tc(l);a.call(c)}}var l=Wd(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=l,n[Ui]=l.current,pa(n.nodeType===8?n.parentNode:n),qr(function(){Vc(e,l,t,i)}),l}function Xc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Tc(o);a.call(l)}}Vc(e,o,n,r)}else o=aM(t,e,n,r,i);return Tc(o)}iv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Oo(e.pendingLanes);t!==0&&(fd(e,t|1),dn(e,Tt()),!($e&6)&&(qs=Tt()+500,Er()))}break;case 13:qr(function(){var i=Fi(n,1);if(i!==null){var r=tn();ei(i,n,1,r)}}),Xd(n,1)}};dd=function(n){if(n.tag===13){var e=Fi(n,134217728);if(e!==null){var t=tn();ei(e,n,134217728,t)}Xd(n,134217728)}};rv=function(n){if(n.tag===13){var e=pr(n),t=Fi(n,e);if(t!==null){var i=tn();ei(t,n,e,i)}Xd(n,e)}};sv=function(){return rt};ov=function(n,e){var t=rt;try{return rt=n,e()}finally{rt=t}};wh=function(n,e,t){switch(e){case"input":if(vh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Uc(i);if(!r)throw Error(ee(90));O_(i),vh(i,r)}}}break;case"textarea":B_(n,t);break;case"select":e=t.value,e!=null&&Is(n,!!t.multiple,e,!1)}};j_=zd;Y_=qr;var lM={usingClientEntryPoint:!1,Events:[Na,Es,Uc,W_,X_,zd]},To={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cM={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=K_(n),n===null?null:n.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||oM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Lc=rl.inject(cM),li=rl}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lM;Tn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(ee(200));return sM(n,e,null,t)};Tn.createRoot=function(n,e){if(!Yd(n))throw Error(ee(299));var t=!1,i="",r=C0;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wd(n,1,!1,null,null,t,!1,i,r),n[Ui]=e.current,pa(n.nodeType===8?n.parentNode:n),new jd(e)};Tn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=K_(e),n=n===null?null:n.stateNode,n};Tn.flushSync=function(n){return qr(n)};Tn.hydrate=function(n,e,t){if(!Wc(e))throw Error(ee(200));return Xc(null,n,e,!0,t)};Tn.hydrateRoot=function(n,e,t){if(!Yd(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=C0;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=R0(e,null,n,1,t??null,r,!1,s,o),n[Ui]=e.current,pa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Gc(e)};Tn.render=function(n,e,t){if(!Wc(e))throw Error(ee(200));return Xc(null,n,e,!1,t)};Tn.unmountComponentAtNode=function(n){if(!Wc(n))throw Error(ee(40));return n._reactRootContainer?(qr(function(){Xc(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1};Tn.unstable_batchedUpdates=zd;Tn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Wc(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return Xc(n,e,t,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(n){console.error(n)}}b0(),b_.exports=Tn;var P0=b_.exports,L0,Dm=P0;L0=Dm.createRoot,Dm.hydrateRoot;function uM(n){return/iPad|iPhone|iPod/.test(n.userAgent)||/Macintosh/.test(n.userAgent)&&n.maxTouchPoints>1}const zr=1e-9,Qo=(n,e)=>({x:n.x-e.x,z:n.z-e.z}),wc=(n,e)=>n.x*e.x+n.z*e.z,hM=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z);function Hr(n,e,t){const i=Qo(t,e),r=Qo(n,e);return Math.abs(i.x*r.z-i.z*r.x)<zr&&wc(r,Qo(n,t))<=zr}function sf(n,e){let t=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const s=e[i],o=e[r];if(Hr(n,s,o))return!0;s.z>n.z!=o.z>n.z&&n.x<(o.x-s.x)*(n.z-s.z)/(o.z-s.z)+s.x&&(t=!t)}return t}function sl(n,e,t){return(e.x-n.x)*(t.z-n.z)-(e.z-n.z)*(t.x-n.x)}function I0(n,e,t,i){const r=sl(n,e,t),s=sl(n,e,i),o=sl(t,i,n),a=sl(t,i,e);return Math.abs(r)<zr&&Hr(t,n,e)||Math.abs(s)<zr&&Hr(i,n,e)||Math.abs(o)<zr&&Hr(n,t,i)||Math.abs(a)<zr&&Hr(e,t,i)||r>0!=s>0&&o>0!=a>0}function Bo(n,e,t){const i=Qo(t,e),r=wc(Qo(n,e),i)/wc(i,i);return hM(n,{x:e.x+i.x*Math.max(0,Math.min(1,r)),z:e.z+i.z*Math.max(0,Math.min(1,r))})}function N0(n,e,t,i){return I0(n,e,t,i)?0:Math.min(Bo(n,t,i),Bo(e,t,i),Bo(t,n,e),Bo(i,n,e))}function $r(n){return n.map((e,t)=>[e,n[(t+1)%n.length]])}function D0(n,e){return Math.min(...$r(n).flatMap(([t,i])=>$r(e).map(([r,s])=>N0(t,i,r,s))))}function U0(n,e){return e.every(t=>sf(t,n))&&!$r(e).some(([t,i])=>$r(n).some(([r,s])=>I0(t,i,r,s)&&!Hr(t,r,s)&&!Hr(i,r,s)))}function Um(n,e){let t=1/0;for(const i of[n,e])for(const[r,s]of $r(i)){const o={x:-(s.z-r.z),z:s.x-r.x},a=Math.hypot(o.x,o.z),l=g=>{const x=g.map(m=>wc(m,o)/a);return[Math.min(...x),Math.max(...x)]},[c,u]=l(n),[h,f]=l(e),p=Math.min(u,f)-Math.max(c,h);if(p<-zr)return null;t=Math.min(t,Math.max(0,p))}return t}function fM(n,e){const t=U0(n,e),i=D0(n,e);return t?i:-i}function dM(n,e){const t=Math.cos(e.yaw),i=Math.sin(e.yaw),r=n.width/2,s=n.depth/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>({x:e.x+o*t+a*i,z:e.z-o*i+a*t}))}function pM(n){return{back:[n[0],n[1]],right:[n[1],n[2]],front:[n[2],n[3]],left:[n[3],n[0]]}}function mM(n,e){const t=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(n.x-e.x)*t-(n.z-e.z)*i,s=(n.x-e.x)*i+(n.z-e.z)*t;return Math.abs(r)>=Math.abs(s)?r>=0?"right":"left":s>=0?"front":"back"}function gM(n,e){return Math.min(...e.flatMap(t=>$r(t).map(([i,r])=>N0(n[0],n[1],i,r))))}function _M(n,e,t,i={}){var d;const r=dM(e,t),s=n.uncertainty,o=[];if(i.tracked===!1)return{status:"not_verified",reasons:[{code:"tracking_lost"}],corners:r,boundaryClearance:null,obstacleClearance:null};const a=n.obstacles.filter(_=>_.confirmed);let l=null;for(const _ of a){const v=Um(r,_.polygon),y=v===null?D0(r,_.polygon):-v;l=l===null?y:Math.min(l,y),v!==null&&v>s&&o.push({code:"obstacle_overlap",amount:v,obstacleId:_.id})}let c=null;const u=n.boundaryConfirmed?n.boundary:null;if(u){const _=U0(u,r),v=r.filter(w=>!sf(w,u)),y=u.filter(w=>sf(w,r)),C=v.length?v:y,R=C.length?Math.max(...C.map(w=>Math.min(...$r(v.length?u:r).map(([b,T])=>Bo(w,b,T))))):0;c=_?fM(u,r):-R,c<-s&&o.push({code:"outside_boundary",amount:R,side:mM(C[0],t)})}n.ceilingHeight!==null&&(e.height>n.ceilingHeight+s?o.push({code:"taller_than_ceiling",amount:e.height-n.ceilingHeight}):e.height>n.ceilingHeight-s&&o.push({code:"near_ceiling",amount:Math.abs(e.height-n.ceilingHeight)}));const h=[...u?[u]:[],...a.map(_=>_.polygon)],f=pM(r);if(h.length)for(const _ of Object.keys(f)){const v=((d=e.clearance)==null?void 0:d[_])??0;if(!v)continue;const y=gM(f[_],h),C=v-y;C>s?o.push({code:"clearance_short",amount:C,side:_}):C>=-s&&o.push({code:"clearance_tight",amount:Math.max(0,C),side:_})}c!==null&&Math.abs(c)<s&&o.push({code:"near_boundary",amount:Math.abs(c)}),l!==null&&Math.abs(l)<s&&o.push({code:"near_obstacle",amount:Math.abs(l)}),n.boundary===null?o.push({code:"no_measured_area"}):n.boundaryConfirmed||o.push({code:"area_unconfirmed"}),n.obstacles.some(_=>!_.confirmed&&Um(r,_.polygon)!==null)&&o.push({code:"obstacle_unconfirmed"});const p=new Set(["obstacle_overlap","outside_boundary","taller_than_ceiling","clearance_short"]),g=new Set(["near_ceiling","clearance_tight","near_boundary","near_obstacle"]),x=o.some(_=>p.has(_.code))?"conflict":o.some(_=>g.has(_.code))?"possibly_fits":o.length?"not_verified":"fits",m={obstacle_overlap:0,outside_boundary:1,taller_than_ceiling:2,clearance_short:3,near_ceiling:4,clearance_tight:5,near_boundary:6,near_obstacle:7,no_measured_area:8,area_unconfirmed:8,obstacle_unconfirmed:8};return o.sort((_,v)=>m[_.code]-m[v.code]),{status:x,reasons:o,corners:r,boundaryClearance:c,obstacleClearance:l}}function vM(n){return`${Math.round(n*100)} cm`}const of="seen:",wu=n=>n.side?` on its ${n.side} side`:"";function xM(n,e){var r;const t=n.reasons[0],i=(t==null?void 0:t.amount)===void 0?"":vM(t.amount);if(n.status==="fits")return{title:"Fits the measured space",detail:"Geometric fit only. Check delivery access and any installation needs."};switch(t==null?void 0:t.code){case"tracking_lost":return{title:"Fit not verified",detail:"The phone lost track of the room, so this position cannot be trusted."};case"no_measured_area":return{title:"Nothing in the way so far",detail:"Walk around so the phone can see the room. Measure the free space for an exact check."};case"area_unconfirmed":return{title:"Fit not verified",detail:"Confirm the measured area to check this position."};case"obstacle_unconfirmed":return{title:"Fit not verified",detail:"This position overlaps an obstacle you have not confirmed."};case"outside_boundary":return{title:"Does not fit here",detail:`This ${e} extends ${i} beyond the measured available space${wu(t)}.`};case"obstacle_overlap":return(r=t.obstacleId)!=null&&r.startsWith(of)?{title:"Does not fit here",detail:`This ${e} runs into a wall or furniture the camera can see.`}:{title:"Does not fit here",detail:`This ${e} overlaps a measured obstacle by ${i}.`};case"taller_than_ceiling":return{title:"Does not fit here",detail:`This ${e} is ${i} taller than the measured ceiling.`};case"clearance_short":return{title:"Not enough clearance",detail:`This ${e} is ${i} short of the space it needs${wu(t)}.`};case"clearance_tight":return{title:"Possibly fits",detail:`The space${wu(t)} is too close to the required clearance to be sure.`};case"near_ceiling":return{title:"Possibly fits",detail:"The height is too close to the measured ceiling to be sure."};case"near_obstacle":return{title:"Possibly fits",detail:"It is too close to an obstacle for these measurements to be sure."};case"near_boundary":return{title:"Possibly fits",detail:"It is too close to the edge of the measured space for these measurements to be sure."};default:return{title:"Fit not verified",detail:""}}}const yM={fits:"✓",conflict:"!",possibly_fits:"~",not_verified:"?"};function SM({result:n,name:e,compact:t=!1}){if(!n)return null;const{title:i,detail:r}=xM(n,e);return Ae.jsxs("div",{className:`fit-status fit-${n.status}`,role:"status","aria-live":"polite","data-status":n.status,children:[Ae.jsx("span",{className:"fit-sign","aria-hidden":"true",children:yM[n.status]}),Ae.jsxs("div",{children:[Ae.jsx("strong",{children:i}),!t&&r&&Ae.jsx("p",{children:r})]})]})}function MM(n){return n.widthCm===null||n.depthCm===null||n.heightCm===null?"Size not known":`${Math.round(n.widthCm)} × ${Math.round(n.depthCm)} × ${Math.round(n.heightCm)} cm`}function EM(n){if(n.widthCm===null||n.depthCm===null||n.heightCm===null)return null;const e=n.placement.clearance_cm;return{width:n.widthCm/100,depth:n.depthCm/100,height:n.heightCm/100,...e?{clearance:{back:(e.back??0)/100,left:(e.left??0)/100,right:(e.right??0)/100,front:(e.front??0)/100}}:{}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qd="170",TM=0,Fm=1,wM=2,F0=1,AM=2,Ti=3,ki=0,pn=1,In=2,gr=0,ks=1,Om=2,km=3,Bm=4,RM=5,Ur=100,CM=101,bM=102,PM=103,LM=104,IM=200,NM=201,DM=202,UM=203,af=204,lf=205,FM=206,OM=207,kM=208,BM=209,zM=210,HM=211,VM=212,GM=213,WM=214,cf=0,uf=1,hf=2,$s=3,ff=4,df=5,pf=6,mf=7,O0=0,XM=1,jM=2,_r=0,YM=1,qM=2,$M=3,KM=4,ZM=5,JM=6,QM=7,zm="attached",eE="detached",k0=300,Ks=301,Zs=302,gf=303,_f=304,jc=306,Js=1e3,or=1001,Ac=1002,nn=1003,B0=1004,zo=1005,Sn=1006,ql=1007,Pi=1008,Bi=1009,z0=1010,H0=1011,Ea=1012,$d=1013,Kr=1014,Kn=1015,Ua=1016,Kd=1017,Zd=1018,Qs=1020,V0=35902,G0=1021,W0=1022,Dn=1023,X0=1024,j0=1025,Bs=1026,eo=1027,Jd=1028,Qd=1029,Y0=1030,ep=1031,tp=1033,$l=33776,Kl=33777,Zl=33778,Jl=33779,vf=35840,xf=35841,yf=35842,Sf=35843,Mf=36196,Ef=37492,Tf=37496,wf=37808,Af=37809,Rf=37810,Cf=37811,bf=37812,Pf=37813,Lf=37814,If=37815,Nf=37816,Df=37817,Uf=37818,Ff=37819,Of=37820,kf=37821,Ql=36492,Bf=36494,zf=36495,q0=36283,Hf=36284,Vf=36285,Gf=36286,Ta=2300,wa=2301,Au=2302,Hm=2400,Vm=2401,Gm=2402,tE=2500,nE=0,$0=1,Wf=2,iE=3200,rE=3201,K0=0,sE=1,ir="",zt="srgb",sn="srgb-linear",Yc="linear",st="srgb",is=7680,Wm=519,oE=512,aE=513,lE=514,Z0=515,cE=516,uE=517,hE=518,fE=519,Xf=35044,Xm="300 es",Li=2e3,Rc=2001;class co{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jm=1234567;const ea=Math.PI/180,to=180/Math.PI;function Fn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function np(n,e){return(n%e+e)%e}function dE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function pE(n,e,t){return n!==e?(t-n)/(e-n):0}function ta(n,e,t){return(1-t)*n+t*e}function mE(n,e,t,i){return ta(n,e,1-Math.exp(-t*i))}function gE(n,e=1){return e-Math.abs(np(n,e*2)-e)}function _E(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function vE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yE(n,e){return n+Math.random()*(e-n)}function SE(n){return n*(.5-Math.random())}function ME(n){n!==void 0&&(jm=n);let e=jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EE(n){return n*ea}function TE(n){return n*to}function wE(n){return(n&n-1)===0&&n!==0}function AE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function RE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function CE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bE={DEG2RAD:ea,RAD2DEG:to,generateUUID:Fn,clamp:Ft,euclideanModulo:np,mapLinear:dE,inverseLerp:pE,lerp:ta,damp:mE,pingpong:gE,smoothstep:_E,smootherstep:vE,randInt:xE,randFloat:yE,randFloatSpread:SE,seededRandom:ME,degToRad:EE,radToDeg:TE,isPowerOfTwo:wE,ceilPowerOfTwo:AE,floorPowerOfTwo:RE,setQuaternionFromProperEuler:CE,normalize:nt,denormalize:qn};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],_=r[1],v=r[4],y=r[7],C=r[2],R=r[5],w=r[8];return s[0]=o*x+a*_+l*C,s[3]=o*m+a*v+l*R,s[6]=o*d+a*y+l*w,s[1]=c*x+u*_+h*C,s[4]=c*m+u*v+h*R,s[7]=c*d+u*y+h*w,s[2]=f*x+p*_+g*C,s[5]=f*m+p*v+g*R,s[8]=f*d+p*y+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ru=new Fe;function J0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function PE(){const n=Aa("canvas");return n.style.display="block",n}const Ym={};function Ho(n){n in Ym||(Ym[n]=!0,console.warn(n))}function LE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function IE(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function NE(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ge={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(n.r=Ni(n.r),n.g=Ni(n.g),n.b=Ni(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(n.r=zs(n.r),n.g=zs(n.g),n.b=zs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ir?Yc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const qm=[.64,.33,.3,.6,.15,.06],$m=[.2126,.7152,.0722],Km=[.3127,.329],Zm=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jm=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ge.define({[sn]:{primaries:qm,whitePoint:Km,transfer:Yc,toXYZ:Zm,fromXYZ:Jm,luminanceCoefficients:$m,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:qm,whitePoint:Km,transfer:st,toXYZ:Zm,fromXYZ:Jm,luminanceCoefficients:$m,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}});let rs;class DE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Aa("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Aa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UE=0;class Q0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cu(r[o].image)):s.push(Cu(r[o]))}else s=Cu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Cu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?DE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FE=0;class Pt extends co{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=or,r=or,s=Sn,o=Pi,a=Dn,l=Bi,c=Pt.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Fn(),this.name="",this.source=new Q0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=k0;Pt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,C=(d+1)/2,R=(u+f)/4,w=(h+x)/4,b=(g+m)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=w/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=b/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends co{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Q0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends OE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ex extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kE extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*x,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const C=Math.sqrt(v),R=Math.atan2(C,d*_);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const y=a*_;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+x*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bu=new P,Qm=new hi;class Hi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),al.subVectors(this.max,wo),ss.subVectors(e.a,wo),os.subVectors(e.b,wo),as.subVectors(e.c,wo),Xi.subVectors(os,ss),ji.subVectors(as,os),wr.subVectors(ss,as);let t=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-wr.z,wr.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,wr.z,0,-wr.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-wr.y,wr.x,0];return!Pu(t,ss,os,as,al)||(t=[1,0,0,0,1,0,0,0,1],!Pu(t,ss,os,as,al))?!1:(ll.crossVectors(Xi,ji),t=[ll.x,ll.y,ll.z],Pu(t,ss,os,as,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new P,new P,new P,new P,new P,new P,new P,new P],Vn=new P,ol=new Hi,ss=new P,os=new P,as=new P,Xi=new P,ji=new P,wr=new P,wo=new P,al=new P,ll=new P,Ar=new P;function Pu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ar.fromArray(n,s);const a=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),u=i.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const BE=new Hi,Ao=new P,Lu=new P;class fi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):BE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const t=Ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Lu)),this.expandByPoint(Ao.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new P,Iu=new P,cl=new P,Yi=new P,Nu=new P,ul=new P,Du=new P;class Fa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Iu.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),Yi.copy(this.origin).sub(Iu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cl),a=Yi.dot(this.direction),l=-Yi.dot(cl),c=Yi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Iu).addScaledVector(cl,f),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,r,s){Nu.subVectors(t,e),ul.subVectors(i,e),Du.crossVectors(Nu,ul);let o=this.direction.dot(Du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yi.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(Yi,ul));if(l<0)return null;const c=a*this.direction.dot(Nu.cross(Yi));if(c<0||l+c>o)return null;const u=-a*Yi.dot(Du);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,g,x,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zE,e,HE)}lookAt(e,t,i){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),qi.crossVectors(i,_n),qi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),qi.crossVectors(i,_n)),qi.normalize(),hl.crossVectors(_n,qi),r[0]=qi.x,r[4]=hl.x,r[8]=_n.x,r[1]=qi.y,r[5]=hl.y,r[9]=_n.y,r[2]=qi.z,r[6]=hl.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],_=i[3],v=i[7],y=i[11],C=i[15],R=r[0],w=r[4],b=r[8],T=r[12],M=r[1],L=r[5],G=r[9],z=r[13],$=r[2],Z=r[6],X=r[10],J=r[14],I=r[3],W=r[7],K=r[11],se=r[15];return s[0]=o*R+a*M+l*$+c*I,s[4]=o*w+a*L+l*Z+c*W,s[8]=o*b+a*G+l*X+c*K,s[12]=o*T+a*z+l*J+c*se,s[1]=u*R+h*M+f*$+p*I,s[5]=u*w+h*L+f*Z+p*W,s[9]=u*b+h*G+f*X+p*K,s[13]=u*T+h*z+f*J+p*se,s[2]=g*R+x*M+m*$+d*I,s[6]=g*w+x*L+m*Z+d*W,s[10]=g*b+x*G+m*X+d*K,s[14]=g*T+x*z+m*J+d*se,s[3]=_*R+v*M+y*$+C*I,s[7]=_*w+v*L+y*Z+C*W,s[11]=_*b+v*G+y*X+C*K,s[15]=_*T+v*z+y*J+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],_=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,y=u*x*c-g*h*c+g*a*p-o*x*p-u*a*d+o*h*d,C=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,R=t*_+i*v+r*y+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=_*w,e[1]=(x*f*s-h*m*s-x*r*p+i*m*p+h*r*d-i*f*d)*w,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*w,e[4]=v*w,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*w,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*w,e[8]=y*w,e[9]=(g*h*s-u*x*s-g*i*p+t*x*p+u*i*d-t*h*d)*w,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*d+t*a*d)*w,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*w,e[12]=C*w,e[13]=(u*x*r-g*h*r+g*i*f-t*x*f-u*i*m+t*h*m)*w,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*w,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,x=o*u,m=o*h,d=a*h,_=l*c,v=l*u,y=l*h,C=i.x,R=i.y,w=i.z;return r[0]=(1-(x+d))*C,r[1]=(p+y)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(f+d))*R,r[6]=(m+_)*R,r[7]=0,r[8]=(g+v)*w,r[9]=(m-_)*w,r[10]=(1-(f+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),a=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,u=1/o,h=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Li){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Li)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Rc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Li){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u;let g,x;if(a===Li)g=(o+s)*h,x=-2*h;else if(a===Rc)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new P,Gn=new Ie,zE=new P(0,0,0),HE=new P(1,1,1),qi=new P,hl=new P,_n=new P,eg=new Ie,tg=new hi;class ni{constructor(e=0,t=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VE=0;const ng=new P,cs=new hi,yi=new Ie,fl=new P,Ro=new P,GE=new P,WE=new hi,ig=new P(1,0,0),rg=new P(0,1,0),sg=new P(0,0,1),og={type:"added"},XE={type:"removed"},us={type:"childadded",child:null},Uu={type:"childremoved",child:null};class mt extends co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new ni,i=new hi,r=new P(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Fe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(ig,e)}rotateY(e){return this.rotateOnAxis(rg,e)}rotateZ(e){return this.rotateOnAxis(sg,e)}translateOnAxis(e,t){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ig,e)}translateY(e){return this.translateOnAxis(rg,e)}translateZ(e){return this.translateOnAxis(sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fl.copy(e):fl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Ro,fl,this.up):yi.lookAt(fl,Ro,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(yi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XE),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,GE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,WE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new P,Si=new P,Fu=new P,Mi=new P,hs=new P,fs=new P,ag=new P,Ou=new P,ku=new P,Bu=new P,zu=new Je,Hu=new Je,Vu=new Je;class $n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wn.subVectors(e,t),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wn.subVectors(r,t),Si.subVectors(i,t),Fu.subVectors(e,t);const o=Wn.dot(Wn),a=Wn.dot(Si),l=Wn.dot(Fu),c=Si.dot(Si),u=Si.dot(Fu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return zu.setScalar(0),Hu.setScalar(0),Vu.setScalar(0),zu.fromBufferAttribute(e,t),Hu.fromBufferAttribute(e,i),Vu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(zu,s.x),o.addScaledVector(Hu,s.y),o.addScaledVector(Vu,s.z),o}static isFrontFacing(e,t,i,r){return Wn.subVectors(i,t),Si.subVectors(e,t),Wn.cross(Si).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),fs.subVectors(s,i),Ou.subVectors(e,i);const l=hs.dot(Ou),c=fs.dot(Ou);if(l<=0&&c<=0)return t.copy(i);ku.subVectors(e,r);const u=hs.dot(ku),h=fs.dot(ku);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hs,o);Bu.subVectors(e,s);const p=hs.dot(Bu),g=fs.dot(Bu);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(fs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return ag.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(ag,a);const d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(hs,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Gu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ge.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ge.workingColorSpace){if(e=np(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Gu(o,s,e+1/3),this.g=Gu(o,s,e),this.b=Gu(o,s,e-1/3)}return Ge.toWorkingColorSpace(this,r),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=nx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Ge.fromWorkingColorSpace(qt.copy(this),e),Math.round(Ft(qt.r*255,0,255))*65536+Math.round(Ft(qt.g*255,0,255))*256+Math.round(Ft(qt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=zt){Ge.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(dl);const i=ta($i.h,dl.h,t),r=ta($i.s,dl.s,t),s=ta($i.l,dl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Le;Le.NAMES=nx;let jE=0;class ui extends co{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Fn(),this.name="",this.blending=ks,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=lf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==af&&(i.blendSrc=this.blendSrc),this.blendDst!==lf&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zn extends ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new P,pl=new _e;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xf,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xf&&(e.usage=this.usage),e}}class ix extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rx extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let YE=0;const Cn=new Ie,Wu=new mt,ds=new P,vn=new Hi,Co=new Hi,Nt=new P;class mn extends co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J0(e)?rx:ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,i){return Cn.makeTranslation(e,t,i),this.applyMatrix4(Cn),this}scale(e,t,i){return Cn.makeScale(e,t,i),this.applyMatrix4(Cn),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(vn.min,Co.min),vn.expandByPoint(Nt),Nt.addVectors(vn.max,Co.max),vn.expandByPoint(Nt)):(vn.expandByPoint(Co.min),vn.expandByPoint(Co.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),Nt.add(ds)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new P,l[b]=new P;const c=new P,u=new P,h=new P,f=new _e,p=new _e,g=new _e,x=new P,m=new P;function d(b,T,M){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[b].add(x),a[T].add(x),a[M].add(x),l[b].add(m),l[T].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,T=_.length;b<T;++b){const M=_[b],L=M.start,G=M.count;for(let z=L,$=L+G;z<$;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const v=new P,y=new P,C=new P,R=new P;function w(b){C.fromBufferAttribute(r,b),R.copy(C);const T=a[b];v.copy(T),v.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(R,T);const L=y.dot(l[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,L)}for(let b=0,T=_.length;b<T;++b){const M=_[b],L=M.start,G=M.count;for(let z=L,$=L+G;z<$;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new Ie,Rr=new Fa,ml=new fi,cg=new P,gl=new P,_l=new P,vl=new P,Xu=new P,xl=new P,ug=new P,yl=new P;class Ht extends mt{constructor(e=new mn,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Xu.fromBufferAttribute(h,e),o?xl.addScaledVector(Xu,u):xl.addScaledVector(Xu.sub(t),u))}t.add(xl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(ml.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(ml,cg)===null||Rr.origin.distanceToSquared(cg)>(e.far-e.near)**2))&&(lg.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(lg),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=v;y<C;y+=3){const R=a.getX(y),w=a.getX(y+1),b=a.getX(y+2);r=Sl(this,d,e,i,c,u,h,R,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Sl(this,o,e,i,c,u,h,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=v;y<C;y+=3){const R=y,w=y+1,b=y+2;r=Sl(this,d,e,i,c,u,h,R,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=m,v=m+1,y=m+2;r=Sl(this,o,e,i,c,u,h,_,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function qE(n,e,t,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;yl.copy(a),yl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(yl);return c<t.near||c>t.far?null:{distance:c,point:yl.clone(),object:n}}function Sl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,gl),n.getVertexPosition(l,_l),n.getVertexPosition(c,vl);const u=qE(n,e,t,i,gl,_l,vl,ug);if(u){const h=new P;$n.getBarycoord(ug,gl,_l,vl,h),r&&(u.uv=$n.getInterpolatedAttribute(r,a,l,c,h,new _e)),s&&(u.uv1=$n.getInterpolatedAttribute(s,a,l,c,h,new _e)),o&&(u.normal=$n.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};$n.getNormal(gl,_l,vl,f.normal),u.face=f,u.barycoord=h}return u}class Oa extends mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function g(x,m,d,_,v,y,C,R,w,b,T){const M=y/w,L=C/b,G=y/2,z=C/2,$=R/2,Z=w+1,X=b+1;let J=0,I=0;const W=new P;for(let K=0;K<X;K++){const se=K*L-z;for(let Se=0;Se<Z;Se++){const Ke=Se*M-G;W[x]=Ke*_,W[m]=se*v,W[d]=$,c.push(W.x,W.y,W.z),W[x]=0,W[m]=0,W[d]=R>0?1:-1,u.push(W.x,W.y,W.z),h.push(Se/w),h.push(1-K/b),J+=1}}for(let K=0;K<b;K++)for(let se=0;se<w;se++){const Se=f+se+Z*K,Ke=f+se+Z*(K+1),V=f+(se+1)+Z*(K+1),te=f+(se+1)+Z*K;l.push(Se,Ke,te),l.push(Ke,V,te),I+=6}a.addGroup(p,I,T),p+=I,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=no(n[t]);for(const r in i)e[r]=i[r]}return e}function $E(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const KE={clone:no,merge:Jt};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=JE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=$E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ox extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new P,hg=new _e,fg=new _e;class en extends ox{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,hg,fg),t.subVectors(fg,hg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ea*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class QE extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(ps,ms,e,t);r.layers=this.layers,this.add(r);const s=new en(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new en(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new en(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new en(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new en(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ax extends Pt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ks,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eT extends Zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ax(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Oa(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:gr});s.uniforms.tEquirect.value=t;const o=new Ht(r,s),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Sn),new QE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ju=new P,tT=new P,nT=new Fe;class er{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ju.subVectors(i,t).cross(tT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nT.getNormalMatrix(e),r=this.coplanarPoint(ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new fi,Ml=new P;class ip{constructor(e=new er,t=new er,i=new er,r=new er,s=new er,o=new er){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],x=r[10],m=r[11],d=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-d).normalize(),i[1].setComponents(l+s,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+u,m+g,y+_).normalize(),i[3].setComponents(l-o,f-u,m-g,y-_).normalize(),i[4].setComponents(l-a,f-h,m-x,y-v).normalize(),t===Li)i[5].setComponents(l+a,f+h,m+x,y+v).normalize();else if(t===Rc)i[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function iT(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ka extends mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const _=d*f-o;for(let v=0;v<c;v++){const y=v*h-s;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+c*d,y=_+c*(d+1),C=_+1+c*(d+1),R=_+1+c*d;p.push(v,y,R),p.push(y,C,R)}this.setIndex(p),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var rT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sT=`#ifdef USE_ALPHAHASH
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
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uT=`#ifdef USE_AOMAP
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
#endif`,hT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_T=`#ifdef USE_IRIDESCENCE
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
#endif`,vT=`#ifdef USE_BUMPMAP
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
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,RT=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,CT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bT=`vec3 transformedNormal = objectNormal;
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
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DT="gl_FragColor = linearToOutputTexel( gl_FragColor );",UT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XT=`#ifdef USE_GRADIENTMAP
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
}`,jT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$T=`uniform bool receiveShadow;
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
#endif`,KT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ZT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,nw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iw=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,sw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ow=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dw=`#if defined( USE_POINTS_UV )
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
#endif`,pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_w=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xw=`#ifdef USE_MORPHTARGETS
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
#endif`,yw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Aw=`#ifdef USE_NORMALMAP
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
#endif`,Rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Vw=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ww=`#ifdef USE_SKINNING
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
#endif`,Xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jw=`#ifdef USE_SKINNING
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
#endif`,Yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jw=`#ifdef USE_TRANSMISSION
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rA=`uniform sampler2D t2D;
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
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
}`,uA=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hA=`#define DISTANCE
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
}`,fA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,gA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#define LAMBERT
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
}`,yA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,SA=`#define MATCAP
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
}`,MA=`#define MATCAP
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
}`,EA=`#define NORMAL
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
}`,TA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wA=`#define PHONG
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
}`,AA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,RA=`#define STANDARD
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
}`,CA=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,bA=`#define TOON
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
}`,PA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,LA=`uniform float size;
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
}`,IA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,DA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,UA=`uniform float rotation;
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
}`,FA=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:rT,alphahash_pars_fragment:sT,alphamap_fragment:oT,alphamap_pars_fragment:aT,alphatest_fragment:lT,alphatest_pars_fragment:cT,aomap_fragment:uT,aomap_pars_fragment:hT,batching_pars_vertex:fT,batching_vertex:dT,begin_vertex:pT,beginnormal_vertex:mT,bsdfs:gT,iridescence_fragment:_T,bumpmap_pars_fragment:vT,clipping_planes_fragment:xT,clipping_planes_pars_fragment:yT,clipping_planes_pars_vertex:ST,clipping_planes_vertex:MT,color_fragment:ET,color_pars_fragment:TT,color_pars_vertex:wT,color_vertex:AT,common:RT,cube_uv_reflection_fragment:CT,defaultnormal_vertex:bT,displacementmap_pars_vertex:PT,displacementmap_vertex:LT,emissivemap_fragment:IT,emissivemap_pars_fragment:NT,colorspace_fragment:DT,colorspace_pars_fragment:UT,envmap_fragment:FT,envmap_common_pars_fragment:OT,envmap_pars_fragment:kT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:KT,envmap_vertex:zT,fog_vertex:HT,fog_pars_vertex:VT,fog_fragment:GT,fog_pars_fragment:WT,gradientmap_pars_fragment:XT,lightmap_pars_fragment:jT,lights_lambert_fragment:YT,lights_lambert_pars_fragment:qT,lights_pars_begin:$T,lights_toon_fragment:ZT,lights_toon_pars_fragment:JT,lights_phong_fragment:QT,lights_phong_pars_fragment:ew,lights_physical_fragment:tw,lights_physical_pars_fragment:nw,lights_fragment_begin:iw,lights_fragment_maps:rw,lights_fragment_end:sw,logdepthbuf_fragment:ow,logdepthbuf_pars_fragment:aw,logdepthbuf_pars_vertex:lw,logdepthbuf_vertex:cw,map_fragment:uw,map_pars_fragment:hw,map_particle_fragment:fw,map_particle_pars_fragment:dw,metalnessmap_fragment:pw,metalnessmap_pars_fragment:mw,morphinstance_vertex:gw,morphcolor_vertex:_w,morphnormal_vertex:vw,morphtarget_pars_vertex:xw,morphtarget_vertex:yw,normal_fragment_begin:Sw,normal_fragment_maps:Mw,normal_pars_fragment:Ew,normal_pars_vertex:Tw,normal_vertex:ww,normalmap_pars_fragment:Aw,clearcoat_normal_fragment_begin:Rw,clearcoat_normal_fragment_maps:Cw,clearcoat_pars_fragment:bw,iridescence_pars_fragment:Pw,opaque_fragment:Lw,packing:Iw,premultiplied_alpha_fragment:Nw,project_vertex:Dw,dithering_fragment:Uw,dithering_pars_fragment:Fw,roughnessmap_fragment:Ow,roughnessmap_pars_fragment:kw,shadowmap_pars_fragment:Bw,shadowmap_pars_vertex:zw,shadowmap_vertex:Hw,shadowmask_pars_fragment:Vw,skinbase_vertex:Gw,skinning_pars_vertex:Ww,skinning_vertex:Xw,skinnormal_vertex:jw,specularmap_fragment:Yw,specularmap_pars_fragment:qw,tonemapping_fragment:$w,tonemapping_pars_fragment:Kw,transmission_fragment:Zw,transmission_pars_fragment:Jw,uv_pars_fragment:Qw,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:rA,backgroundCube_vert:sA,backgroundCube_frag:oA,cube_vert:aA,cube_frag:lA,depth_vert:cA,depth_frag:uA,distanceRGBA_vert:hA,distanceRGBA_frag:fA,equirect_vert:dA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:_A,meshbasic_frag:vA,meshlambert_vert:xA,meshlambert_frag:yA,meshmatcap_vert:SA,meshmatcap_frag:MA,meshnormal_vert:EA,meshnormal_frag:TA,meshphong_vert:wA,meshphong_frag:AA,meshphysical_vert:RA,meshphysical_frag:CA,meshtoon_vert:bA,meshtoon_frag:PA,points_vert:LA,points_frag:IA,shadow_vert:NA,shadow_frag:DA,sprite_vert:UA,sprite_frag:FA},oe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},oi={basic:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Jt([oe.points,oe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Jt([oe.common,oe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Jt([oe.sprite,oe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Jt([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Jt([oe.lights,oe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};oi.physical={uniforms:Jt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const El={r:0,b:0,g:0},br=new ni,OA=new Ie;function kA(n,e,t,i,r,s,o){const a=new Le(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===jc)?(u===void 0&&(u=new Ht(new Oa(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:no(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),br.copy(v.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(br)),u.material.toneMapped=Ge.getTransfer(y.colorSpace)!==st,(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ht(new ka(2,2),new yr({name:"BackgroundMaterial",uniforms:no(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,v){_.getRGB(El,sx(n)),i.buffers.color.setClear(El.r,El.g,El.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:m}}function BA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,G,z,$){let Z=!1;const X=h(z,G,L);s!==X&&(s=X,c(s.object)),Z=p(M,z,G,$),Z&&g(M,z,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(M,L,G,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,L,G){const z=G.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let Z=$[L.id];Z===void 0&&(Z={},$[L.id]=Z);let X=Z[z];return X===void 0&&(X=f(l()),Z[z]=X),X}function f(M){const L=[],G=[],z=[];for(let $=0;$<t;$++)L[$]=0,G[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,L,G,z){const $=s.attributes,Z=L.attributes;let X=0;const J=G.getAttributes();for(const I in J)if(J[I].location>=0){const K=$[I];let se=Z[I];if(se===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function g(M,L,G,z){const $={},Z=L.attributes;let X=0;const J=G.getAttributes();for(const I in J)if(J[I].location>=0){let K=Z[I];K===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),$[I]=se,X++}s.attributes=$,s.attributesNum=X,s.index=z}function x(){const M=s.newAttributes;for(let L=0,G=M.length;L<G;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const G=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;G[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),$[M]!==L&&(n.vertexAttribDivisor(M,L),$[M]=L)}function _(){const M=s.newAttributes,L=s.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==M[G]&&(n.disableVertexAttribArray(G),L[G]=0)}function v(M,L,G,z,$,Z,X){X===!0?n.vertexAttribIPointer(M,L,G,$,Z):n.vertexAttribPointer(M,L,G,z,$,Z)}function y(M,L,G,z){x();const $=z.attributes,Z=G.getAttributes(),X=L.defaultAttributeValues;for(const J in Z){const I=Z[J];if(I.location>=0){let W=$[J];if(W===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(W=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(W=M.instanceColor)),W!==void 0){const K=W.normalized,se=W.itemSize,Se=e.get(W);if(Se===void 0)continue;const Ke=Se.buffer,V=Se.type,te=Se.bytesPerElement,de=V===n.INT||V===n.UNSIGNED_INT||W.gpuType===$d;if(W.isInterleavedBufferAttribute){const re=W.data,Ce=re.stride,Ne=W.offset;if(re.isInstancedInterleavedBuffer){for(let Be=0;Be<I.locationSize;Be++)d(I.location+Be,re.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Be=0;Be<I.locationSize;Be++)m(I.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Be=0;Be<I.locationSize;Be++)v(I.location+Be,se/I.locationSize,V,K,Ce*te,(Ne+se/I.locationSize*Be)*te,de)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<I.locationSize;re++)d(I.location+re,W.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<I.locationSize;re++)m(I.location+re);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let re=0;re<I.locationSize;re++)v(I.location+re,se/I.locationSize,V,K,se*te,se/I.locationSize*re*te,de)}}else if(X!==void 0){const K=X[J];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(I.location,K);break;case 3:n.vertexAttrib3fv(I.location,K);break;case 4:n.vertexAttrib4fv(I.location,K);break;default:n.vertexAttrib1fv(I.location,K)}}}}_()}function C(){b();for(const M in i){const L=i[M];for(const G in L){const z=L[G];for(const $ in z)u(z[$].object),delete z[$];delete L[G]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const G in L){const z=L[G];for(const $ in z)u(z[$].object),delete z[$];delete L[G]}delete i[M.id]}function w(M){for(const L in i){const G=i[L];if(G[M.id]===void 0)continue;const z=G[M.id];for(const $ in z)u(z[$].object),delete z[$];delete G[M.id]}}function b(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function zA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Dn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Bi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Kn&&!b)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:R}}function VA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new er,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,v=_*4;let y=d.clippingState||null;l.value=y,y=u(g,f,v,p);for(let C=0;C!==v;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==x;++v,y+=4)o.copy(h[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function GA(n){let e=new WeakMap;function t(o,a){return a===gf?o.mapping=Ks:a===_f&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===gf||a===_f)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new eT(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rp extends ox{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ps=4,dg=[.125,.215,.35,.446,.526,.582],Fr=20,Yu=new rp,pg=new Le;let qu=null,$u=0,Ku=0,Zu=!1;const Dr=(1+Math.sqrt(5))/2,gs=1/Dr,mg=[new P(-Dr,gs,0),new P(Dr,gs,0),new P(-gs,0,Dr),new P(gs,0,Dr),new P(0,Dr,-gs),new P(0,Dr,gs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,$u,Ku),this._renderer.xr.enabled=Zu,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),$u=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),Zu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ua,format:Dn,colorSpace:sn,depthBuffer:!1},r=_g(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WA(s)),this._blurMaterial=XA(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,Yu)}_sceneToCubeUV(e,t,i,r){const a=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(pg),u.toneMapping=_r,u.autoClear=!1;const p=new Zn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ht(new Oa,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(pg),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Tl(r,_*v,d>2?v:0,v,v),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ks||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mg[(r-s-1)%mg.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Fr;m>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fr}`);const d=[];let _=0;for(let w=0;w<Fr;++w){const b=w/x,T=Math.exp(-b*b/2);d.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-Ps?r-v+Ps:0),R=4*(this._cubeSize-y);Tl(t,C,R,3*y,2*y),l.setRenderTarget(t),l.render(h,Yu)}}function WA(n){const e=[],t=[],i=[];let r=n;const s=n-Ps+1+dg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ps?l=dg[o-n+Ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,b=R>2?0:-1,T=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(T,x*g*R),v.set(f,m*g*R);const M=[R,R,R,R,R,R];y.set(M,d*g*R)}const C=new mn;C.setAttribute("position",new rn(_,x)),C.setAttribute("uv",new rn(v,m)),C.setAttribute("faceIndex",new rn(y,d)),e.push(C),r>Ps&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _g(n,e,t){const i=new Zr(n,e,t);return i.texture.mapping=jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function XA(n,e,t){const i=new Float32Array(Fr),r=new P(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function vg(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function xg(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function jA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===gf||l===_f,u=l===Ks||l===Zs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gg(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new gg(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function YA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ho("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qA(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const C=_[v+0],R=_[v+1],w=_[v+2];f.push(C,R,R,w,w,C)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const C=v+0,R=v+1,w=v+2;f.push(C,R,R,w,w,C)}}else return;const m=new(J0(f)?rx:ix)(f,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function $A(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*x[_];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function KA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ZA(n,e,t){const i=new WeakMap,r=new Je;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*R*4*h),b=new ex(w,C,R,h);b.type=Kn,b.needsUpdate=!0;const T=y*4;for(let L=0;L<h;L++){const G=d[L],z=_[L],$=v[L],Z=C*R*4*L;for(let X=0;X<G.count;X++){const J=X*T;g===!0&&(r.fromBufferAttribute(G,X),w[Z+J+0]=r.x,w[Z+J+1]=r.y,w[Z+J+2]=r.z,w[Z+J+3]=0),x===!0&&(r.fromBufferAttribute(z,X),w[Z+J+4]=r.x,w[Z+J+5]=r.y,w[Z+J+6]=r.z,w[Z+J+7]=0),m===!0&&(r.fromBufferAttribute($,X),w[Z+J+8]=r.x,w[Z+J+9]=r.y,w[Z+J+10]=r.z,w[Z+J+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:b,size:new _e(C,R)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function JA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class cx extends Pt{constructor(e,t,i,r,s,o,a,l,c,u=Bs){if(u!==Bs&&u!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Bs&&(i=Kr),i===void 0&&u===eo&&(i=Qs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ux=new Pt,yg=new cx(1,1),hx=new ex,fx=new kE,dx=new ax,Sg=[],Mg=[],Eg=new Float32Array(16),Tg=new Float32Array(9),wg=new Float32Array(4);function uo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sg[r];if(s===void 0&&(s=new Float32Array(r),Sg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qc(n,e){let t=Mg[e];t===void 0&&(t=new Int32Array(e),Mg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function QA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function e1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function i1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;wg.set(i),n.uniformMatrix2fv(this.addr,!1,wg),It(t,i)}}function r1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Tg.set(i),n.uniformMatrix3fv(this.addr,!1,Tg),It(t,i)}}function s1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Eg.set(i),n.uniformMatrix4fv(this.addr,!1,Eg),It(t,i)}}function o1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function l1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function c1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function u1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function p1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yg.compareFunction=Z0,s=yg):s=ux,t.setTexture2D(e||s,r)}function m1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||fx,r)}function g1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dx,r)}function _1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hx,r)}function v1(n){switch(n){case 5126:return QA;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return r1;case 35676:return s1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return h1;case 36295:return f1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return _1}}function x1(n,e){n.uniform1fv(this.addr,e)}function y1(n,e){const t=uo(e,this.size,2);n.uniform2fv(this.addr,t)}function S1(n,e){const t=uo(e,this.size,3);n.uniform3fv(this.addr,t)}function M1(n,e){const t=uo(e,this.size,4);n.uniform4fv(this.addr,t)}function E1(n,e){const t=uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function T1(n,e){const t=uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function w1(n,e){const t=uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function A1(n,e){n.uniform1iv(this.addr,e)}function R1(n,e){n.uniform2iv(this.addr,e)}function C1(n,e){n.uniform3iv(this.addr,e)}function b1(n,e){n.uniform4iv(this.addr,e)}function P1(n,e){n.uniform1uiv(this.addr,e)}function L1(n,e){n.uniform2uiv(this.addr,e)}function I1(n,e){n.uniform3uiv(this.addr,e)}function N1(n,e){n.uniform4uiv(this.addr,e)}function D1(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ux,s[o])}function U1(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||fx,s[o])}function F1(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||dx,s[o])}function O1(n,e,t){const i=this.cache,r=e.length,s=qc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||hx,s[o])}function k1(n){switch(n){case 5126:return x1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return E1;case 35675:return T1;case 35676:return w1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return b1;case 5125:return P1;case 36294:return L1;case 36295:return I1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}class B1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}}class z1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k1(t.type)}}class H1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function Ag(n,e){n.seq.push(e),n.map[e.id]=e}function V1(n,e,t){const i=n.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ag(t,c===void 0?new B1(a,n,e):new z1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new H1(a),Ag(t,h)),t=h}}}class ec{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);V1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Rg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const G1=37297;let W1=0;function X1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Cg=new Fe;function j1(n){Ge._getMatrix(Cg,Ge.workingColorSpace,n);const e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(n)){case Yc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+X1(n.getShaderSource(e),o)}else return r}function Y1(n,e){const t=j1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function q1(n,e){let t;switch(e){case YM:t="Linear";break;case qM:t="Reinhard";break;case $M:t="Cineon";break;case KM:t="ACESFilmic";break;case JM:t="AgX";break;case QM:t="Neutral";break;case ZM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wl=new P;function $1(){Ge.getLuminanceCoefficients(wl);const n=wl.x.toFixed(4),e=wl.y.toFixed(4),t=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Z1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function J1(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vo(n){return n!==""}function Pg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(n){return n.replace(Q1,tR)}const eR=new Map;function tR(n,e){let t=ke[e];if(t===void 0){const i=eR.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jf(t)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ig(n){return n.replace(nR,iR)}function iR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ng(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function rR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===AM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function sR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ks:case Zs:e="ENVMAP_TYPE_CUBE";break;case jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function aR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case O0:e="ENVMAP_BLENDING_MULTIPLY";break;case XM:e="ENVMAP_BLENDING_MIX";break;case jM:e="ENVMAP_BLENDING_ADD";break}return e}function lR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rR(t),c=sR(t),u=oR(t),h=aR(t),f=lR(t),p=K1(t),g=Z1(s),x=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vo).join(`
`),d.length>0&&(d+=`
`)):(m=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),d=[Ng(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?ke.tonemapping_pars_fragment:"",t.toneMapping!==_r?q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Y1("linearToOutputTexel",t.outputColorSpace),$1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),o=jf(o),o=Pg(o,t),o=Lg(o,t),a=jf(a),a=Pg(a,t),a=Lg(a,t),o=Ig(o),a=Ig(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+o,y=_+d+a,C=Rg(r,r.VERTEX_SHADER,v),R=Rg(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(L){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),z=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(R).trim();let Z=!0,X=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,R);else{const J=bg(r,C,"vertex"),I=bg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+J+`
`+I)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||$==="")&&(X=!1);X&&(L.diagnostics={runnable:Z,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(C),r.deleteShader(R),b=new ec(r,x),T=J1(r,x)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,G1)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=R,this}let uR=0;class hR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fR(e),t.set(e,i)),i}}class fR{constructor(e){this.id=uR++,this.code=e,this.usedTimes=0}}function dR(n,e,t,i,r,s,o){const a=new tx,l=new hR,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,G,z){const $=G.fog,Z=z.geometry,X=T.isMeshStandardMaterial?G.environment:null,J=(T.isMeshStandardMaterial?t:e).get(T.envMap||X),I=J&&J.mapping===jc?J.image.height:null,W=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const K=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=K!==void 0?K.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let Ke,V,te,de;if(W){const tt=oi[W];Ke=tt.vertexShader,V=tt.fragmentShader}else Ke=T.vertexShader,V=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),de=l.getFragmentShaderID(T);const re=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Ne=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,gt=!!T.map,Ye=!!T.matcap,Et=!!J,F=!!T.aoMap,An=!!T.lightMap,We=!!T.bumpMap,Xe=!!T.normalMap,we=!!T.displacementMap,ct=!!T.emissiveMap,Te=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,O=T.clearcoat>0,Y=T.dispersion>0,Q=T.iridescence>0,j=T.sheen>0,Me=T.transmission>0,le=S&&!!T.anisotropyMap,pe=O&&!!T.clearcoatMap,qe=O&&!!T.clearcoatNormalMap,ne=O&&!!T.clearcoatRoughnessMap,me=Q&&!!T.iridescenceMap,Re=Q&&!!T.iridescenceThicknessMap,be=j&&!!T.sheenColorMap,ge=j&&!!T.sheenRoughnessMap,je=!!T.specularMap,Oe=!!T.specularColorMap,ot=!!T.specularIntensityMap,N=Me&&!!T.transmissionMap,ae=Me&&!!T.thicknessMap,H=!!T.gradientMap,q=!!T.alphaMap,he=T.alphaTest>0,ce=!!T.alphaHash,De=!!T.extensions;let St=_r;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(St=n.toneMapping);const Wt={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:Ke,fragmentShader:V,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:de,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&z.instanceColor!==null,instancingMorph:Ne&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:sn,alphaToCoverage:!!T.alphaToCoverage,map:gt,matcap:Ye,envMap:Et,envMapMode:Et&&J.mapping,envMapCubeUVHeight:I,aoMap:F,lightMap:An,bumpMap:We,normalMap:Xe,displacementMap:f&&we,emissiveMap:ct,normalMapObjectSpace:Xe&&T.normalMapType===sE,normalMapTangentSpace:Xe&&T.normalMapType===K0,metalnessMap:Te,roughnessMap:A,anisotropy:S,anisotropyMap:le,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:qe,clearcoatRoughnessMap:ne,dispersion:Y,iridescence:Q,iridescenceMap:me,iridescenceThicknessMap:Re,sheen:j,sheenColorMap:be,sheenRoughnessMap:ge,specularMap:je,specularColorMap:Oe,specularIntensityMap:ot,transmission:Me,transmissionMap:N,thicknessMap:ae,gradientMap:H,opaque:T.transparent===!1&&T.blending===ks&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:he,alphaHash:ce,combine:T.combine,mapUv:gt&&x(T.map.channel),aoMapUv:F&&x(T.aoMap.channel),lightMapUv:An&&x(T.lightMap.channel),bumpMapUv:We&&x(T.bumpMap.channel),normalMapUv:Xe&&x(T.normalMap.channel),displacementMapUv:we&&x(T.displacementMap.channel),emissiveMapUv:ct&&x(T.emissiveMap.channel),metalnessMapUv:Te&&x(T.metalnessMap.channel),roughnessMapUv:A&&x(T.roughnessMap.channel),anisotropyMapUv:le&&x(T.anisotropyMap.channel),clearcoatMapUv:pe&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:qe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(T.sheenRoughnessMap.channel),specularMapUv:je&&x(T.specularMap.channel),specularColorMapUv:Oe&&x(T.specularColorMap.channel),specularIntensityMapUv:ot&&x(T.specularIntensityMap.channel),transmissionMapUv:N&&x(T.transmissionMap.channel),thicknessMapUv:ae&&x(T.thicknessMap.channel),alphaMapUv:q&&x(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xe||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(gt||q),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:gt&&T.map.isVideoTexture===!0&&Ge.getTransfer(T.map.colorSpace)===st,decodeVideoTextureEmissive:ct&&T.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(T.emissiveMap.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===In,flipSided:T.side===pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(_(M,T),v(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function _(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function v(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const M=g[T.type];let L;if(M){const G=oi[M];L=KE.clone(G.uniforms)}else L=T.uniforms;return L}function C(T,M){let L;for(let G=0,z=u.length;G<z;G++){const $=u[G];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new cR(n,M,T,s),u.push(L)),L}function R(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:b}}function pR(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function mR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ug(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,g,x,m){const d=o(h,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,x,m){const d=o(h,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||mR),i.length>1&&i.sort(f||Dg),r.length>1&&r.sort(f||Dg)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ug,n.set(i,[o])):r>=s.length?(o=new Ug,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _R(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function vR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xR=0;function yR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SR(n){const e=new _R,t=vR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const r=new P,s=new Ie,o=new Ie;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,_=0,v=0,y=0,C=0,R=0,w=0;c.sort(yR);for(let T=0,M=c.length;T<M;T++){const L=c[T],G=L.color,z=L.intensity,$=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=G.r*z,h+=G.g*z,f+=G.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);w++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,I=t.get(L);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(G).multiplyScalar(z),X.distance=$,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[x]=X;const J=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[x]=J.matrix,L.castShadow){const I=t.get(L);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.spotShadow[x]=I,i.spotShadowMap[x]=Z,y++}x++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(G).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const J=L.shadow,I=t.get(L);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,I.shadowCameraNear=J.camera.near,I.shadowCameraFar=J.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==d||b.numDirectionalShadows!==_||b.numPointShadows!==v||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,b.directionalLength=p,b.pointLength=g,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=d,b.numDirectionalShadows=_,b.numPointShadows=v,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=w,i.version=xR++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const v=c[d];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Fg(n){const e=new SR(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function MR(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Fg(n),e.set(r,[a])):s>=o.length?(a=new Fg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class ER extends ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=iE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TR extends ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RR(n,e,t){let i=new ip;const r=new _e,s=new _e,o=new Je,a=new ER({depthPacking:rE}),l=new TR,c={},u=t.maxTextureSize,h={[ki]:pn,[pn]:ki,[In]:In},f=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:wR,fragmentShader:AR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let d=this.type;this.render=function(R,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),G=n.state;G.setBlending(gr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=d!==Ti&&this.type===Ti,$=d===Ti&&this.type!==Ti;for(let Z=0,X=R.length;Z<X;Z++){const J=R[Z],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const W=I.getFrameExtents();if(r.multiply(W),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null||z===!0||$===!0){const se=this.type!==Ti?{minFilter:nn,magFilter:nn}:{};I.map!==null&&I.map.dispose(),I.map=new Zr(r.x,r.y,se),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const K=I.getViewportCount();for(let se=0;se<K;se++){const Se=I.getViewport(se);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),G.viewport(o),I.updateMatrices(J,se),i=I.getFrustum(),y(w,b,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===Ti&&_(I,b),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,L)};function _(R,w){const b=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,b,f,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,b,p,x,null)}function v(R,w,b,T){let M=null;const L=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=b.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=M.uuid,z=w.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let Z=$[z];Z===void 0&&(Z=M.clone(),$[z]=Z,w.addEventListener("dispose",C)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,T===Ti?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=n.properties.get(M);G.light=b}return M}function y(R,w,b,T,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Ti)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const z=e.update(R),$=R.material;if(Array.isArray($)){const Z=z.groups;for(let X=0,J=Z.length;X<J;X++){const I=Z[X],W=$[I.materialIndex];if(W&&W.visible){const K=v(R,W,T,M);R.onBeforeShadow(n,R,w,b,z,K,I),n.renderBufferDirect(b,null,z,K,R,I),R.onAfterShadow(n,R,w,b,z,K,I)}}}else if($.visible){const Z=v(R,$,T,M);R.onBeforeShadow(n,R,w,b,z,Z,null),n.renderBufferDirect(b,null,z,Z,R,null),R.onAfterShadow(n,R,w,b,z,Z,null)}}const G=R.children;for(let z=0,$=G.length;z<$;z++)y(G[z],w,b,T,M)}function C(R){R.target.removeEventListener("dispose",C);for(const b in c){const T=c[b],M=R.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const CR={[cf]:uf,[hf]:pf,[ff]:mf,[$s]:df,[uf]:cf,[pf]:hf,[mf]:ff,[df]:$s};function bR(n,e){function t(){let N=!1;const ae=new Je;let H=null;const q=new Je(0,0,0,0);return{setMask:function(he){H!==he&&!N&&(n.colorMask(he,he,he,he),H=he)},setLocked:function(he){N=he},setClear:function(he,ce,De,St,Wt){Wt===!0&&(he*=St,ce*=St,De*=St),ae.set(he,ce,De,St),q.equals(ae)===!1&&(n.clearColor(he,ce,De,St),q.copy(ae))},reset:function(){N=!1,H=null,q.set(-1,0,0,0)}}}function i(){let N=!1,ae=!1,H=null,q=null,he=null;return{setReversed:function(ce){if(ae!==ce){const De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT);const St=he;he=null,this.setClear(St)}ae=ce},getReversed:function(){return ae},setTest:function(ce){ce?re(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ce){H!==ce&&!N&&(n.depthMask(ce),H=ce)},setFunc:function(ce){if(ae&&(ce=CR[ce]),q!==ce){switch(ce){case cf:n.depthFunc(n.NEVER);break;case uf:n.depthFunc(n.ALWAYS);break;case hf:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case ff:n.depthFunc(n.EQUAL);break;case df:n.depthFunc(n.GEQUAL);break;case pf:n.depthFunc(n.GREATER);break;case mf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=ce}},setLocked:function(ce){N=ce},setClear:function(ce){he!==ce&&(ae&&(ce=1-ce),n.clearDepth(ce),he=ce)},reset:function(){N=!1,H=null,q=null,he=null,ae=!1}}}function r(){let N=!1,ae=null,H=null,q=null,he=null,ce=null,De=null,St=null,Wt=null;return{setTest:function(tt){N||(tt?re(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!N&&(n.stencilMask(tt),ae=tt)},setFunc:function(tt,Bn,gi){(H!==tt||q!==Bn||he!==gi)&&(n.stencilFunc(tt,Bn,gi),H=tt,q=Bn,he=gi)},setOp:function(tt,Bn,gi){(ce!==tt||De!==Bn||St!==gi)&&(n.stencilOp(tt,Bn,gi),ce=tt,De=Bn,St=gi)},setLocked:function(tt){N=tt},setClear:function(tt){Wt!==tt&&(n.clearStencil(tt),Wt=tt)},reset:function(){N=!1,ae=null,H=null,q=null,he=null,ce=null,De=null,St=null,Wt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,v=null,y=null,C=null,R=null,w=new Le(0,0,0),b=0,T=!1,M=null,L=null,G=null,z=null,$=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),X=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),X=J>=2);let W=null,K={};const se=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ke=new Je().fromArray(se),V=new Je().fromArray(Se);function te(N,ae,H,q){const he=new Uint8Array(4),ce=n.createTexture();n.bindTexture(N,ce),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<H;De++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,q,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ae+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ce}const de={};de[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc($s),We(!1),Xe(Fm),re(n.CULL_FACE),F(gr);function re(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Ce(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ne(N,ae){return h[N]!==ae?(n.bindFramebuffer(N,ae),h[N]=ae,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ae),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Be(N,ae){let H=p,q=!1;if(N){H=f.get(ae),H===void 0&&(H=[],f.set(ae,H));const he=N.textures;if(H.length!==he.length||H[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,De=he.length;ce<De;ce++)H[ce]=n.COLOR_ATTACHMENT0+ce;H.length=he.length,q=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,q=!0);q&&n.drawBuffers(H)}function gt(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const Ye={[Ur]:n.FUNC_ADD,[CM]:n.FUNC_SUBTRACT,[bM]:n.FUNC_REVERSE_SUBTRACT};Ye[PM]=n.MIN,Ye[LM]=n.MAX;const Et={[IM]:n.ZERO,[NM]:n.ONE,[DM]:n.SRC_COLOR,[af]:n.SRC_ALPHA,[zM]:n.SRC_ALPHA_SATURATE,[kM]:n.DST_COLOR,[FM]:n.DST_ALPHA,[UM]:n.ONE_MINUS_SRC_COLOR,[lf]:n.ONE_MINUS_SRC_ALPHA,[BM]:n.ONE_MINUS_DST_COLOR,[OM]:n.ONE_MINUS_DST_ALPHA,[HM]:n.CONSTANT_COLOR,[VM]:n.ONE_MINUS_CONSTANT_COLOR,[GM]:n.CONSTANT_ALPHA,[WM]:n.ONE_MINUS_CONSTANT_ALPHA};function F(N,ae,H,q,he,ce,De,St,Wt,tt){if(N===gr){x===!0&&(Ce(n.BLEND),x=!1);return}if(x===!1&&(re(n.BLEND),x=!0),N!==RM){if(N!==m||tt!==T){if((d!==Ur||y!==Ur)&&(n.blendEquation(n.FUNC_ADD),d=Ur,y=Ur),tt)switch(N){case ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Om:n.blendFunc(n.ONE,n.ONE);break;case km:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Om:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case km:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,v=null,C=null,R=null,w.set(0,0,0),b=0,m=N,T=tt}return}he=he||ae,ce=ce||H,De=De||q,(ae!==d||he!==y)&&(n.blendEquationSeparate(Ye[ae],Ye[he]),d=ae,y=he),(H!==_||q!==v||ce!==C||De!==R)&&(n.blendFuncSeparate(Et[H],Et[q],Et[ce],Et[De]),_=H,v=q,C=ce,R=De),(St.equals(w)===!1||Wt!==b)&&(n.blendColor(St.r,St.g,St.b,Wt),w.copy(St),b=Wt),m=N,T=!1}function An(N,ae){N.side===In?Ce(n.CULL_FACE):re(n.CULL_FACE);let H=N.side===pn;ae&&(H=!H),We(H),N.blending===ks&&N.transparent===!1?F(gr):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const q=N.stencilWrite;a.setTest(q),q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function Xe(N){N!==TM?(re(n.CULL_FACE),N!==L&&(N===Fm?n.cullFace(n.BACK):N===wM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),L=N}function we(N){N!==G&&(X&&n.lineWidth(N),G=N)}function ct(N,ae,H){N?(re(n.POLYGON_OFFSET_FILL),(z!==ae||$!==H)&&(n.polygonOffset(ae,H),z=ae,$=H)):Ce(n.POLYGON_OFFSET_FILL)}function Te(N){N?re(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+Z-1),W!==N&&(n.activeTexture(N),W=N)}function S(N,ae,H){H===void 0&&(W===null?H=n.TEXTURE0+Z-1:H=W);let q=K[H];q===void 0&&(q={type:void 0,texture:void 0},K[H]=q),(q.type!==N||q.texture!==ae)&&(W!==H&&(n.activeTexture(H),W=H),n.bindTexture(N,ae||de[N]),q.type=N,q.texture=ae)}function O(){const N=K[W];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(N){Ke.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Ke.copy(N))}function ge(N){V.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),V.copy(N))}function je(N,ae){let H=c.get(ae);H===void 0&&(H=new WeakMap,c.set(ae,H));let q=H.get(N);q===void 0&&(q=n.getUniformBlockIndex(ae,N.name),H.set(N,q))}function Oe(N,ae){const q=c.get(ae).get(N);l.get(ae)!==q&&(n.uniformBlockBinding(ae,q,N.__bindingPointIndex),l.set(ae,q))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,K={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,v=null,y=null,C=null,R=null,w=new Le(0,0,0),b=0,T=!1,M=null,L=null,G=null,z=null,$=null,Ke.set(0,0,n.canvas.width,n.canvas.height),V.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ce,bindFramebuffer:Ne,drawBuffers:Be,useProgram:gt,setBlending:F,setMaterial:An,setFlipSided:We,setCullFace:Xe,setLineWidth:we,setPolygonOffset:ct,setScissorTest:Te,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:me,texImage3D:Re,updateUBOMapping:je,uniformBlockBinding:Oe,texStorage2D:qe,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:be,viewport:ge,reset:ot}}function Og(n,e,t,i){const r=PR(i);switch(t){case G0:return n*e;case X0:return n*e;case j0:return n*e*2;case Jd:return n*e/r.components*r.byteLength;case Qd:return n*e/r.components*r.byteLength;case Y0:return n*e*2/r.components*r.byteLength;case ep:return n*e*2/r.components*r.byteLength;case W0:return n*e*3/r.components*r.byteLength;case Dn:return n*e*4/r.components*r.byteLength;case tp:return n*e*4/r.components*r.byteLength;case $l:case Kl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xf:case Sf:return Math.max(n,16)*Math.max(e,8)/4;case vf:case yf:return Math.max(n,8)*Math.max(e,8)/2;case Mf:case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case If:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Df:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case Bf:case zf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case q0:case Hf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vf:case Gf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PR(n){switch(n){case Bi:case z0:return{byteLength:1,components:1};case Ea:case H0:case Ua:return{byteLength:2,components:1};case Kd:case Zd:return{byteLength:2,components:4};case Kr:case $d:case Kn:return{byteLength:4,components:1};case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function LR(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):Aa("canvas")}function x(A,S,O){let Y=1;const Q=Te(A);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Y*Q.width),Me=Math.floor(Y*Q.height);h===void 0&&(h=g(j,Me));const le=S?g(j,Me):h;return le.width=j,le.height=Me,le.getContext("2d").drawImage(A,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Me+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,S,O,Y,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=S;if(S===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),S===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),S===n.RGBA){const Me=Q?Yc:Ge.getTransfer(Y);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=Me===st?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(A,S){let O;return A?S===null||S===Kr||S===Qs?O=n.DEPTH24_STENCIL8:S===Kn?O=n.DEPTH32F_STENCIL8:S===Ea&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Kr||S===Qs?O=n.DEPTH_COMPONENT24:S===Kn?O=n.DEPTH_COMPONENT32F:S===Ea&&(O=n.DEPTH_COMPONENT16),O}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==Sn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&u.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),M(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const O=A.source,Y=f.get(O);if(Y){const Q=Y[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(A),Object.keys(Y).length===0&&f.delete(O)}i.remove(A)}function T(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const O=A.source,Y=f.get(O);delete Y[S.__cacheKey],o.memory.textures--}function M(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let Q=0;Q<S.__webglFramebuffer[Y].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Y][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)n.deleteFramebuffer(S.__webglFramebuffer[Y]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=A.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const j=i.get(O[Y]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(O[Y])}i.remove(A)}let L=0;function G(){L=0}function z(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function $(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Z(A,S){const O=i.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(O,A,S);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function X(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){V(O,A,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function J(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){V(O,A,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function I(A,S){const O=i.get(A);if(A.version>0&&O.__version!==A.version){te(O,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}const W={[Js]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},K={[nn]:n.NEAREST,[B0]:n.NEAREST_MIPMAP_NEAREST,[zo]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[ql]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},se={[oE]:n.NEVER,[fE]:n.ALWAYS,[aE]:n.LESS,[Z0]:n.LEQUAL,[lE]:n.EQUAL,[hE]:n.GEQUAL,[cE]:n.GREATER,[uE]:n.NOTEQUAL};function Se(A,S){if(S.type===Kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Sn||S.magFilter===ql||S.magFilter===zo||S.magFilter===Pi||S.minFilter===Sn||S.minFilter===ql||S.minFilter===zo||S.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,W[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,W[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,W[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,K[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==zo&&S.minFilter!==Pi||S.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const Y=S.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const j=$(S);if(j!==A.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[j].usedTimes++;const Me=Q[A.__cacheKey];Me!==void 0&&(Q[A.__cacheKey].usedTimes--,Me.usedTimes===0&&T(S)),A.__cacheKey=j,A.__webglTexture=Q[j].texture}return O}function V(A,S,O){let Y=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=n.TEXTURE_3D);const Q=Ke(A,S),j=S.source;t.bindTexture(Y,A.__webglTexture,n.TEXTURE0+O);const Me=i.get(j);if(j.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const le=Ge.getPrimaries(Ge.workingColorSpace),pe=S.colorSpace===ir?null:Ge.getPrimaries(S.colorSpace),qe=S.colorSpace===ir||le===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ne=x(S.image,!1,r.maxTextureSize);ne=ct(S,ne);const me=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let be=v(S.internalFormat,me,Re,S.colorSpace,S.isVideoTexture);Se(Y,S);let ge;const je=S.mipmaps,Oe=S.isVideoTexture!==!0,ot=Me.__version===void 0||Q===!0,N=j.dataReady,ae=C(S,ne);if(S.isDepthTexture)be=y(S.format===eo,S.type),ot&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,me,Re,null));else if(S.isDataTexture)if(je.length>0){Oe&&ot&&t.texStorage2D(n.TEXTURE_2D,ae,be,je[0].width,je[0].height);for(let H=0,q=je.length;H<q;H++)ge=je[H],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ge.width,ge.height,me,Re,ge.data):t.texImage2D(n.TEXTURE_2D,H,be,ge.width,ge.height,0,me,Re,ge.data);S.generateMipmaps=!1}else Oe?(ot&&t.texStorage2D(n.TEXTURE_2D,ae,be,ne.width,ne.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,me,Re,ne.data)):t.texImage2D(n.TEXTURE_2D,0,be,ne.width,ne.height,0,me,Re,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,be,je[0].width,je[0].height,ne.depth);for(let H=0,q=je.length;H<q;H++)if(ge=je[H],S.format!==Dn)if(me!==null)if(Oe){if(N)if(S.layerUpdates.size>0){const he=Og(ge.width,ge.height,S.format,S.type);for(const ce of S.layerUpdates){const De=ge.data.subarray(ce*he/ge.data.BYTES_PER_ELEMENT,(ce+1)*he/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,ce,ge.width,ge.height,1,me,De)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,ne.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,be,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,ne.depth,me,Re,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,be,ge.width,ge.height,ne.depth,0,me,Re,ge.data)}else{Oe&&ot&&t.texStorage2D(n.TEXTURE_2D,ae,be,je[0].width,je[0].height);for(let H=0,q=je.length;H<q;H++)ge=je[H],S.format!==Dn?me!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,H,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ge.width,ge.height,me,Re,ge.data):t.texImage2D(n.TEXTURE_2D,H,be,ge.width,ge.height,0,me,Re,ge.data)}else if(S.isDataArrayTexture)if(Oe){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,be,ne.width,ne.height,ne.depth),N)if(S.layerUpdates.size>0){const H=Og(ne.width,ne.height,S.format,S.type);for(const q of S.layerUpdates){const he=ne.data.subarray(q*H/ne.data.BYTES_PER_ELEMENT,(q+1)*H/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,ne.width,ne.height,1,me,Re,he)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Re,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,me,Re,ne.data);else if(S.isData3DTexture)Oe?(ot&&t.texStorage3D(n.TEXTURE_3D,ae,be,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Re,ne.data)):t.texImage3D(n.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,me,Re,ne.data);else if(S.isFramebufferTexture){if(ot)if(Oe)t.texStorage2D(n.TEXTURE_2D,ae,be,ne.width,ne.height);else{let H=ne.width,q=ne.height;for(let he=0;he<ae;he++)t.texImage2D(n.TEXTURE_2D,he,be,H,q,0,me,Re,null),H>>=1,q>>=1}}else if(je.length>0){if(Oe&&ot){const H=Te(je[0]);t.texStorage2D(n.TEXTURE_2D,ae,be,H.width,H.height)}for(let H=0,q=je.length;H<q;H++)ge=je[H],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,me,Re,ge):t.texImage2D(n.TEXTURE_2D,H,be,me,Re,ge);S.generateMipmaps=!1}else if(Oe){if(ot){const H=Te(ne);t.texStorage2D(n.TEXTURE_2D,ae,be,H.width,H.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Re,ne)}else t.texImage2D(n.TEXTURE_2D,0,be,me,Re,ne);m(S)&&d(Y),Me.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,O){if(S.image.length!==6)return;const Y=Ke(A,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const j=i.get(Q);if(Q.version!==j.__version||Y===!0){t.activeTexture(n.TEXTURE0+O);const Me=Ge.getPrimaries(Ge.workingColorSpace),le=S.colorSpace===ir?null:Ge.getPrimaries(S.colorSpace),pe=S.colorSpace===ir||Me===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let q=0;q<6;q++)!qe&&!ne?me[q]=x(S.image[q],!0,r.maxCubemapSize):me[q]=ne?S.image[q].image:S.image[q],me[q]=ct(S,me[q]);const Re=me[0],be=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),je=v(S.internalFormat,be,ge,S.colorSpace),Oe=S.isVideoTexture!==!0,ot=j.__version===void 0||Y===!0,N=Q.dataReady;let ae=C(S,Re);Se(n.TEXTURE_CUBE_MAP,S);let H;if(qe){Oe&&ot&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,je,Re.width,Re.height);for(let q=0;q<6;q++){H=me[q].mipmaps;for(let he=0;he<H.length;he++){const ce=H[he];S.format!==Dn?be!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,0,0,ce.width,ce.height,be,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,je,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,0,0,ce.width,ce.height,be,ge,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he,je,ce.width,ce.height,0,be,ge,ce.data)}}}else{if(H=S.mipmaps,Oe&&ot){H.length>0&&ae++;const q=Te(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,je,q.width,q.height)}for(let q=0;q<6;q++)if(ne){Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,me[q].width,me[q].height,be,ge,me[q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,je,me[q].width,me[q].height,0,be,ge,me[q].data);for(let he=0;he<H.length;he++){const De=H[he].image[q].image;Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,0,0,De.width,De.height,be,ge,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,je,De.width,De.height,0,be,ge,De.data)}}else{Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,be,ge,me[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,je,be,ge,me[q]);for(let he=0;he<H.length;he++){const ce=H[he];Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,0,0,be,ge,ce.image[q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,he+1,je,be,ge,ce.image[q])}}}m(S)&&d(n.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,O,Y,Q,j){const Me=s.convert(O.format,O.colorSpace),le=s.convert(O.type),pe=v(O.internalFormat,Me,le,O.colorSpace),qe=i.get(S),ne=i.get(O);if(ne.__renderTarget=S,!qe.__hasExternalTextures){const me=Math.max(1,S.width>>j),Re=Math.max(1,S.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,pe,me,Re,S.depth,0,Me,le,null):t.texImage2D(Q,j,pe,me,Re,0,Me,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Q,ne.__webglTexture,0,We(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Q,ne.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(A,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const Y=S.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=y(S.stencilBuffer,Q),Me=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=We(S);Xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,j,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,j,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,j,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,A)}else{const Y=S.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],Me=s.convert(j.format,j.colorSpace),le=s.convert(j.type),pe=v(j.internalFormat,Me,le,j.colorSpace),qe=We(S);O&&Xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,pe,S.width,S.height):Xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qe,pe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,pe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const Q=Y.__webglTexture,j=We(S);if(S.depthTexture.format===Bs)Xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===eo)Xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const S=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Y}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=n.createRenderbuffer(),re(S.__webglDepthbuffer[Y],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),re(S.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(A,S,O){const Y=i.get(A);S!==void 0&&de(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ne(A)}function gt(A){const S=A.texture,O=i.get(A),Y=i.get(S);A.addEventListener("dispose",w);const Q=A.textures,j=A.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=S.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let pe=0;pe<S.mipmaps.length;pe++)O.__webglFramebuffer[le][pe]=n.createFramebuffer()}else O.__webglFramebuffer[le]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)O.__webglFramebuffer[le]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Me)for(let le=0,pe=Q.length;le<pe;le++){const qe=i.get(Q[le]);qe.__webglTexture===void 0&&(qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const pe=Q[le];O.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const qe=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),me=v(pe.internalFormat,qe,ne,pe.colorSpace,A.isXRRenderTarget===!0),Re=We(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,me,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,O.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),re(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Se(n.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)de(O.__webglFramebuffer[le][pe],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else de(O.__webglFramebuffer[le],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(S)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let le=0,pe=Q.length;le<pe;le++){const qe=Q[le],ne=i.get(qe);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),Se(n.TEXTURE_2D,qe),de(O.__webglFramebuffer,A,qe,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(qe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Y.__webglTexture),Se(le,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)de(O.__webglFramebuffer[pe],A,S,n.COLOR_ATTACHMENT0,le,pe);else de(O.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,le,0);m(S)&&d(le),t.unbindTexture()}A.depthBuffer&&Ne(A)}function Ye(A){const S=A.textures;for(let O=0,Y=S.length;O<Y;O++){const Q=S[O];if(m(Q)){const j=_(A),Me=i.get(Q).__webglTexture;t.bindTexture(j,Me),d(j),t.unbindTexture()}}}const Et=[],F=[];function An(A){if(A.samples>0){if(Xe(A)===!1){const S=A.textures,O=A.width,Y=A.height;let Q=n.COLOR_BUFFER_BIT;const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(A),le=S.length>1;if(le)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const qe=i.get(S[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,qe,0)}n.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,n.NEAREST),l===!0&&(Et.length=0,F.length=0,Et.push(n.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Et.push(j),F.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const qe=i.get(S[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function We(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function we(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ct(A,S){const O=A.colorSpace,Y=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==sn&&O!==ir&&(Ge.getTransfer(O)===st?(Y!==Dn||Q!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=I,this.rebindTextures=Be,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Xe}function IR(n,e){function t(i,r=ir){let s;const o=Ge.getTransfer(r);if(i===Bi)return n.UNSIGNED_BYTE;if(i===Kd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===V0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===z0)return n.BYTE;if(i===H0)return n.SHORT;if(i===Ea)return n.UNSIGNED_SHORT;if(i===$d)return n.INT;if(i===Kr)return n.UNSIGNED_INT;if(i===Kn)return n.FLOAT;if(i===Ua)return n.HALF_FLOAT;if(i===G0)return n.ALPHA;if(i===W0)return n.RGB;if(i===Dn)return n.RGBA;if(i===X0)return n.LUMINANCE;if(i===j0)return n.LUMINANCE_ALPHA;if(i===Bs)return n.DEPTH_COMPONENT;if(i===eo)return n.DEPTH_STENCIL;if(i===Jd)return n.RED;if(i===Qd)return n.RED_INTEGER;if(i===Y0)return n.RG;if(i===ep)return n.RG_INTEGER;if(i===tp)return n.RGBA_INTEGER;if(i===$l||i===Kl||i===Zl||i===Jl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vf||i===xf||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mf||i===Ef||i===Tf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mf||i===Ef)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Tf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wf||i===Af||i===Rf||i===Cf||i===bf||i===Pf||i===Lf||i===If||i===Nf||i===Df||i===Uf||i===Ff||i===Of||i===kf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===If)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ff)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===Bf||i===zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ql)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===q0||i===Hf||i===Vf||i===Gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class NR extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jn extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DR={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const UR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FR=`
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

}`;class OR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Pt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yr({vertexShader:UR,fragmentShader:FR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kR extends co{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const x=new OR,m=t.getContextAttributes();let d=null,_=null;const v=[],y=[],C=new _e;let R=null;const w=new en;w.viewport=new Je;const b=new en;b.viewport=new Je;const T=[w,b],M=new NR;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=v[V];return te===void 0&&(te=new Qu,v[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=v[V];return te===void 0&&(te=new Qu,v[V]=te),te.getGripSpace()},this.getHand=function(V){let te=v[V];return te===void 0&&(te=new Qu,v[V]=te),te.getHandSpace()};function z(V){const te=y.indexOf(V.inputSource);if(te===-1)return;const de=v[te];de!==void 0&&(de.update(V.inputSource,V.frame,c||o),de.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Z);for(let V=0;V<v.length;V++){const te=y[V];te!==null&&(y[V]=null,v[V].disconnect(te))}L=null,G=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,_=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Zr(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,de=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?eo:Bs,de=m.stencil?Qs:Kr);const Ce={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Zr(f.textureWidth,f.textureHeight,{format:Dn,type:Bi,depthTexture:new cx(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(V){for(let te=0;te<V.removed.length;te++){const de=V.removed[te],re=y.indexOf(de);re>=0&&(y[re]=null,v[re].disconnect(de))}for(let te=0;te<V.added.length;te++){const de=V.added[te];let re=y.indexOf(de);if(re===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=y.length){y.push(de),re=Ne;break}else if(y[Ne]===null){y[Ne]=de,re=Ne;break}if(re===-1)break}const Ce=v[re];Ce&&Ce.connect(de)}}const X=new P,J=new P;function I(V,te,de){X.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const re=X.distanceTo(J),Ce=te.projectionMatrix.elements,Ne=de.projectionMatrix.elements,Be=Ce[14]/(Ce[10]-1),gt=Ce[14]/(Ce[10]+1),Ye=(Ce[9]+1)/Ce[5],Et=(Ce[9]-1)/Ce[5],F=(Ce[8]-1)/Ce[0],An=(Ne[8]+1)/Ne[0],We=Be*F,Xe=Be*An,we=re/(-F+An),ct=we*-F;if(te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ct),V.translateZ(we),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ce[10]===-1)V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Te=Be+we,A=gt+we,S=We-ct,O=Xe+(re-ct),Y=Ye*gt/A*Te,Q=Et*gt/A*Te;V.projectionMatrix.makePerspective(S,O,Y,Q,Te,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function W(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let te=V.near,de=V.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(de=x.depthFar)),M.near=b.near=w.near=te,M.far=b.far=w.far=de,(L!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,G=M.far),w.layers.mask=V.layers.mask|2,b.layers.mask=V.layers.mask|4,M.layers.mask=w.layers.mask|b.layers.mask;const re=V.parent,Ce=M.cameras;W(M,re);for(let Ne=0;Ne<Ce.length;Ne++)W(Ce[Ne],re);Ce.length===2?I(M,w,b):M.projectionMatrix.copy(w.projectionMatrix),K(V,M,re)};function K(V,te,de){de===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=to*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let se=null;function Se(V,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let re=!1;de.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Ne=0;Ne<de.length;Ne++){const Be=de[Ne];let gt=null;if(p!==null)gt=p.getViewport(Be);else{const Et=h.getViewSubImage(f,Be);gt=Et.viewport,Ne===0&&(e.setRenderTargetTextures(_,Et.colorTexture,f.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(_))}let Ye=T[Ne];Ye===void 0&&(Ye=new en,Ye.layers.enable(Ne),Ye.viewport=new Je,T[Ne]=Ye),Ye.matrix.fromArray(Be.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Be.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(gt.x,gt.y,gt.width,gt.height),Ne===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(Ye)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Ne=h.getDepthInformation(de[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,r.renderState)}}for(let de=0;de<v.length;de++){const re=y[de],Ce=v[de];re!==null&&Ce!==void 0&&Ce.update(re,te,c||o)}se&&se(V,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ke=new lx;Ke.setAnimationLoop(Se),this.setAnimationLoop=function(V){se=V},this.dispose=function(){}}}const Pr=new ni,BR=new Ie;function zR(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,sx(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,Pr.copy(y),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),m.envMapRotation.value.setFromMatrix4(BR.makeRotationFromEuler(Pr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function c(_,v){let y=r[_.id];y===void 0&&(g(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(_,C);const R=e.render.frame;s[_.id]!==R&&(f(_),s[_.id]=R)}function u(_){const v=h();_.__bindingPointIndex=v;const y=n.createBuffer(),C=_.__size,R=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],y=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,w=y.length;R<w;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let T=0,M=b.length;T<M;T++){const L=b[T];if(p(L,R,T,C)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],J=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+$,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y,C){const R=_.value,w=v+"_"+y;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const b=C[w];if(typeof R=="number"||typeof R=="boolean"){if(b!==R)return C[w]=R,!0}else if(b.equals(R)===!1)return b.copy(R),!0}return!1}function g(_){const v=_.uniforms;let y=0;const C=16;for(let w=0,b=v.length;w<b;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,L=T.length;M<L;M++){const G=T[M],z=Array.isArray(G.value)?G.value:[G.value];for(let $=0,Z=z.length;$<Z;$++){const X=z[$],J=x(X),I=y%C,W=I%J.boundary,K=I+W;y+=W,K!==0&&C-K<J.storage&&(y+=C-K),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=J.storage}}}const R=y%C;return R>0&&(y+=C-R),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class VR{constructor(e={}){const{canvas:t=PE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const _=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this.toneMapping=_r,this.toneMappingExposure=1;const y=this;let C=!1,R=0,w=0,b=null,T=-1,M=null;const L=new Je,G=new Je;let z=null;const $=new Le(0);let Z=0,X=t.width,J=t.height,I=1,W=null,K=null;const se=new Je(0,0,X,J),Se=new Je(0,0,X,J);let Ke=!1;const V=new ip;let te=!1,de=!1;const re=new Ie,Ce=new Ie,Ne=new P,Be=new Je,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Et(){return b===null?I:1}let F=i;function An(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qd}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),F===null){const D="webgl2";if(F=An(D,E),F===null)throw An(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let We,Xe,we,ct,Te,A,S,O,Y,Q,j,Me,le,pe,qe,ne,me,Re,be,ge,je,Oe,ot,N;function ae(){We=new YA(F),We.init(),Oe=new IR(F,We),Xe=new HA(F,We,e,Oe),we=new bR(F,We),Xe.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),ct=new KA(F),Te=new pR,A=new LR(F,We,we,Te,Xe,Oe,ct),S=new GA(y),O=new jA(y),Y=new iT(F),ot=new BA(F,Y),Q=new qA(F,Y,ct,ot),j=new JA(F,Q,Y,ct),be=new ZA(F,Xe,A),ne=new VA(Te),Me=new dR(y,S,O,We,Xe,ot,ne),le=new zR(y,Te),pe=new gR,qe=new MR(We),Re=new kA(y,S,O,we,j,p,l),me=new RR(y,j,Xe),N=new HR(F,ct,Xe,we),ge=new zA(F,We,ct),je=new $A(F,We,ct),ct.programs=Me.programs,y.capabilities=Xe,y.extensions=We,y.properties=Te,y.renderLists=pe,y.shadowMap=me,y.state=we,y.info=ct}ae();const H=new kR(y,F);this.xr=H,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=We.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=We.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(X,J,!1))},this.getSize=function(E){return E.set(X,J)},this.setSize=function(E,D,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,J=D,t.width=Math.floor(E*I),t.height=Math.floor(D*I),k===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(X*I,J*I).floor()},this.setDrawingBufferSize=function(E,D,k){X=E,J=D,I=k,t.width=Math.floor(E*k),t.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,D,k,B){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,D,k,B),we.viewport(L.copy(se).multiplyScalar(I).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,D,k,B){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,D,k,B),we.scissor(G.copy(Se).multiplyScalar(I).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){we.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,D=!0,k=!0){let B=0;if(E){let U=!1;if(b!==null){const ie=b.texture.format;U=ie===tp||ie===ep||ie===Qd}if(U){const ie=b.texture.type,ue=ie===Bi||ie===Kr||ie===Ea||ie===Qs||ie===Kd||ie===Zd,ve=Re.getClearColor(),xe=Re.getClearAlpha(),Pe=ve.r,Ue=ve.g,ye=ve.b;ue?(g[0]=Pe,g[1]=Ue,g[2]=ye,g[3]=xe,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Pe,x[1]=Ue,x[2]=ye,x[3]=xe,F.clearBufferiv(F.COLOR,0,x))}else B|=F.COLOR_BUFFER_BIT}D&&(B|=F.DEPTH_BUFFER_BIT),k&&(B|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),qe.dispose(),Te.dispose(),S.dispose(),O.dispose(),j.dispose(),ot.dispose(),N.dispose(),Me.dispose(),H.dispose(),H.removeEventListener("sessionstart",vp),H.removeEventListener("sessionend",xp),Tr.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=ct.autoReset,D=me.enabled,k=me.autoUpdate,B=me.needsUpdate,U=me.type;ae(),ct.autoReset=E,me.enabled=D,me.autoUpdate=k,me.needsUpdate=B,me.type=U}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const D=E.target;D.removeEventListener("dispose",De),St(D)}function St(E){Wt(E),Te.remove(E)}function Wt(E){const D=Te.get(E).programs;D!==void 0&&(D.forEach(function(k){Me.releaseProgram(k)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,B,U,ie){D===null&&(D=gt);const ue=U.isMesh&&U.matrixWorld.determinant()<0,ve=Dx(E,D,k,B,U);we.setMaterial(B,ue);let xe=k.index,Pe=1;if(B.wireframe===!0){if(xe=Q.getWireframeAttribute(k),xe===void 0)return;Pe=2}const Ue=k.drawRange,ye=k.attributes.position;let Ze=Ue.start*Pe,at=(Ue.start+Ue.count)*Pe;ie!==null&&(Ze=Math.max(Ze,ie.start*Pe),at=Math.min(at,(ie.start+ie.count)*Pe)),xe!==null?(Ze=Math.max(Ze,0),at=Math.min(at,xe.count)):ye!=null&&(Ze=Math.max(Ze,0),at=Math.min(at,ye.count));const ut=at-Ze;if(ut<0||ut===1/0)return;ot.setup(U,B,ve,k,xe);let ln,Qe=ge;if(xe!==null&&(ln=Y.get(xe),Qe=je,Qe.setIndex(ln)),U.isMesh)B.wireframe===!0?(we.setLineWidth(B.wireframeLinewidth*Et()),Qe.setMode(F.LINES)):Qe.setMode(F.TRIANGLES);else if(U.isLine){let Ee=B.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*Et()),U.isLineSegments?Qe.setMode(F.LINES):U.isLineLoop?Qe.setMode(F.LINE_LOOP):Qe.setMode(F.LINE_STRIP)}else U.isPoints?Qe.setMode(F.POINTS):U.isSprite&&Qe.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,_i=U._multiDrawCounts,et=U._multiDrawCount,zn=xe?Y.get(xe).bytesPerElement:1,ts=Te.get(B).currentProgram.getUniforms();for(let gn=0;gn<et;gn++)ts.setValue(F,"_gl_DrawID",gn),Qe.render(Ee[gn]/zn,_i[gn])}else if(U.isInstancedMesh)Qe.renderInstances(Ze,ut,U.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_i=Math.min(k.instanceCount,Ee);Qe.renderInstances(Ze,ut,_i)}else Qe.render(Ze,ut)};function tt(E,D,k){E.transparent===!0&&E.side===In&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,Ha(E,D,k),E.side=ki,E.needsUpdate=!0,Ha(E,D,k),E.side=In):Ha(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),d=qe.get(k),d.init(D),v.push(d),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),E!==k&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const B=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const ve=ie[ue];tt(ve,k,U),B.add(ve)}else tt(ie,k,U),B.add(ie)}),v.pop(),d=null,B},this.compileAsync=function(E,D,k=null){const B=this.compile(E,D,k);return new Promise(U=>{function ie(){if(B.forEach(function(ue){Te.get(ue).currentProgram.isReady()&&B.delete(ue)}),B.size===0){U(E);return}setTimeout(ie,10)}We.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Bn=null;function gi(E){Bn&&Bn(E)}function vp(){Tr.stop()}function xp(){Tr.start()}const Tr=new lx;Tr.setAnimationLoop(gi),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(E){Bn=E,H.setAnimationLoop(E),E===null?Tr.stop():Tr.start()},H.addEventListener("sessionstart",vp),H.addEventListener("sessionend",xp),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,D,b),d=qe.get(E,v.length),d.init(D),v.push(d),Ce.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(Ce),de=this.localClippingEnabled,te=ne.init(this.clippingPlanes,de),m=pe.get(E,_.length),m.init(),_.push(m),H.enabled===!0&&H.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&Jc(ie,D,-1/0,y.sortObjects)}Jc(E,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,K),Ye=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ye&&Re.addToRenderList(m,E),this.info.render.frame++,te===!0&&ne.beginShadows();const k=d.state.shadowsArray;me.render(k,E,D),te===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,U=m.transmissive;if(d.setupLights(),D.isArrayCamera){const ie=D.cameras;if(U.length>0)for(let ue=0,ve=ie.length;ue<ve;ue++){const xe=ie[ue];Sp(B,U,E,xe)}Ye&&Re.render(E);for(let ue=0,ve=ie.length;ue<ve;ue++){const xe=ie[ue];yp(m,E,xe,xe.viewport)}}else U.length>0&&Sp(B,U,E,D),Ye&&Re.render(E),yp(m,E,D);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(y,E,D),ot.resetDefaultState(),T=-1,M=null,v.pop(),v.length>0?(d=v[v.length-1],te===!0&&ne.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Jc(E,D,k,B){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){B&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const ue=j.update(E),ve=E.material;ve.visible&&m.push(E,ue,ve,k,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const ue=j.update(E),ve=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Be.copy(ue.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(ve)){const xe=ue.groups;for(let Pe=0,Ue=xe.length;Pe<Ue;Pe++){const ye=xe[Pe],Ze=ve[ye.materialIndex];Ze&&Ze.visible&&m.push(E,ue,Ze,k,Be.z,ye)}}else ve.visible&&m.push(E,ue,ve,k,Be.z,null)}}const ie=E.children;for(let ue=0,ve=ie.length;ue<ve;ue++)Jc(ie[ue],D,k,B)}function yp(E,D,k,B){const U=E.opaque,ie=E.transmissive,ue=E.transparent;d.setupLightsView(k),te===!0&&ne.setGlobalState(y.clippingPlanes,k),B&&we.viewport(L.copy(B)),U.length>0&&za(U,D,k),ie.length>0&&za(ie,D,k),ue.length>0&&za(ue,D,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Sp(E,D,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new Zr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ua:Bi,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const ie=d.state.transmissionRenderTarget[B.id],ue=B.viewport||L;ie.setSize(ue.z,ue.w);const ve=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor($),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&Re.render(k);const xe=y.toneMapping;y.toneMapping=_r;const Pe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),te===!0&&ne.setGlobalState(y.clippingPlanes,B),za(E,k,B),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ye=0,Ze=D.length;ye<Ze;ye++){const at=D[ye],ut=at.object,ln=at.geometry,Qe=at.material,Ee=at.group;if(Qe.side===In&&ut.layers.test(B.layers)){const _i=Qe.side;Qe.side=pn,Qe.needsUpdate=!0,Mp(ut,k,B,ln,Qe,Ee),Qe.side=_i,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}y.setRenderTarget(ve),y.setClearColor($,Z),Pe!==void 0&&(B.viewport=Pe),y.toneMapping=xe}function za(E,D,k){const B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ie=E.length;U<ie;U++){const ue=E[U],ve=ue.object,xe=ue.geometry,Pe=B===null?ue.material:B,Ue=ue.group;ve.layers.test(k.layers)&&Mp(ve,D,k,xe,Pe,Ue)}}function Mp(E,D,k,B,U,ie){E.onBeforeRender(y,D,k,B,U,ie),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(y,D,k,B,E,ie),U.transparent===!0&&U.side===In&&U.forceSinglePass===!1?(U.side=pn,U.needsUpdate=!0,y.renderBufferDirect(k,D,B,U,E,ie),U.side=ki,U.needsUpdate=!0,y.renderBufferDirect(k,D,B,U,E,ie),U.side=In):y.renderBufferDirect(k,D,B,U,E,ie),E.onAfterRender(y,D,k,B,U,ie)}function Ha(E,D,k){D.isScene!==!0&&(D=gt);const B=Te.get(E),U=d.state.lights,ie=d.state.shadowsArray,ue=U.state.version,ve=Me.getParameters(E,U.state,ie,D,k),xe=Me.getProgramCacheKey(ve);let Pe=B.programs;B.environment=E.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",De),Pe=new Map,B.programs=Pe);let Ue=Pe.get(xe);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===ue)return Tp(E,ve),Ue}else ve.uniforms=Me.getUniforms(E),E.onBeforeCompile(ve,y),Ue=Me.acquireProgram(ve,xe),Pe.set(xe,Ue),B.uniforms=ve.uniforms;const ye=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ne.uniform),Tp(E,ve),B.needsLights=Fx(E),B.lightsStateVersion=ue,B.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function Ep(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=ec.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Tp(E,D){const k=Te.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Dx(E,D,k,B,U){D.isScene!==!0&&(D=gt),A.resetTextureUnits();const ie=D.fog,ue=B.isMeshStandardMaterial?D.environment:null,ve=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:sn,xe=(B.isMeshStandardMaterial?O:S).get(B.envMap||ue),Pe=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ye=!!k.morphAttributes.position,Ze=!!k.morphAttributes.normal,at=!!k.morphAttributes.color;let ut=_r;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ut=y.toneMapping);const ln=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=ln!==void 0?ln.length:0,Ee=Te.get(B),_i=d.state.lights;if(te===!0&&(de===!0||E!==M)){const Rn=E===M&&B.id===T;ne.setState(B,E,Rn)}let et=!1;B.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==_i.state.version||Ee.outputColorSpace!==ve||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==xe||B.fog===!0&&Ee.fog!==ie||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ue||Ee.morphTargets!==ye||Ee.morphNormals!==Ze||Ee.morphColors!==at||Ee.toneMapping!==ut||Ee.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ee.__version=B.version);let zn=Ee.currentProgram;et===!0&&(zn=Ha(B,D,U));let ts=!1,gn=!1,mo=!1;const ht=zn.getUniforms(),ii=Ee.uniforms;if(we.useProgram(zn.program)&&(ts=!0,gn=!0,mo=!0),B.id!==T&&(T=B.id,gn=!0),ts||M!==E){we.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),IE(re),NE(re),ht.setValue(F,"projectionMatrix",re)):ht.setValue(F,"projectionMatrix",E.projectionMatrix),ht.setValue(F,"viewMatrix",E.matrixWorldInverse);const Vi=ht.map.cameraPosition;Vi!==void 0&&Vi.setValue(F,Ne.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&ht.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ht.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,gn=!0,mo=!0)}if(U.isSkinnedMesh){ht.setOptional(F,U,"bindMatrix"),ht.setOptional(F,U,"bindMatrixInverse");const Rn=U.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),ht.setValue(F,"boneTexture",Rn.boneTexture,A))}U.isBatchedMesh&&(ht.setOptional(F,U,"batchingTexture"),ht.setValue(F,"batchingTexture",U._matricesTexture,A),ht.setOptional(F,U,"batchingIdTexture"),ht.setValue(F,"batchingIdTexture",U._indirectTexture,A),ht.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(F,"batchingColorTexture",U._colorsTexture,A));const go=k.morphAttributes;if((go.position!==void 0||go.normal!==void 0||go.color!==void 0)&&be.update(U,k,zn),(gn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,ht.setValue(F,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ii.envMap.value=xe,ii.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(ii.envMapIntensity.value=D.environmentIntensity),gn&&(ht.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Ux(ii,mo),ie&&B.fog===!0&&le.refreshFogUniforms(ii,ie),le.refreshMaterialUniforms(ii,B,I,J,d.state.transmissionRenderTarget[E.id]),ec.upload(F,Ep(Ee),ii,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ec.upload(F,Ep(Ee),ii,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ht.setValue(F,"center",U.center),ht.setValue(F,"modelViewMatrix",U.modelViewMatrix),ht.setValue(F,"normalMatrix",U.normalMatrix),ht.setValue(F,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Rn=B.uniformsGroups;for(let Vi=0,Gi=Rn.length;Vi<Gi;Vi++){const wp=Rn[Vi];N.update(wp,zn),N.bind(wp,zn)}}return zn}function Ux(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Fx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,D,k){Te.get(E.texture).__webglTexture=D,Te.get(E.depthTexture).__webglTexture=k;const B=Te.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const k=Te.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){b=E,R=D,w=k;let B=!0,U=null,ie=!1,ue=!1;if(E){const xe=Te.get(E);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(F.FRAMEBUFFER,null),B=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(xe.__hasExternalTextures)A.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&Te.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ue=!0);const Ue=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[D])?U=Ue[D][k]:U=Ue[D],ie=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?U=Te.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[k]:U=Ue,L.copy(E.viewport),G.copy(E.scissor),z=E.scissorTest}else L.copy(se).multiplyScalar(I).floor(),G.copy(Se).multiplyScalar(I).floor(),z=Ke;if(we.bindFramebuffer(F.FRAMEBUFFER,U)&&B&&we.drawBuffers(E,U),we.viewport(L),we.scissor(G),we.setScissorTest(z),ie){const xe=Te.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,k)}else if(ue){const xe=Te.get(E.texture),Pe=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.__webglTexture,k||0,Pe)}T=-1},this.readRenderTargetPixels=function(E,D,k,B,U,ie,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){we.bindFramebuffer(F.FRAMEBUFFER,ve);try{const xe=E.texture,Pe=xe.format,Ue=xe.type;if(!Xe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-B&&k>=0&&k<=E.height-U&&F.readPixels(D,k,B,U,Oe.convert(Pe),Oe.convert(Ue),ie)}finally{const xe=b!==null?Te.get(b).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,D,k,B,U,ie,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){const xe=E.texture,Pe=xe.format,Ue=xe.type;if(!Xe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-B&&k>=0&&k<=E.height-U){we.bindFramebuffer(F.FRAMEBUFFER,ve);const ye=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.bufferData(F.PIXEL_PACK_BUFFER,ie.byteLength,F.STREAM_READ),F.readPixels(D,k,B,U,Oe.convert(Pe),Oe.convert(Ue),0);const Ze=b!==null?Te.get(b).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Ze);const at=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await LE(F,at,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ye),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ie),F.deleteBuffer(ye),F.deleteSync(at),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,k=0){E.isTexture!==!0&&(Ho("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-k),U=Math.floor(E.image.width*B),ie=Math.floor(E.image.height*B),ue=D!==null?D.x:0,ve=D!==null?D.y:0;A.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,k,0,0,ue,ve,U,ie),we.unbindTexture()},this.copyTextureToTexture=function(E,D,k=null,B=null,U=0){E.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,k=null);let ie,ue,ve,xe,Pe,Ue,ye,Ze,at;const ut=E.isCompressedTexture?E.mipmaps[U]:E.image;k!==null?(ie=k.max.x-k.min.x,ue=k.max.y-k.min.y,ve=k.isBox3?k.max.z-k.min.z:1,xe=k.min.x,Pe=k.min.y,Ue=k.isBox3?k.min.z:0):(ie=ut.width,ue=ut.height,ve=ut.depth||1,xe=0,Pe=0,Ue=0),B!==null?(ye=B.x,Ze=B.y,at=B.z):(ye=0,Ze=0,at=0);const ln=Oe.convert(D.format),Qe=Oe.convert(D.type);let Ee;D.isData3DTexture?(A.setTexture3D(D,0),Ee=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),Ee=F.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),Ee=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const _i=F.getParameter(F.UNPACK_ROW_LENGTH),et=F.getParameter(F.UNPACK_IMAGE_HEIGHT),zn=F.getParameter(F.UNPACK_SKIP_PIXELS),ts=F.getParameter(F.UNPACK_SKIP_ROWS),gn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ut.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ue);const mo=E.isDataArrayTexture||E.isData3DTexture,ht=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const ii=Te.get(E),go=Te.get(D),Rn=Te.get(ii.__renderTarget),Vi=Te.get(go.__renderTarget);we.bindFramebuffer(F.READ_FRAMEBUFFER,Rn.__webglFramebuffer),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Gi=0;Gi<ve;Gi++)mo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(E).__webglTexture,U,Ue+Gi),E.isDepthTexture?(ht&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,U,at+Gi),F.blitFramebuffer(xe,Pe,ie,ue,ye,Ze,ie,ue,F.DEPTH_BUFFER_BIT,F.NEAREST)):ht?F.copyTexSubImage3D(Ee,U,ye,Ze,at+Gi,xe,Pe,ie,ue):F.copyTexSubImage2D(Ee,U,ye,Ze,at+Gi,xe,Pe,ie,ue);we.bindFramebuffer(F.READ_FRAMEBUFFER,null),we.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ht?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ee,U,ye,Ze,at,ie,ue,ve,ln,Qe,ut.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,U,ye,Ze,at,ie,ue,ve,ln,ut.data):F.texSubImage3D(Ee,U,ye,Ze,at,ie,ue,ve,ln,Qe,ut):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,ye,Ze,ie,ue,ln,Qe,ut.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,ye,Ze,ut.width,ut.height,ln,ut.data):F.texSubImage2D(F.TEXTURE_2D,U,ye,Ze,ie,ue,ln,Qe,ut);F.pixelStorei(F.UNPACK_ROW_LENGTH,_i),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,et),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ts),F.pixelStorei(F.UNPACK_SKIP_IMAGES,gn),U===0&&D.generateMipmaps&&F.generateMipmap(Ee),we.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k=null,B=null,U=0){return E.isTexture!==!0&&(Ho("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0),Ho('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,k,B,U)},this.initRenderTarget=function(E){Te.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){R=0,w=0,b=null,we.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}class GR extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class WR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xf,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new P;class op{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new op(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kg=new P,Bg=new Je,zg=new Je,XR=new P,Hg=new Ie,Al=new P,eh=new fi,Vg=new Ie,th=new Fa;class jR extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zm,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Al),this.boundingBox.expandByPoint(Al)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Al),this.boundingSphere.expandByPoint(Al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eh.copy(this.boundingSphere),eh.applyMatrix4(r),e.ray.intersectsSphere(eh)!==!1&&(Vg.copy(r).invert(),th.copy(e.ray).applyMatrix4(Vg),!(this.boundingBox!==null&&th.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,th)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===eE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Bg.fromBufferAttribute(r.attributes.skinIndex,e),zg.fromBufferAttribute(r.attributes.skinWeight,e),kg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=zg.getComponent(s);if(o!==0){const a=Bg.getComponent(s);Hg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(XR.copy(kg).applyMatrix4(Hg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class px extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mx extends Pt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=nn,u=nn,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gg=new Ie,YR=new Ie;class ap{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ie;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:YR;Gg.multiplyMatrices(a,t[s]),Gg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ap(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new mx(t,e,e,Dn,Kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new px),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Yf extends rn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _s=new Ie,Wg=new Ie,Rl=[],Xg=new Hi,qR=new Ie,bo=new Ht,Po=new fi;class $R extends Ht{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,qR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),Xg.copy(e.boundingBox).applyMatrix4(_s),this.boundingBox.union(Xg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,_s),Po.copy(e.boundingSphere).applyMatrix4(_s),this.boundingSphere.union(Po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(i),e.ray.intersectsSphere(Po)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_s),Wg.multiplyMatrices(i,_s),bo.matrixWorld=Wg,bo.raycast(e,Rl);for(let o=0,a=Rl.length;o<a;o++){const l=Rl[o];l.instanceId=s,l.object=this,t.push(l)}Rl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new mx(new Float32Array(r*this.count),r,this.count,Jd,Kn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class lp extends ui{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new P,bc=new P,jg=new Ie,Lo=new Fa,Cl=new fi,nh=new P,Yg=new P;class $c extends mt{constructor(e=new mn,t=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Cc.fromBufferAttribute(t,r-1),bc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Cc.distanceTo(bc);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(r),Cl.radius+=s,e.ray.intersectsSphere(Cl)===!1)return;jg.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(jg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const d=u.getX(x),_=u.getX(x+1),v=bl(this,e,Lo,l,d,_);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),d=bl(this,e,Lo,l,x,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const d=bl(this,e,Lo,l,x,x+1);d&&t.push(d)}if(this.isLineLoop){const x=bl(this,e,Lo,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bl(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Cc.fromBufferAttribute(o,r),bc.fromBufferAttribute(o,s),t.distanceSqToSegment(Cc,bc,nh,Yg)>i)return;nh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(nh);if(!(l<e.near||l>e.far))return{distance:l,point:Yg.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const qg=new P,$g=new P;class KR extends $c{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)qg.fromBufferAttribute(t,r),$g.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qg.distanceTo($g);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gx extends $c{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _x extends ui{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kg=new Ie,qf=new Fa,Pl=new fi,Ll=new P;class ZR extends mt{constructor(e=new mn,t=new _x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;Kg.copy(r).invert(),qf.copy(e.ray).applyMatrix4(Kg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);Ll.fromBufferAttribute(h,m),Zg(Ll,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Ll.fromBufferAttribute(h,g),Zg(Ll,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zg(n,e,t,i,r,s,o){const a=qf.distanceSqToPoint(n);if(a<t){const l=new P;qf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class JR extends Pt{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new _e:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],s=[],o=[],a=new P,l=new Ie;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ft(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Ft(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cp extends di{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new _e){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class QR extends cp{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function up(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Il=new P,ih=new up,rh=new up,sh=new up;class eC extends di{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Il.subVectors(r[0],r[1]).add(r[0]),c=Il);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Il.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ih.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,m),rh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,m),sh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),rh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),sh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ih.calc(l),rh.calc(l),sh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jg(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function tC(n,e){const t=1-n;return t*t*e}function nC(n,e){return 2*(1-n)*n*e}function iC(n,e){return n*n*e}function na(n,e,t,i){return tC(n,e)+nC(n,t)+iC(n,i)}function rC(n,e){const t=1-n;return t*t*t*e}function sC(n,e){const t=1-n;return 3*t*t*n*e}function oC(n,e){return 3*(1-n)*n*n*e}function aC(n,e){return n*n*n*e}function ia(n,e,t,i,r){return rC(n,e)+sC(n,t)+oC(n,i)+aC(n,r)}class vx extends di{constructor(e=new _e,t=new _e,i=new _e,r=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new _e){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,r.x,s.x,o.x,a.x),ia(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lC extends di{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,r.x,s.x,o.x,a.x),ia(e,r.y,s.y,o.y,a.y),ia(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xx extends di{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cC extends di{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yx extends di{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(na(e,r.x,s.x,o.x),na(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uC extends di{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(na(e,r.x,s.x,o.x),na(e,r.y,s.y,o.y),na(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sx extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Jg(a,l.x,c.x,u.x,h.x),Jg(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new _e().fromArray(r))}return this}}var Qg=Object.freeze({__proto__:null,ArcCurve:QR,CatmullRomCurve3:eC,CubicBezierCurve:vx,CubicBezierCurve3:lC,EllipseCurve:cp,LineCurve:xx,LineCurve3:cC,QuadraticBezierCurve:yx,QuadraticBezierCurve3:uC,SplineCurve:Sx});class hC extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qg[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Qg[r.type]().fromJSON(r))}return this}}class $f extends hC{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new xx(this.currentPoint.clone(),new _e(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new yx(this.currentPoint.clone(),new _e(e,t),new _e(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new vx(this.currentPoint.clone(),new _e(e,t),new _e(i,r),new _e(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Sx(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new cp(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hp extends mn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new P,u=new _e;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mx extends $f{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new $f().fromJSON(r))}return this}}const fC={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Ex(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(i&&(s=_C(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<r;g+=t)h=n[g],f=n[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ra(s,o,t,a,l,p,0),o}};function Ex(n,e,t,i,r){let s,o;if(r===CC(n,e,t,i)>0)for(s=e;s<t;s+=i)o=e_(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=e_(s,n[s],n[s+1],o);return o&&Kc(o,o.next)&&(ba(o),o=o.next),o}function Jr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Kc(t,t.next)||vt(t.prev,t,t.next)===0)){if(ba(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ra(n,e,t,i,r,s,o){if(!n)return;!o&&s&&MC(n,i,r,s);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?pC(n,i,r,s):dC(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),ba(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=mC(Jr(n),e,t),Ra(n,e,t,i,r,s,2)):o===2&&gC(n,e,t,i,r,s):Ra(Jr(n),e,t,i,r,s,1);break}}}function dC(n){const e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Ls(r,a,s,l,o,c,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pC(n,e,t,i){const r=n.prev,s=n,o=n.next;if(vt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=Kf(p,g,e,t,i),_=Kf(x,m,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=d&&y&&y.z<=_;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ls(a,u,l,h,c,f,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ls(a,u,l,h,c,f,y.x,y.y)&&vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=d;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Ls(a,u,l,h,c,f,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Ls(a,u,l,h,c,f,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function mC(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Kc(r,s)&&Tx(r,i,i.next,s)&&Ca(r,s)&&Ca(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),ba(i),ba(i.next),i=n=s),i=i.next}while(i!==n);return Jr(i)}function gC(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wC(o,a)){let l=wx(o,a);o=Jr(o,o.next),l=Jr(l,l.next),Ra(o,e,t,i,r,s,0),Ra(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function _C(n,e,t,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Ex(n,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(TC(c));for(r.sort(vC),s=0;s<r.length;s++)t=xC(r[s],t);return t}function vC(n,e){return n.x-e.x}function xC(n,e){const t=yC(n,e);if(!t)return e;const i=wx(t,n);return Jr(i,i.next),Jr(t,t.next)}function yC(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Ls(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Ca(t,n)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&SC(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function SC(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function MC(n,e,t,i){let r=n;do r.z===0&&(r.z=Kf(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,EC(r)}function EC(n){let e,t,i,r,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(o>1);return n}function Kf(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function TC(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ls(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function wC(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!AC(n,e)&&(Ca(n,e)&&Ca(e,n)&&RC(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||Kc(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Kc(n,e){return n.x===e.x&&n.y===e.y}function Tx(n,e,t,i){const r=Dl(vt(n,e,t)),s=Dl(vt(n,e,i)),o=Dl(vt(t,i,n)),a=Dl(vt(t,i,e));return!!(r!==s&&o!==a||r===0&&Nl(n,t,e)||s===0&&Nl(n,i,e)||o===0&&Nl(t,n,i)||a===0&&Nl(t,e,i))}function Nl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Dl(n){return n>0?1:n<0?-1:0}function AC(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Tx(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ca(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function RC(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wx(n,e){const t=new Zf(n.i,n.x,n.y),i=new Zf(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function e_(n,e,t,i){const r=new Zf(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ba(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zf(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function CC(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class ra{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ra.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];t_(e),n_(i,e);let o=e.length;t.forEach(t_);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,n_(i,t[l]);const a=fC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function t_(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function n_(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class fp extends mn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/r,p=new P,g=new _e;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<r;x++){const m=x*(i+1);for(let d=0;d<i;d++){const _=d+m,v=_,y=_+i+1,C=_+i+2,R=_+1;a.push(v,y,R),a.push(y,C,R)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dp extends mn{constructor(e=new Mx([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(s,3)),this.setAttribute("uv",new kt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let p=f.shape;const g=f.holes;ra.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const _=g[m];ra.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=ra.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const _=g[m];p=p.concat(_)}for(let m=0,d=p.length;m<d;m++){const _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let m=0,d=x.length;m<d;m++){const _=x[m],v=_[0]+h,y=_[1]+h,C=_[2]+h;i.push(v,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return bC(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new dp(i,e.curveSegments)}}function bC(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class pp extends ui{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pi extends pp{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ul(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function PC(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function LC(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function i_(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Ax(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Ba{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class IC extends Ba{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hm,endingEnd:Hm}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vm:s=e,a=2*t-i;break;case Gm:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vm:o=e,l=2*i-t;break;case Gm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let C=0;C!==a;++C)s[C]=d*o[u+C]+_*o[c+C]+v*o[l+C]+y*o[h+C];return s}}class NC extends Ba{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class DC extends Ba{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ul(t,this.TimeBufferType),this.values=Ul(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ul(e.times,Array),values:Ul(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new DC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new NC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new IC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case wa:t=this.InterpolantFactoryMethodLinear;break;case Au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&PC(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Au,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,f=h-i,p=h+i;for(let g=0;g!==i;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=wa;class ho extends mi{constructor(e,t,i){super(e,t,i)}}ho.prototype.ValueTypeName="bool";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=Ta;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class Rx extends mi{}Rx.prototype.ValueTypeName="color";class io extends mi{}io.prototype.ValueTypeName="number";class UC extends Ba{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)hi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ro extends mi{InterpolantFactoryMethodLinear(e){return new UC(this.times,this.values,this.getValueSize(),e)}}ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;class fo extends mi{constructor(e,t,i){super(e,t,i)}}fo.prototype.ValueTypeName="string";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=Ta;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class so extends mi{}so.prototype.ValueTypeName="vector";class FC{constructor(e="",t=-1,i=[],r=tE){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(kC(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(mi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=LC(l);l=i_(l,1,u),c=i_(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new io(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,p,g,x){if(p.length!==0){const m=[],d=[];Ax(p,m,d,g),m.length!==0&&x.push(new h(f,m,d))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)p[f[g].morphTargets[x]]=-1;for(const x in p){const m=[],d=[];for(let _=0;_!==f[g].morphTargets.length;++_){const v=f[g];m.push(v.time),d.push(v.morphTarget===x?1:0)}r.push(new io(".morphTargetInfluence["+x+"]",m,d))}l=p.length*o}else{const p=".bones["+t[h].name+"]";i(so,p+".position",f,"pos",r),i(ro,p+".quaternion",f,"rot",r),i(so,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function OC(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return io;case"vector":case"vector2":case"vector3":case"vector4":return so;case"color":return Rx;case"quaternion":return ro;case"bool":case"boolean":return ho;case"string":return fo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function kC(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=OC(n.type);if(n.times===void 0){const t=[],i=[];Ax(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ar={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class BC{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const zC=new BC;class po{constructor(e){this.manager=e!==void 0?e:zC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class HC extends Error{constructor(e,t){super(e),this.response=t}}class Cx extends po{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ar.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:i,onError:r});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ei[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let x=0;const m=new ReadableStream({start(d){_();function _(){h.read().then(({done:v,value:y})=>{if(v)d.close();else{x+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let R=0,w=u.length;R<w;R++){const b=u[R];b.onProgress&&b.onProgress(C)}d.enqueue(y),_()}},v=>{d.error(v)})}}});return new Response(m)}else throw new HC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ar.add(e,c);const u=Ei[e];delete Ei[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class VC extends po{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ar.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Aa("img");function l(){u(),ar.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class GC extends po{constructor(e){super(e)}load(e,t,i,r){const s=new Pt,o=new VC(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Zc extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class WC extends Zc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const oh=new Ie,r_=new P,s_=new P;class mp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ip,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;r_.setFromMatrixPosition(e.matrixWorld),t.position.copy(r_),s_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s_),t.updateMatrixWorld(),oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XC extends mp{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=to*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jC extends Zc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new XC}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const o_=new Ie,Io=new P,ah=new P;class YC extends mp{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),i.position.copy(Io),ah.copy(i.position),ah.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ah),i.updateMatrixWorld(),r.makeTranslation(-Io.x,-Io.y,-Io.z),o_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(o_)}}class qC extends Zc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new YC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $C extends mp{constructor(){super(new rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bx extends Zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new $C}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class KC extends po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ar.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ar.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),ar.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ar.add(e,l),s.manager.itemStart(e)}}const gp="\\[\\]\\.:\\/",ZC=new RegExp("["+gp+"]","g"),_p="[^"+gp+"]",JC="[^"+gp.replace("\\.","")+"]",QC=/((?:WC+[\/:])*)/.source.replace("WC",_p),eb=/(WCOD+)?/.source.replace("WCOD",JC),tb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_p),nb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_p),ib=new RegExp("^"+QC+eb+tb+nb+"$"),rb=["material","materials","bones","map"];class sb{constructor(e,t,i){const r=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZC,"")}static parseTrackName(e){const t=ib.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);rb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=sb;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function a_(n,e){if(e===nE)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Wf||e===$0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Wf)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class ob extends po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new wb(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=sa.extractUrlBase(e);o=sa.resolveURL(c,this.path)}else o=sa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Cx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Px){try{o[He.KHR_BINARY_GLTF]=new Ab(e)}catch(h){r&&r(h);return}s=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Bb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case He.KHR_MATERIALS_UNLIT:o[h]=new cb;break;case He.KHR_DRACO_MESH_COMPRESSION:o[h]=new Rb(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[h]=new Cb;break;case He.KHR_MESH_QUANTIZATION:o[h]=new bb;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function ab(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class lb{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bx(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qC(u),c.distance=h;break;case"spot":c=new jC(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ai(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class cb{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,i){const r=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,zt))}return Promise.all(r)}}class ub{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(a,a)}return Promise.all(s)}}class fb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class db{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class pb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class mb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class gb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],sn),Promise.all(s)}}class _b{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class vb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(s)}}class xb{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class yb{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:pi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Sb{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Mb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Eb{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tb{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}}class wb{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const x=new Ie,m=new P,d=new hi,_=new P(1,1,1),v=new $R(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,y),l.SCALE&&_.fromBufferAttribute(l.SCALE,y),v.setMatrixAt(y,x.compose(m,d,_));for(const y in l)if(y==="_COLOR_0"){const C=l[y];v.instanceColor=new Yf(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);mt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Px="glTF",No=12,l_={JSON:1313821514,BIN:5130562};class Ab{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,No),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Px)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-No,s=new DataView(e,No);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===l_.JSON){const c=new Uint8Array(e,No+o,a);this.content=i.decode(c)}else if(l===l_.BIN){const c=No+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Rb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Jf[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Jf[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Hs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(p)},a,c,sn,f)})})}}class Cb{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bb{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class Lx extends Ba{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,p=f*h,g=e*c,x=g-c,m=-2*p+3*f,d=p-f,_=1-m,v=d-f+h;for(let y=0;y!==a;y++){const C=o[x+y+a],R=o[x+y+l]*u,w=o[g+y+a],b=o[g+y]*u;s[y]=_*C+v*R+m*w+d*b}return s}}const Pb=new hi;class Lb extends Lx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return Pb.fromArray(s).normalize().toArray(s),s}}const bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},c_={9728:nn,9729:Sn,9984:B0,9985:ql,9986:zo,9987:Pi},u_={33071:or,33648:Ac,10497:Js},lh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ib={CUBICSPLINE:void 0,LINEAR:wa,STEP:Ta},ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new pp({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),n.DefaultMaterial}function Lr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ai(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Db(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Ub(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fb(n){let e;const t=n.extensions&&n.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uh(t.attributes):e=n.indices+":"+uh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+uh(n.targets[i]);return e}function uh(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Qf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ob(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kb=new Ie;class Bb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ab,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new GC(this.options.manager):this.textureLoader=new KC(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Lr(s,a,r),Ai(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(sa.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=lh[r.type],a=Hs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new rn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=lh[r.type],c=Hs[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let x,m;if(p&&p!==h){const d=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let v=t.cache.get(_);v||(x=new c(a,d*p,r.count*p/u),v=new WR(x,p/u),t.cache.add(_,v)),m=new op(v,l,f%p/u,g)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),m=new rn(x,l,g);if(r.sparse!==void 0){const d=lh.SCALAR,_=Hs[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,C=new _(o[1],v,r.sparse.count*d),R=new c(o[2],y,r.sparse.count*l);a!==null&&(m=new rn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,b=C.length;w<b;w++){const T=C[w];if(m.setX(T,R[w*l]),l>=2&&m.setY(T,R[w*l+1]),l>=3&&m.setZ(T,R[w*l+2]),l>=4&&m.setW(T,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=c_[f.magFilter]||Sn,u.minFilter=c_[f.minFilter]||Pi,u.wrapS=u_[f.wrapS]||Js,u.wrapT=u_[f.wrapT]||Js,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==Sn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Pt(x);m.needsUpdate=!0,f(m)}),t.load(sa.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ai(h,o),h.userData.mimeType=o.mimeType||Ob(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _x,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new lp,ui.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return pp}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const h=r[He.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],sn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=In);const u=s.alphaMode||ch.OPAQUE;if(u===ch.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ch.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new _e(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Zn){const h=s.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],sn)}return s.emissiveTexture!==void 0&&o!==Zn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,zt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ai(h,s),t.associations.set(h,{materials:e}),s.extensions&&Lr(r,h,s),h})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return h_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Fb(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=h_(new mn,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Nb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const x=u[p],m=o[p];let d;const _=c[p];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new jR(x,_):new Ht(x,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?d.geometry=a_(d.geometry,$0):m.mode===bn.TRIANGLE_FAN&&(d.geometry=a_(d.geometry,Wf));else if(m.mode===bn.LINES)d=new KR(x,_);else if(m.mode===bn.LINE_STRIP)d=new $c(x,_);else if(m.mode===bn.LINE_LOOP)d=new gx(x,_);else if(m.mode===bn.POINTS)d=new ZR(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Ub(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),Ai(d,s),m.extensions&&Lr(r,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Lr(r,h[0],s),h[0];const f=new Jn;s.extensions&&Lr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new en(bE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new rp(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ai(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ie;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ap(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const p=r.channels[h],g=r.samplers[p.sampler],x=p.target,m=x.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],g=h[2],x=h[3],m=h[4],d=[];for(let _=0,v=f.length;_<v;_++){const y=f[_],C=p[_],R=g[_],w=x[_],b=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=i._createAnimationTracks(y,C,R,w,b);if(T)for(let M=0;M<T.length;M++)d.push(T[M])}return new FC(s,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,kb)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new px:c.length>1?u=new Jn:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ai(u,s),s.extensions&&Lr(i,u,s),s.matrix!==void 0){const h=new Ie;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Jn;i.name&&(s.name=r.createUniqueName(i.name)),Ai(s,i),i.extensions&&Lr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof ui||f instanceof Pt)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Zi[s.path]===Zi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Zi[s.path]){case Zi.weights:c=io;break;case Zi.rotation:c=ro;break;case Zi.position:case Zi.scale:c=so;break;default:switch(i.itemSize){case 1:c=io;break;case 2:case 3:default:c=so;break}break}const u=r.interpolation!==void 0?Ib[r.interpolation]:wa,h=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+Zi[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Qf(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ro?Lb:Lx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zb(n,e,t){const i=e.attributes,r=new Hi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Qf(Hs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const x=Qf(Hs[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new fi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function h_(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Jf[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ge.workingColorSpace!==sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Ai(n,e),zb(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Db(n,e.targets,t):n})}const f_={fits:3116899,conflict:13838108,possibly_fits:13208082,not_verified:11443338};async function Hb(n){return(await new ob().loadAsync(n)).scene}function hh(n,e,t=!0){const i=n.map(o=>new P(o.x,.006,o.z)),r=new mn().setFromPoints(i),s=new lp({color:e});return t?new gx(r,s):new $c(r,s)}function Vb(n,e){const t=new Mx,i=n.width/2+.015,r=n.depth/2+.015;t.moveTo(-i,-r).lineTo(i,-r).lineTo(i,r).lineTo(-i,r).lineTo(-i,-r);const s=new $f,o=.02;s.moveTo(-i+o,-r+o).lineTo(-i+o,r-o).lineTo(i-o,r-o).lineTo(i-o,-r+o),t.holes.push(s);const a=new Ht(new dp(t),new Zn({color:e,side:In}));return a.rotation.x=-Math.PI/2,a.position.y=.004,a}class Gb{constructor(e,t=16777215){ze(this,"root",new Jn);ze(this,"product",new Jn);ze(this,"footprint",null);ze(this,"meshes",[]);ze(this,"roomLines",new Jn);ze(this,"marks",new Jn);ze(this,"status","not_verified");this.scene=e,this.lineColour=t,e.add(this.root),this.root.add(this.product,this.roomLines,this.marks),this.product.visible=!1}setModel(e,t){this.product.clear(),this.product.add(e),this.meshes=[],e.traverse(i=>{const r=i;r.isMesh&&(r.castShadow=!0,r.material=r.material.clone(),this.meshes.push(r))}),this.footprint=Vb(t,f_.not_verified),this.product.add(this.footprint),this.applyStatus()}addContactShadow(e){const t=document.createElement("canvas");t.width=t.height=128;const i=t.getContext("2d");if(!i)return;const r=i.createRadialGradient(64,64,20,64,64,64);r.addColorStop(0,"rgba(0,0,0,0.55)"),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,128,128);const s=new Ht(new ka(e.width*1.25,e.depth*1.35),new Zn({map:new JR(t),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.004,this.product.add(s)}setPose(e){this.product.visible=e!==null,e&&(this.product.position.set(e.x,0,e.z),this.product.rotation.y=e.yaw)}setStatus(e){e!==this.status&&(this.status=e,this.applyStatus())}applyStatus(){const e=this.status==="conflict";for(const t of this.meshes){const i=t.material;i.emissive&&(i.emissive.set(e?13838108:0),i.emissiveIntensity=e?.55:0)}this.footprint&&this.footprint.material.color.set(f_[this.status])}setRoom(e){this.roomLines.clear(),e.boundary&&this.roomLines.add(hh(e.boundary,this.lineColour));for(const t of e.obstacles)this.roomLines.add(hh(t.polygon,13838108))}setMarks(e){this.marks.clear(),e.length>1&&this.marks.add(hh(e,16777215,!1));for(const t of e){const i=new Ht(new hp(.03,20),new Zn({color:16777215,side:In}));i.rotation.x=-Math.PI/2,i.position.set(t.x,.006,t.z),this.marks.add(i)}}}function Wb(n){n.add(new WC(16777215,9077112,1.6));const e=new bx(16777215,1.6);e.position.set(1.5,3.5,2),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),Object.assign(e.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.1,far:12}),n.add(e)}function Ix(n){const e=[...n].sort((r,s)=>r.x-s.x||r.z-s.z),t=(r,s,o)=>(s.x-r.x)*(o.z-r.z)-(s.z-r.z)*(o.x-r.x),i=r=>{const s=[];for(const o of r){for(;s.length>=2&&t(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}return s.pop(),s};return[...i(e),...i([...e].reverse())]}const Do=.1,d_=.12,Xb=2.2,jb=1,Yb=.3,Nx=20,qb=.5,p_=.06,$b=.04;function Kb(n){return Math.abs(n.reduce((e,t,i)=>{const r=n[(i+1)%n.length];return e+t.x*r.z-r.x*t.z},0))/2}function Zb(n){let[e,t]=[n[0],n[0]];for(const s of n)for(const o of n)Math.hypot(s.x-o.x,s.z-o.z)>Math.hypot(e.x-t.x,e.z-t.z)&&([e,t]=[s,o]);const i=Math.hypot(e.x-t.x,e.z-t.z)||1,r={x:-(t.z-e.z)/i*(p_/2),z:(t.x-e.x)/i*(p_/2)};return[{x:e.x+r.x,z:e.z+r.z},{x:t.x+r.x,z:t.z+r.z},{x:t.x-r.x,z:t.z-r.z},{x:e.x-r.x,z:e.z-r.z}]}class Go{constructor(){ze(this,"cells",new Map);ze(this,"outlines",[])}setOutlines(e){this.outlines=e}add(e,t=1){if(e.y<d_||e.y>Xb)return;const i=Math.round(e.x/Do),r=Math.round(e.z/Do),s=`${i},${r}`,o=this.cells.get(s);o?(o.sightings+=t,o.height=Math.min(o.height,e.y)):this.cells.set(s,{x:i*Do,z:r*Do,height:e.y,sightings:t})}near(e,t){const i=Math.hypot(e.width,e.depth)/2+Yb,r=Math.max(e.height,jb),s=[];for(const{x:o,z:a,height:l,sightings:c}of this.cells.values()){if(c<Nx||l>r||Math.hypot(o-t.x,a-t.z)>i)continue;const u=Do/2;s.push({id:`${of}${o},${a}`,label:"Seen by the camera",polygon:[{x:o-u,z:a-u},{x:o+u,z:a-u},{x:o+u,z:a+u},{x:o-u,z:a+u}],confirmed:!0})}return this.outlines.forEach((o,a)=>{const l=this.solidOutline(o,r);l&&s.push({id:`${of}surface${a}`,label:"Seen by the camera",polygon:l,confirmed:!0})}),s}solidOutline(e,t){const i=e.map(l=>l.y),[r,s]=[Math.min(...i),Math.max(...i)];if(!e.length||s<d_||r>t)return null;const o=e.map(({x:l,z:c})=>({x:l,z:c}));if(s-r>=qb)return Zb(o);const a=Ix(o);return Kb(a)>=$b?a:null}clear(){this.cells.clear(),this.outlines=[]}}const Jb=[[.25,0],[-.25,0],[0,.35],[0,-.35],[.25,.3],[-.25,.3],[.25,-.3],[-.25,-.3]],Qb=15,eP=8;class tP{constructor(e,t,i){ze(this,"renderer",null);ze(this,"session",null);ze(this,"refSpace",null);ze(this,"hitSource",null);ze(this,"scanSources",[]);ze(this,"anchor",null);ze(this,"rootSet",!1);ze(this,"scene",new GR);ze(this,"camera",new en);ze(this,"fitScene",new Gb(this.scene));ze(this,"reticle",nP());ze(this,"lastHit",null);ze(this,"fingers",new Map);ze(this,"twist",null);ze(this,"frames",0);ze(this,"currentFrame",null);this.model=e,this.overlay=t,this.events=i,Wb(this.scene),this.reticle.visible=!1,this.scene.add(this.reticle)}async start(e){var a,l;const t={requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","anchors"],domOverlay:{root:this.overlay}},i=navigator.xr,r=await i.requestSession("immersive-ar",{...t,optionalFeatures:[...t.optionalFeatures,"plane-detection","mesh-detection"]}).catch(()=>i.requestSession("immersive-ar",t));this.session=r,r.addEventListener("end",()=>this.cleanup()),this.overlay.style.display="",this.overlay.style.visibility="";const s=new VR({alpha:!0,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(window.innerWidth,window.innerHeight),s.xr.enabled=!0,(a=this.overlay.parentElement)==null||a.appendChild(s.domElement),this.renderer=s,s.xr.setReferenceSpaceType("local"),await s.xr.setSession(r),this.refSpace=await r.requestReferenceSpace("local");const o=await r.requestReferenceSpace("viewer");if(this.hitSource=await((l=r.requestHitTestSource)==null?void 0:l.call(r,{space:o}))??null,!this.hitSource)throw new Error("This browser did not provide surface detection.");await this.startScanning(r,o),this.fitScene.setModel(await Hb(e),this.model.item),this.fitScene.addContactShadow(this.model.item),this.attachTouch(),s.setAnimationLoop((c,u)=>u&&this.onFrame(u))}end(){var e;(e=this.session)==null||e.end()}place(e=this.currentFrame){!e||!this.lastHit||(this.rootSet||this.setRoot(e,this.lastHit),this.updateAim(),this.model.place()&&this.sync())}mark(){!this.currentFrame||!this.lastHit||(this.rootSet||this.setRoot(this.currentFrame,this.lastHit),this.updateAim(),this.model.addMark(),this.sync())}setRoot(e,t){var r,s;this.rootSet=!0,this.fitScene.root.position.copy(t),this.fitScene.root.quaternion.identity(),this.fitScene.root.updateMatrixWorld(!0);const i=(r=e.createAnchor)==null?void 0:r.bind(e);!i||!this.refSpace||(s=i(new XRRigidTransform({x:t.x,y:t.y,z:t.z}),this.refSpace))==null||s.then(o=>{this.anchor=o},()=>{this.anchor=null})}onFrame(e){var o;this.currentFrame=e;const t=this.refSpace,i=e.getViewerPose(t),r=i?i.emulatedPosition?"limited":"good":"lost";if(this.events.onTracking(r),this.model.setTracked(r==="good"),this.anchor&&((o=e.trackedAnchors)!=null&&o.has(this.anchor))){const a=e.getPose(this.anchor.anchorSpace,t);a&&(this.fitScene.root.matrixAutoUpdate=!1,this.fitScene.root.matrix.fromArray(a.transform.matrix),this.fitScene.root.matrixWorldNeedsUpdate=!0)}r==="good"&&this.scan(e,t);const s=this.upwardHit(e,t);this.lastHit=s,this.updateAim(),this.sync(),this.renderer.render(this.scene,this.camera)}async startScanning(e,t){for(const[i,r]of Jb)try{const s=new hi().setFromEuler(new ni(r,i,0)),o=t.getOffsetReferenceSpace(new XRRigidTransform({},{x:s.x,y:s.y,z:s.z,w:s.w})),a=await this.sourceFor(e,o,["plane","point"]).catch(()=>this.sourceFor(e,o,["plane"]));a&&this.scanSources.push(a)}catch{}}async sourceFor(e,t,i){var r;return(r=e.requestHitTestSource)==null?void 0:r.call(e,{space:t,entityTypes:i})}scan(e,t){if(this.rootSet){++this.frames%Qb===0&&this.readSurfaces(e,t);for(const i of[this.hitSource,...this.scanSources])for(const r of e.getHitTestResults(i)){const s=r.getPose(t);if(!s)continue;const o=s.transform.position,a=this.toSceneFrame(new P(o.x,o.y,o.z));this.model.surfaces.add({x:a.x,y:a.y,z:a.z})}}}readSurfaces(e,t){const i=(s,o)=>{const a=this.toSceneFrame(new P(s.x,s.y,s.z).applyMatrix4(new Ie().fromArray(o.transform.matrix)));return{x:a.x,y:a.y,z:a.z}},r=[];for(const s of e.detectedPlanes??[]){const o=e.getPose(s.planeSpace,t);o&&r.push(s.polygon.map(a=>i(a,o)))}this.model.surfaces.setOutlines(r);for(const s of e.detectedMeshes??[]){const o=e.getPose(s.meshSpace,t);if(o)for(let a=0;a<s.vertices.length;a+=3)this.model.surfaces.add(i({x:s.vertices[a],y:s.vertices[a+1],z:s.vertices[a+2]},o),Nx)}}upwardHit(e,t){if(!this.hitSource)return null;for(const i of e.getHitTestResults(this.hitSource)){const r=i.getPose(t);if(!r)continue;if(new P(0,1,0).applyQuaternion(new hi(r.transform.orientation.x,r.transform.orientation.y,r.transform.orientation.z,r.transform.orientation.w)).y>.9){const o=r.transform.position;return new P(o.x,o.y,o.z)}}return null}toSceneFrame(e){return this.fitScene.root.worldToLocal(e.clone())}updateAim(){const e=this.lastHit?this.rootSet?this.toSceneFrame(this.lastHit):new P:null;this.model.setAim(e?{x:e.x,y:e.y,z:e.z}:null,this.rootSet);const t=this.model.step!=="placed"&&this.lastHit!==null&&this.model.aim!==null;this.reticle.visible=t,t&&this.reticle.position.copy(this.lastHit)}sync(){const{model:e,fitScene:t}=this;t.setPose(e.pose),t.setRoom(e.room),t.setMarks(e.marks);const i=e.fit;i&&t.setStatus(i.status)}floorPoint(e,t){const i=this.renderer.xr.getCamera(),r=new P(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1,.5),s=new P().setFromMatrixPosition(i.matrixWorld),o=r.applyMatrix4(i.projectionMatrix.clone().invert()).applyMatrix4(i.matrixWorld),a=new Fa(s,o.sub(s).normalize()),l=new P(0,1,0).transformDirection(this.fitScene.root.matrixWorld),c=new er().setFromNormalAndCoplanarPoint(l,new P().setFromMatrixPosition(this.fitScene.root.matrixWorld)),u=a.intersectPlane(c,new P);if(!u||u.distanceTo(s)>eP)return null;const h=this.toSceneFrame(u);return{x:h.x,z:h.z}}attachTouch(){const e=this.overlay,t=s=>s instanceof Element&&s.closest("[data-ar-ui]")!==null,i=()=>{const[s,o]=[...this.fingers.values()];return Math.atan2(o.y-s.y,o.x-s.x)};e.addEventListener("touchstart",s=>{if(!t(s.target)){s.preventDefault();for(const o of Array.from(s.changedTouches))this.fingers.set(o.identifier,{x:o.clientX,y:o.clientY});if(this.fingers.size===1){const o=s.changedTouches[0],a=this.floorPoint(o.clientX,o.clientY);a&&this.model.startDrag(a)}else this.fingers.size===2&&(this.model.endDrag(),this.twist=i())}},{passive:!1}),e.addEventListener("touchmove",s=>{if(this.fingers.size){s.preventDefault();for(const o of Array.from(s.changedTouches))this.fingers.has(o.identifier)&&this.fingers.set(o.identifier,{x:o.clientX,y:o.clientY});if(this.fingers.size===2&&this.twist!==null){const o=i();this.model.rotate(-(o-this.twist)),this.twist=o}else if(this.fingers.size===1){const o=s.changedTouches[0],a=this.floorPoint(o.clientX,o.clientY);a&&(this.model.dragging||this.model.startDrag(a))&&this.model.drag(a)}}},{passive:!1});const r=s=>{for(const o of Array.from(s.changedTouches))this.fingers.delete(o.identifier);this.fingers.size<2&&(this.twist=null),this.fingers.size===0&&this.model.endDrag()};e.addEventListener("touchend",r),e.addEventListener("touchcancel",r),e.addEventListener("beforexrselect",s=>{t(s.target)&&s.preventDefault()})}cleanup(){var e,t,i,r,s;(e=this.hitSource)==null||e.cancel();for(const o of this.scanSources)o.cancel();(t=this.anchor)==null||t.delete(),(i=this.renderer)==null||i.setAnimationLoop(null),(r=this.renderer)==null||r.domElement.remove(),(s=this.renderer)==null||s.dispose(),this.renderer=null,this.session=null,this.events.onEnded()}}function nP(){return new Ht(new fp(.13,.16,40).rotateX(-Math.PI/2),new Zn({color:16777215}))}const m_=.03,iP=.1;class rP{constructor(e,t=()=>{}){ze(this,"step","scanning");ze(this,"aim",null);ze(this,"pose",null);ze(this,"tracked",!0);ze(this,"dragging",!1);ze(this,"room",{boundary:null,boundaryConfirmed:!1,uncertainty:m_,obstacles:[],ceilingHeight:null});ze(this,"marks",[]);ze(this,"markKind","area");ze(this,"surfaces",new Go);ze(this,"grab",{x:0,z:0});ze(this,"counter",0);this.item=e,this.changed=t}get fit(){if(!this.pose)return null;const e={...this.room,obstacles:[...this.room.obstacles,...this.surfaces.near(this.item,this.pose)]};return _M(e,this.item,this.pose,{tracked:this.tracked})}setAim(e,t){const i=e&&(!t||Math.abs(e.y)<iP)?e:null;this.aim=i,(this.step==="scanning"||this.step==="aim")&&(this.step=i?"aim":"scanning"),this.changed()}setTracked(e){e!==this.tracked&&(this.tracked=e,e||(this.dragging=!1),this.changed())}place(){var e;return!this.aim||!this.tracked?!1:(this.pose={x:this.aim.x,z:this.aim.z,yaw:((e=this.pose)==null?void 0:e.yaw)??0},this.step="placed",this.changed(),!0)}startDrag(e){return!this.pose||!this.tracked||this.step!=="placed"?!1:(this.grab={x:e.x-this.pose.x,z:e.z-this.pose.z},this.dragging=!0,!0)}drag(e){!this.dragging||!this.pose||(this.pose={...this.pose,x:e.x-this.grab.x,z:e.z-this.grab.z},this.changed())}endDrag(){this.dragging=!1}rotate(e){if(!this.pose)return;const t=2*Math.PI;this.pose={...this.pose,yaw:((this.pose.yaw+e)%t+t)%t},this.changed()}resetRotation(){this.pose&&(this.pose={...this.pose,yaw:0},this.changed())}reposition(){this.step=this.aim?"aim":"scanning",this.dragging=!1,this.changed()}remove(){this.pose=null,this.reposition()}startMarking(e){this.markKind=e,this.marks=[],this.step="marking",this.changed()}addMark(){return this.step!=="marking"||!this.aim||!this.tracked?!1:(this.marks=[...this.marks,{x:this.aim.x,z:this.aim.z}],this.changed(),!0)}undoMark(){this.marks=this.marks.slice(0,-1),this.changed()}get markLengths(){return this.marks.slice(1).map((e,t)=>Math.hypot(e.x-this.marks[t].x,e.z-this.marks[t].z))}confirmMarks(e="Obstacle"){if(this.marks.length<3)return!1;if(this.markKind==="area")this.room={...this.room,boundary:this.marks,boundaryConfirmed:!0,uncertainty:m_};else{const t={id:`o${++this.counter}`,label:e,polygon:Ix(this.marks),confirmed:!0};this.room={...this.room,obstacles:[...this.room.obstacles,t]}}return this.cancelMarks(),!0}cancelMarks(){this.marks=[],this.step=this.pose?"placed":this.aim?"aim":"scanning",this.changed()}clearRoom(){this.room={...this.room,boundary:null,boundaryConfirmed:!1,obstacles:[]},this.surfaces.clear(),this.changed()}}const g_=Math.PI/12;function sP(n){return n.name==="NotAllowedError"?"The camera was not allowed. Allow it in your browser settings, then try again.":"The camera session could not start. Close this page and try again."}function oP({product:n,model:e,onExit:t,onUnsupported:i}){const r=Dt.useRef(null),[,s]=Dt.useReducer(w=>w+1,0),o=Dt.useMemo(()=>new rP(EM(n),s),[n]),a=Dt.useRef(null),l=Dt.useRef(0),c=Dt.useRef(t);c.current=t;const u=Dt.useRef(i);u.current=i;const[h,f]=Dt.useState("good"),[p,g]=Dt.useState(null),[x,m]=Dt.useState(!1);Dt.useEffect(()=>(document.documentElement.classList.add("in-ar"),()=>document.documentElement.classList.remove("in-ar")),[]),Dt.useEffect(()=>{if(window.clearTimeout(l.current),!a.current){const w=new tP(o,r.current,{onChange:s,onTracking:f,onEnded:()=>c.current(),onError:g});a.current=w,w.start(e.glbUrl).catch(b=>b.name==="NotSupportedError"?u.current():g(sP(b)))}return()=>{l.current=window.setTimeout(()=>{var w;return(w=a.current)==null?void 0:w.end()})}},[o,e.glbUrl]);const{step:d,fit:_,marks:v,markLengths:y,markKind:C}=o,R=h!=="good"?"Tracking lost. Move the phone slowly and point it at the floor.":d==="scanning"?"Point the phone at the floor and move it slowly.":d==="aim"?"Floor found. Aim the ring and tap Place.":d==="marking"?`Walk to each corner, aim the ring and tap Add point. ${v.length} added.`:"Drag with one finger to move it. Twist with two fingers to turn it.";return Ae.jsx("div",{className:"live-ar",children:P0.createPortal(Ae.jsxs("div",{className:"ar-overlay",ref:r,children:[Ae.jsxs("div",{className:"ar-top","data-ar-ui":!0,children:[Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>{var w;return p?t():(w=a.current)==null?void 0:w.end()},children:"Close"}),Ae.jsxs("div",{children:[Ae.jsx("strong",{children:n.name}),Ae.jsx("span",{children:MM(n)})]})]}),Ae.jsx("p",{className:"ar-guide","aria-live":"polite",children:p??R}),Ae.jsxs("div",{className:"ar-bottom",children:[_&&d!=="marking"&&Ae.jsx(SM,{result:_,name:n.categoryLabel.toLowerCase()}),(d==="aim"||d==="scanning")&&Ae.jsx("button",{type:"button","data-ar-ui":!0,className:"button primary",disabled:d!=="aim"||h!=="good",onClick:()=>{var w;return(w=a.current)==null?void 0:w.place()},children:"Place here"}),d==="marking"&&Ae.jsxs(Ae.Fragment,{children:[y.length>0&&Ae.jsxs("p",{className:"ar-lengths",children:["Sides so far: ",y.map(w=>`${Math.round(w*100)} cm`).join(", "),". Check these with a tape measure."]}),Ae.jsxs("div",{className:"ar-row","data-ar-ui":!0,children:[Ae.jsx("button",{type:"button",className:"button primary",disabled:h!=="good",onClick:()=>{var w;return(w=a.current)==null?void 0:w.mark()},children:"Add point"}),Ae.jsx("button",{type:"button",className:"ar-button",disabled:!v.length,onClick:()=>o.undoMark(),children:"Undo"}),Ae.jsxs("button",{type:"button",className:"ar-button",disabled:v.length<3,onClick:()=>o.confirmMarks("Obstacle"),children:["Confirm ",C==="area"?"area":"obstacle"]}),Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>o.cancelMarks(),children:"Cancel"})]})]}),d==="placed"&&Ae.jsxs(Ae.Fragment,{children:[Ae.jsx("div",{className:"ar-row","data-ar-ui":!0,children:Ae.jsx("button",{type:"button",className:"ar-button","aria-expanded":x,onClick:()=>m(!x),children:"More"})}),x&&Ae.jsxs("div",{className:"ar-row","data-ar-ui":!0,children:[Ae.jsx("button",{type:"button",className:"ar-button","aria-label":"Turn left 15 degrees",onClick:()=>o.rotate(g_),children:"Turn left"}),Ae.jsx("button",{type:"button",className:"ar-button","aria-label":"Turn right 15 degrees",onClick:()=>o.rotate(-g_),children:"Turn right"}),Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>o.reposition(),children:"Reposition"}),Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>o.startMarking("area"),children:"Measure free space"}),Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>o.startMarking("obstacle"),children:"Mark obstacle"}),Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>o.resetRotation(),children:"Reset rotation"}),Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>o.clearRoom(),children:"Clear measurements"}),Ae.jsx("button",{type:"button",className:"ar-button",onClick:()=>o.remove(),children:"Remove"})]})]})]})]}),document.body)})}const __={id:"sofa-02",name:"Tufted leather sofa",category:"sofa",categoryLabel:"Sofa",description:"",material:"Leather",colour:null,image:null,widthCm:180.7,depthCm:81.8,heightCm:70.9,provenance:null,placement:{type:"floor",clearance_cm:null,clearance_note:null},hasModel:!0},aP={glbUrl:"./sofa-02.glb",usdzUrl:null,bytes:null,licence:"CC0-1.0",attribution:null,note:""},lP="https://appclip.needle.tools/ar?url=",At={sightings:0,mesh:0,highest:0,planes:0,planeHeights:"",sources:0,failed:"",features:""};function cP(){const n=Go.prototype.add;Go.prototype.add=function(r,s){return s?At.mesh++:At.sightings++,At.highest=Math.max(At.highest,r.y),n.call(this,r,s)};const e=Go.prototype.setOutlines;Go.prototype.setOutlines=function(r){return At.planes=r.length,At.planeHeights=r.map(s=>Math.max(...s.map(o=>o.y)).toFixed(2)).sort().slice(0,12).join(" "),e.call(this,r)};const t=navigator.xr,i=t.requestSession.bind(t);t.requestSession=async(...r)=>{var a;const s=await i(...r);At.features=[...s.enabledFeatures??[]].join(", ")||"not reported";const o=(a=s.requestHitTestSource)==null?void 0:a.bind(s);return o&&(s.requestHitTestSource=l=>{try{const c=o(l);return c.then(()=>At.sources++,u=>{At.failed=`ray: ${u}`}),c}catch(c){throw At.failed=`ray: ${c}`,c}}),s}}function uP(){return Dt.useEffect(()=>{const n=s=>{At.failed=s.slice(0,160)},e=s=>n(s.message),t=s=>n(String(s.reason));window.addEventListener("error",e),window.addEventListener("unhandledrejection",t);const i=document.createElement("pre");i.style.cssText="position:absolute;left:12px;right:12px;bottom:4px;margin:0;font-size:11px;white-space:pre-wrap;color:#fff;text-shadow:0 1px 2px #000;pointer-events:none";const r=window.setInterval(()=>{var s;(s=document.querySelector(".ar-overlay"))==null||s.appendChild(i),i.textContent=`Features: ${At.features}
Hit sources: ${At.sources}${At.failed?`
Problem: ${At.failed}`:""}
Ray hits: ${At.sightings}, mesh points: ${At.mesh}, highest ${At.highest.toFixed(2)} m
Planes: ${At.planes} at ${At.planeHeights}`},500);return()=>{window.clearInterval(r),window.removeEventListener("error",e),window.removeEventListener("unhandledrejection",t),i.remove()}},[]),null}function hP(){const[n,e]=Dt.useState("checking"),[t,i]=Dt.useState(!1);return Dt.useEffect(()=>{(async()=>{var r;return(r=navigator.xr)==null?void 0:r.isSessionSupported("immersive-ar")})().catch(()=>!1).then(r=>{r&&cP(),e(r?"ready":uM(navigator)?"clip":"none")})},[]),t?Ae.jsxs(Ae.Fragment,{children:[Ae.jsx(oP,{product:__,model:aP,onExit:()=>i(!1),onUnsupported:()=>{i(!1),e("none")}}),Ae.jsx(uP,{})]}):Ae.jsxs("main",{className:"try-page",style:{padding:20},children:[Ae.jsx("h1",{children:"Home Fit AR test"}),Ae.jsxs("p",{children:["A test of a real-size ",__.name.toLowerCase()," in your room. Camera video stays on your phone."]}),n==="ready"&&Ae.jsx("button",{type:"button",className:"button primary",onClick:()=>i(!0),children:"Start AR"}),n==="clip"&&Ae.jsx("a",{className:"button primary",href:lP+window.location.origin+window.location.pathname,children:"Open in AR"}),n==="none"&&Ae.jsx("p",{className:"notice",children:"This phone cannot run this test. It needs an iPhone in Safari or an Android phone with ARCore."}),Ae.jsx("p",{className:"muted",children:"Model: Sofa 02 by Kirill Sannikov, Poly Haven. CC0 1.0."})]})}L0(document.getElementById("root")).render(Ae.jsx(hP,{}));
