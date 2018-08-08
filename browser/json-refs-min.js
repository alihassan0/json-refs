!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).JsonRefs=e()}}(function(){return function e(r,t,n){function o(s,a){if(!t[s]){if(!r[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=t[s]={exports:{}};r[s][0].call(f.exports,function(e){var t=r[s][1][e];return o(t||e)},f,f.exports,e,r,t,n)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,r,t){(function(t,n){"use strict";function o(e,r){function t(e){N.forOwn(e,function(e,r){n[r]=e})}var n={};return t(z.parse(e||"")),t(z.parse(r||"")),0===Object.keys(n).length?void 0:z.stringify(n)}function i(e,r){N.isString(e)&&(e=H(e)),N.isString(r)&&(r=H(r));var t,n,i=m(N.isUndefined(r)?"":r);return M.indexOf(i.reference)>-1?n=i:(t=N.isUndefined(e)?void 0:m(e),N.isUndefined(t)?n=i:((n=t).path=H(F.join(t.path,i.path)),n.query=o(t.query,i.query))),n.fragment=void 0,(-1===M.indexOf(n.reference)&&0===n.path.indexOf("../")?"../":"")+L.serialize(n)}function s(e,r){var t,n=[];return r.length>0&&(t=e,r.slice(0,r.length-1).forEach(function(e){e in t&&(t=t[e],n.push(t))})),n}function a(e){return J.indexOf(l(e))>-1}function c(e){return N.isUndefined(e.error)&&"invalid"!==e.type}function u(e,r){var t=e;return r.forEach(function(e){if(!(e in t))throw Error("JSON Pointer points to missing location: "+I(r));t=t[e]}),t}function f(e){return Object.keys(e).filter(function(e){return"$ref"!==e})}function l(e){var r;switch(e.uriDetails.reference){case"absolute":case"uri":r="remote";break;case"same-document":r="local";break;default:r=e.uriDetails.reference}return r}function p(e,r){var t=k[e],n=Promise.resolve(),o=N.cloneDeep(r.loaderOptions||{});return N.isUndefined(t)?(N.isUndefined(o.processContent)&&(o.processContent=function(e,r){r(void 0,JSON.parse(e.text))}),n=(n=q.load(decodeURI(e),o)).then(function(r){return k[e]={value:r},r}).catch(function(r){throw k[e]={error:r},r})):n=n.then(function(){if(N.isError(t.error))throw t.error;return t.value}),n=n.then(function(e){return N.cloneDeep(e)})}function h(e,r){var t=!0;try{if(!N.isPlainObject(e))throw new Error("obj is not an Object");if(!N.isString(e.$ref))throw new Error("obj.$ref is not a String")}catch(e){if(r)throw e;t=!1}return t}function d(e){return-1!==e.indexOf("://")||F.isAbsolute(e)?e:F.resolve(t.cwd(),e)}function v(e){var r,t;return N.isArray(e.filter)||N.isString(e.filter)?(t=N.isString(e.filter)?[e.filter]:e.filter,r=function(e){return t.indexOf(e.type)>-1||t.indexOf(l(e))>-1}):N.isFunction(e.filter)?r=e.filter:N.isUndefined(e.filter)&&(r=function(){return!0}),function(t,n){return("invalid"!==t.type||!0===e.includeInvalid)&&r(t,n)}}function g(e){var r;return N.isArray(e.subDocPath)?r=e.subDocPath:N.isString(e.subDocPath)?r=T(e.subDocPath):N.isUndefined(e.subDocPath)&&(r=[]),r}function y(e,r){e.error=r.message,e.missing=!0}function m(e){return L.parse(e)}function w(e,r,t){var n,o,s=Promise.resolve(),u=I(r.subDocPath),f=d(r.location),l=F.dirname(r.location),h=f+u;return N.isUndefined(t.docs[f])&&(t.docs[f]=e),N.isUndefined(t.deps[h])&&(t.deps[h]={},n=x(e,r),N.forOwn(n,function(n,f){var v=d(r.location)+f,g=n.refdId=decodeURI(d(a(n)?i(l,n.uri):r.location)+"#"+(n.uri.indexOf("#")>-1?n.uri.split("#")[1]:""));t.refs[v]=n,c(n)&&(n.fqURI=g,t.deps[h][f===u?"#":f.replace(u+"/","#/")]=g,0!==v.indexOf(g+"/")?((o=N.cloneDeep(r)).subDocPath=N.isUndefined(n.uriDetails.fragment)?[]:T(decodeURI(n.uriDetails.fragment)),a(n)?(delete o.filter,o.location=g.split("#")[0],s=s.then(function(e,r){return function(){var t=d(r.location),n=e.docs[t];return N.isUndefined(n)?p(t,r).catch(function(r){return e.docs[t]=r,r}):Promise.resolve().then(function(){return n})}}(t,o))):s=s.then(function(){return e}),s=s.then(function(e,r,t){return function(n){if(N.isError(n))y(t,n);else try{return w(n,r,e).catch(function(e){y(t,e)})}catch(e){y(t,e)}}}(t,o,n))):n.circular=!0)})),s}function b(e,r,t){u(e,r.slice(0,r.length-1))[r[r.length-1]]=t}function E(e,r,t,n){function o(r,o){t.push(o),E(e,r,t,n),t.pop()}var i=!0;N.isFunction(n)&&(i=n(e,r,t)),-1===e.indexOf(r)&&(e.push(r),!1!==i&&(N.isArray(r)?r.forEach(function(e,r){o(e,r.toString())}):N.isObject(r)&&N.forOwn(r,function(e,r){o(e,r)})),e.pop())}function O(e,r){var t,n;if(e=N.isUndefined(e)?{}:N.cloneDeep(e),!N.isObject(e))throw new TypeError("options must be an Object");if(!N.isUndefined(e.resolveCirculars)&&!N.isBoolean(e.resolveCirculars))throw new TypeError("options.resolveCirculars must be a Boolean");if(!(N.isUndefined(e.filter)||N.isArray(e.filter)||N.isFunction(e.filter)||N.isString(e.filter)))throw new TypeError("options.filter must be an Array, a Function of a String");if(!N.isUndefined(e.includeInvalid)&&!N.isBoolean(e.includeInvalid))throw new TypeError("options.includeInvalid must be a Boolean");if(!N.isUndefined(e.location)&&!N.isString(e.location))throw new TypeError("options.location must be a String");if(!N.isUndefined(e.refPreProcessor)&&!N.isFunction(e.refPreProcessor))throw new TypeError("options.refPreProcessor must be a Function");if(!N.isUndefined(e.refPostProcessor)&&!N.isFunction(e.refPostProcessor))throw new TypeError("options.refPostProcessor must be a Function");if(!N.isUndefined(e.subDocPath)&&!N.isArray(e.subDocPath)&&!A(e.subDocPath))throw new TypeError("options.subDocPath must be an Array of path segments or a valid JSON Pointer");if(N.isUndefined(e.resolveCirculars)&&(e.resolveCirculars=!1),e.filter=v(e),N.isUndefined(e.location)&&(e.location=d("./root.json")),(t=e.location.split("#")).length>1&&(e.subDocPath="#"+t[1]),n=decodeURI(e.location)===e.location,e.location=i(e.location,void 0),n&&(e.location=decodeURI(e.location)),e.subDocPath=g(e),!N.isUndefined(r))try{u(r,e.subDocPath)}catch(e){throw e.message=e.message.replace("JSON Pointer","options.subDocPath"),e}return e}function C(e){if(!N.isArray(e))throw new TypeError("path must be an array");return e.map(function(e){return N.isString(e)||(e=JSON.stringify(e)),e.replace(/~1/g,"/").replace(/~0/g,"~")})}function P(e){if(!N.isArray(e))throw new TypeError("path must be an array");return e.map(function(e){return N.isString(e)||(e=JSON.stringify(e)),e.replace(/~/g,"~0").replace(/\//g,"~1")})}function x(e,r){var t={};if(!N.isArray(e)&&!N.isObject(e))throw new TypeError("obj must be an Array or an Object");return r=O(r,e),E(s(e,r.subDocPath),u(e,r.subDocPath),N.cloneDeep(r.subDocPath),function(e,n,o){var i,s,a=!0;return h(n)&&(N.isUndefined(r.refPreProcessor)||(n=r.refPreProcessor(N.cloneDeep(n),o)),i=D(n),N.isUndefined(r.refPostProcessor)||(i=r.refPostProcessor(i,o)),r.filter(i,o)&&(s=I(o),t[s]=i),f(n).length>0&&(a=!1)),a}),t}function S(e,r){var t=Promise.resolve();return t=t.then(function(){if(!N.isString(e))throw new TypeError("location must be a string");return N.isUndefined(r)&&(r={}),N.isObject(r)&&(r.location=e),r=O(r),p(r.location,r)}).then(function(e){var t=N.cloneDeep(k[r.location]),n=N.cloneDeep(r),o=m(r.location);return N.isUndefined(t.refs)&&(delete n.filter,delete n.subDocPath,n.includeInvalid=!0,k[r.location].refs=x(e,n)),N.isUndefined(r.filter)||(n.filter=r.filter),N.isUndefined(o.fragment)?N.isUndefined(o.subDocPath)||(n.subDocPath=r.subDocPath):n.subDocPath=T(decodeURI(o.fragment)),{refs:x(e,n),value:e}})}function D(e){var r,t,n,o={def:e};try{if(h(e,!0)){if(r=e.$ref,n=Z[r],N.isUndefined(n)&&(n=Z[r]=m(r)),o.uri=r,o.uriDetails=n,N.isUndefined(n.error)){o.type=l(o);try{["#","/"].indexOf(r[0])>-1?A(r,!0):r.indexOf("#")>-1&&A(n.fragment,!0)}catch(e){o.error=e.message,o.type="invalid"}}else o.error=o.uriDetails.error,o.type="invalid";(t=f(e)).length>0&&(o.warning="Extra JSON Reference properties will be ignored: "+t.join(", "))}else o.type="invalid"}catch(e){o.error=e.message,o.type="invalid"}return o}function A(e,r){var t,n=!0;try{if(!N.isString(e))throw new Error("ptr is not a String");if(""!==e){if(t=e.charAt(0),-1===["#","/"].indexOf(t))throw new Error("ptr must start with a / or #/");if("#"===t&&"#"!==e&&"/"!==e.charAt(1))throw new Error("ptr must start with a / or #/");if(e.match($))throw new Error("ptr has invalid token(s)")}}catch(e){if(!0===r)throw e;n=!1}return n}function U(e,r){return h(e,r)&&"invalid"!==D(e,r).type}function T(e){try{A(e,!0)}catch(e){throw new Error("ptr must be a JSON Pointer: "+e.message)}var r=e.split("/");return r.shift(),C(r)}function I(e,r){if(!N.isArray(e))throw new Error("path must be an Array");return(!1!==r?"#":"")+(e.length>0?"/":"")+P(e).join("/")}function j(e,r){var t=Promise.resolve();return t=t.then(function(){if(!N.isArray(e)&&!N.isObject(e))throw new TypeError("obj must be an Array or an Object");r=O(r,e),e=N.cloneDeep(e)}).then(function(){var t={deps:{},docs:{},refs:{}};return w(e,r,t).then(function(){return t})}).then(function(e){function t(o,i,s){var a,u=i.split("#"),f=e.refs[i];n[u[0]===r.location?"#"+u[1]:I(r.subDocPath.concat(s))]=f,!f.circular&&c(f)?(a=e.deps[f.refdId],0!==f.refdId.indexOf(o)&&Object.keys(a).forEach(function(e){t(f.refdId,f.refdId+e.substr(1),s.concat(T(e)))})):!f.circular&&f.error&&(f.error=f.error.replace("options.subDocPath","JSON Pointer"),f.error.indexOf("#")>-1&&(f.error=f.error.replace(f.uri.substr(f.uri.indexOf("#")),f.uri)),0!==f.error.indexOf("ENOENT:")&&0!==f.error.indexOf("Not Found")||(f.error="JSON Pointer points to missing location: "+f.uri))}var n={},o=[],i=[],s=new _.Graph,f=d(r.location),l=f+I(r.subDocPath),p=F.dirname(f);return Object.keys(e.deps).forEach(function(e){s.setNode(e)}),N.forOwn(e.deps,function(e,r){N.forOwn(e,function(e){s.setEdge(r,e)})}),(o=_.alg.findCycles(s)).forEach(function(e){e.forEach(function(e){-1===i.indexOf(e)&&i.push(e)})}),N.forOwn(e.deps,function(r,t){N.forOwn(r,function(r,n){var s,c=!1,u=t+n.slice(1),f=e.refs[t+n.slice(1)],l=a(f);i.indexOf(r)>-1&&o.forEach(function(e){c||(s=e.indexOf(r))>-1&&e.forEach(function(t){c||0===u.indexOf(t+"/")&&(l&&s!==e.length-1&&"#"===r[r.length-1]||(c=!0))})}),c&&(f.circular=!0)})}),N.forOwn(Object.keys(e.deps).reverse(),function(t){var n=e.deps[t],o=t.split("#"),i=e.docs[o[0]],s=T(o[1]);N.forOwn(n,function(t,n){var a=t.split("#"),c=e.docs[a[0]],f=s.concat(T(n)),l=e.refs[o[0]+I(f)];if(N.isUndefined(l.error)&&N.isUndefined(l.missing))if(!r.resolveCirculars&&l.circular)l.value=l.def;else{try{l.value=u(c,T(a[1]))}catch(e){return void y(l,e)}""===o[1]&&"#"===n?e.docs[o[0]]=l.value:b(i,f,l.value)}})}),Object.keys(e.refs).forEach(function(r){var n,o,i=e.refs[r];"invalid"!==i.type&&("#"===i.fqURI[i.fqURI.length-1]&&"#"!==i.uri[i.uri.length-1]&&(i.fqURI=i.fqURI.substr(0,i.fqURI.length-1)),n=i.fqURI.split("/"),o=i.uri.split("/"),N.times(o.length-1,function(e){var r=o[o.length-e-1],t=n.length-e-1,i=n[t];"."!==r&&".."!==r||(r=i),n[t]=r}),i.fqURI=n.join("/"),0===i.fqURI.indexOf(f)?i.fqURI=i.fqURI.replace(f,""):0===i.fqURI.indexOf(p)&&(i.fqURI=i.fqURI.replace(p,"")),"/"===i.fqURI[0]&&(i.fqURI="."+i.fqURI)),0===r.indexOf(l)&&t(l,r,T(r.substr(l.length)))}),N.forOwn(e.refs,function(e){delete e.refdId,e.missing&&(e.error=e.error.split(": ")[0]+": "+e.def.$ref)}),{refs:n,resolved:e.docs[f]}})}function R(e,r){var t=Promise.resolve();return t=t.then(function(){if(!N.isString(e))throw new TypeError("location must be a string");return N.isUndefined(r)&&(r={}),N.isObject(r)&&(r.location=e),r=O(r),p(r.location,r)}).then(function(e){var t=N.cloneDeep(r),n=m(r.location);return N.isUndefined(n.fragment)||(t.subDocPath=T(decodeURI(n.fragment))),j(e,t).then(function(r){return{refs:r.refs,resolved:r.resolved,value:e}})})}var N="undefined"!=typeof window?window._:void 0!==n?n._:null,_="undefined"!=typeof window?window.graphlib:void 0!==n?n.graphlib:null,F=e("path"),q="undefined"!=typeof window?window.PathLoader:void 0!==n?n.PathLoader:null,z=e("querystring"),H=e("slash"),L=e("uri-js"),$=/~(?:[^01]|$)/g,k={},J=["relative","remote"],M=["absolute","uri"],Z={};"undefined"==typeof Promise&&e("native-promise-only"),r.exports.clearCache=function(){k={}},r.exports.decodePath=function(e){return C(e)},r.exports.encodePath=function(e){return P(e)},r.exports.findRefs=function(e,r){return x(e,r)},r.exports.findRefsAt=function(e,r){return S(e,r)},r.exports.getRefDetails=function(e){return D(e)},r.exports.isPtr=function(e,r){return A(e,r)},r.exports.isRef=function(e,r){return U(e,r)},r.exports.pathFromPtr=function(e){return T(e)},r.exports.pathToPtr=function(e,r){return I(e,r)},r.exports.resolveRefs=function(e,r){return j(e,r)},r.exports.resolveRefsAt=function(e,r){return R(e,r)}}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:4,"native-promise-only":2,path:3,querystring:7,slash:8,"uri-js":9}],2:[function(e,r,t){(function(e){!function(e,t,n){t[e]=t[e]||n(),void 0!==r&&r.exports&&(r.exports=t[e])}("Promise",void 0!==e?e:this,function(){"use strict";function e(e,r){p.add(e,r),l||(l=d(p.drain))}function r(e){var r,t=typeof e;return null==e||"object"!=t&&"function"!=t||(r=e.then),"function"==typeof r&&r}function t(){for(var e=0;e<this.chain.length;e++)n(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function n(e,t,n){var o,i;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(i=r(o))?i.call(o,n.resolve,n.reject):n.resolve(o)}catch(e){n.reject(e)}}function o(n){var s,c=this;if(!c.triggered){c.triggered=!0,c.def&&(c=c.def);try{(s=r(n))?e(function(){var e=new a(c);try{s.call(n,function(){o.apply(e,arguments)},function(){i.apply(e,arguments)})}catch(r){i.call(e,r)}}):(c.msg=n,c.state=1,c.chain.length>0&&e(t,c))}catch(e){i.call(new a(c),e)}}}function i(r){var n=this;n.triggered||(n.triggered=!0,n.def&&(n=n.def),n.msg=r,n.state=2,n.chain.length>0&&e(t,n))}function s(e,r,t,n){for(var o=0;o<r.length;o++)!function(o){e.resolve(r[o]).then(function(e){t(o,e)},n)}(o)}function a(e){this.def=e,this.triggered=!1}function c(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function u(r){if("function"!=typeof r)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var n=new c(this);this.then=function(r,o){var i={success:"function"!=typeof r||r,failure:"function"==typeof o&&o};return i.promise=new this.constructor(function(e,r){if("function"!=typeof e||"function"!=typeof r)throw TypeError("Not a function");i.resolve=e,i.reject=r}),n.chain.push(i),0!==n.state&&e(t,n),i.promise},this.catch=function(e){return this.then(void 0,e)};try{r.call(void 0,function(e){o.call(n,e)},function(e){i.call(n,e)})}catch(e){i.call(n,e)}}var f,l,p,h=Object.prototype.toString,d="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),f=function(e,r,t,n){return Object.defineProperty(e,r,{value:t,writable:!0,configurable:!1!==n})}}catch(e){f=function(e,r,t){return e[r]=t,e}}p=function(){function e(e,r){this.fn=e,this.self=r,this.next=void 0}var r,t,n;return{add:function(o,i){n=new e(o,i),t?t.next=n:r=n,t=n,n=void 0},drain:function(){var e=r;for(r=t=l=void 0;e;)e.fn.call(e.self),e=e.next}}}();var v=f({},"constructor",u,!1);return u.prototype=v,f(v,"__NPO__",0,!1),f(u,"resolve",function(e){var r=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new r(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");r(e)})}),f(u,"reject",function(e){return new this(function(r,t){if("function"!=typeof r||"function"!=typeof t)throw TypeError("Not a function");t(e)})}),f(u,"all",function(e){var r=this;return"[object Array]"!=h.call(e)?r.reject(TypeError("Not an array")):0===e.length?r.resolve([]):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;s(r,e,function(e,r){i[e]=r,++a===o&&t(i)},n)})}),f(u,"race",function(e){var r=this;return"[object Array]"!=h.call(e)?r.reject(TypeError("Not an array")):new r(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");s(r,e,function(e,r){t(r)},n)})}),u})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,r,t){(function(e){function r(e,r){for(var t=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}function n(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var s=i>=0?arguments[i]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,o="/"===s.charAt(0))}return t=r(n(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===s(e,-1);return(e=r(n(e.split("/"),function(e){return!!e}),!o).join("/"))||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,r){function n(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}for(var u=[],c=a;c<o.length;c++)u.push("..");return(u=u.concat(i.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var r=i(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."},t.basename=function(e,r){var t=i(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t},t.extname=function(e){return i(e)[3]};var s="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)}}).call(this,e("_process"))},{_process:4}],4:[function(e,r,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(r){try{return l.call(null,e,0)}catch(r){return l.call(this,e,0)}}}function s(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(r){try{return p.call(null,e)}catch(r){return p.call(this,e)}}}function a(){g&&d&&(g=!1,d.length?v=d.concat(v):y=-1,v.length&&c())}function c(){if(!g){var e=i(a);g=!0;for(var r=v.length;r;){for(d=v,v=[];++y<r;)d&&d[y].run();y=-1,r=v.length}d=null,g=!1,s(e)}}function u(e,r){this.fun=e,this.array=r}function f(){}var l,p,h=r.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var d,v=[],g=!1,y=-1;h.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];v.push(new u(e,r)),1!==v.length||g||i(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.prependListener=f,h.prependOnceListener=f,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],5:[function(e,r,t){"use strict";function n(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.exports=function(e,r,t,i){r=r||"&",t=t||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(r);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var u=e.length;c>0&&u>c&&(u=c);for(var f=0;f<u;++f){var l,p,h,d,v=e[f].replace(a,"%20"),g=v.indexOf(t);g>=0?(l=v.substr(0,g),p=v.substr(g+1)):(l=v,p=""),h=decodeURIComponent(l),d=decodeURIComponent(p),n(s,h)?o(s[h])?s[h].push(d):s[h]=[s[h],d]:s[h]=d}return s};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],6:[function(e,r,t){"use strict";function n(e,r){if(e.map)return e.map(r);for(var t=[],n=0;n<e.length;n++)t.push(r(e[n],n));return t}var o=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.exports=function(e,r,t,a){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"==typeof e?n(s(e),function(s){var a=encodeURIComponent(o(s))+t;return i(e[s])?n(e[s],function(e){return a+encodeURIComponent(o(e))}).join(r):a+encodeURIComponent(o(e[s]))}).join(r):a?encodeURIComponent(o(a))+t+encodeURIComponent(o(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},{}],7:[function(e,r,t){"use strict";t.decode=t.parse=e("./decode"),t.encode=t.stringify=e("./encode")},{"./decode":5,"./encode":6}],8:[function(e,r,t){"use strict";r.exports=function(e){var r=/^\\\\\?\\/.test(e),t=/[^\x00-\x80]+/.test(e);return r||t?e:e.replace(/\\/g,"/")}},{}],9:[function(e,r,t){!function(e,n){n("object"==typeof t&&void 0!==r?t:e.URI=e.URI||{})}(this,function(e){"use strict";function r(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length>1){r[0]=r[0].slice(0,-1);for(var n=r.length-1,o=1;o<n;++o)r[o]=r[o].slice(1,-1);return r[n]=r[n].slice(1),r.join("")}return r[0]}function t(e){return"(?:"+e+")"}function n(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function o(e){return e.toUpperCase()}function i(e){return void 0!==e&&null!==e?e instanceof Array?e:"number"!=typeof e.length||e.split||e.setInterval||e.call?[e]:Array.prototype.slice.call(e):[]}function s(e){var n=r("[0-9]","[A-Fa-f]"),o=t(t("%[EFef]"+n+"%"+n+n+"%"+n+n)+"|"+t("%[89A-Fa-f]"+n+"%"+n+n)+"|"+t("%"+n+n)),i="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",s=r("[\\:\\/\\?\\#\\[\\]\\@]",i),a=e?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",c=e?"[\\uE000-\\uF8FF]":"[]",u=r("[A-Za-z]","[0-9]","[\\-\\.\\_\\~]",a),f=t("[A-Za-z]"+r("[A-Za-z]","[0-9]","[\\+\\-\\.]")+"*"),l=t(t(o+"|"+r(u,i,"[\\:]"))+"*"),p=t(t("25[0-5]")+"|"+t("2[0-4][0-9]")+"|"+t("1[0-9][0-9]")+"|"+t("[1-9][0-9]")+"|[0-9]"),h=t(p+"\\."+p+"\\."+p+"\\."+p),d=t(n+"{1,4}"),v=t(t(d+"\\:"+d)+"|"+h),g=t([t(t(d+"\\:")+"{6}"+v),t("\\:\\:"+t(d+"\\:")+"{5}"+v),t(t(d)+"?\\:\\:"+t(d+"\\:")+"{4}"+v),t(t(t(d+"\\:")+"{0,1}"+d)+"?\\:\\:"+t(d+"\\:")+"{3}"+v),t(t(t(d+"\\:")+"{0,2}"+d)+"?\\:\\:"+t(d+"\\:")+"{2}"+v),t(t(t(d+"\\:")+"{0,3}"+d)+"?\\:\\:"+d+"\\:"+v),t(t(t(d+"\\:")+"{0,4}"+d)+"?\\:\\:"+v),t(t(t(d+"\\:")+"{0,5}"+d)+"?\\:\\:"+d),t(t(t(d+"\\:")+"{0,6}"+d)+"?\\:\\:")].join("|")),y=t("\\["+t(g+"|"+t("[vV]"+n+"+\\."+r(u,i,"[\\:]")+"+"))+"\\]"),m=t(t(o+"|"+r(u,i))+"*"),w=t(y+"|"+h+"(?!"+m+")|"+m),b=t("[0-9]*"),E=t(t(l+"@")+"?"+w+t("\\:"+b)+"?"),O=t(o+"|"+r(u,i,"[\\:\\@]")),C=t(O+"*"),P=t(O+"+"),x=t(t(o+"|"+r(u,i,"[\\@]"))+"+"),S=t(t("\\/"+C)+"*"),D=t("\\/"+t(P+S)+"?"),A=t(x+S),U=t(P+S),T="(?!"+O+")",I=(t(S+"|"+D+"|"+A+"|"+U+"|"+T),t(t(O+"|"+r("[\\/\\?]",c))+"*")),j=t(t(O+"|[\\/\\?]")+"*"),R=t(t("\\/\\/"+E+S)+"|"+D+"|"+U+"|"+T);t(t(f+"\\:"+R+t("\\?"+I)+"?"+t("\\#"+j)+"?")+"|"+t(t(t("\\/\\/"+E+S)+"|"+D+"|"+A+"|"+T)+t("\\?"+I)+"?"+t("\\#"+j)+"?")),t(f+"\\:"+R+t("\\?"+I)+"?"),t(t("\\/\\/("+t("("+l+")@")+"?("+w+")"+t("\\:("+b+")")+"?)")+"?("+S+"|"+D+"|"+U+"|"+T+")"),t("\\?("+I+")"),t("\\#("+j+")"),t(t("\\/\\/("+t("("+l+")@")+"?("+w+")"+t("\\:("+b+")")+"?)")+"?("+S+"|"+D+"|"+A+"|"+T+")"),t("\\?("+I+")"),t("\\#("+j+")"),t(t("\\/\\/("+t("("+l+")@")+"?("+w+")"+t("\\:("+b+")")+"?)")+"?("+S+"|"+D+"|"+U+"|"+T+")"),t("\\?("+I+")"),t("\\#("+j+")"),t("("+l+")@"),t("\\:("+b+")");return{NOT_SCHEME:new RegExp(r("[^]","[A-Za-z]","[0-9]","[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(r("[^\\%\\:]",u,i),"g"),NOT_HOST:new RegExp(r("[^\\%\\[\\]\\:]",u,i),"g"),NOT_PATH:new RegExp(r("[^\\%\\/\\:\\@]",u,i),"g"),NOT_PATH_NOSCHEME:new RegExp(r("[^\\%\\/\\@]",u,i),"g"),NOT_QUERY:new RegExp(r("[^\\%]",u,i,"[\\:\\@\\/\\?]",c),"g"),NOT_FRAGMENT:new RegExp(r("[^\\%]",u,i,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(r("[^]",u,i),"g"),UNRESERVED:new RegExp(u,"g"),OTHER_CHARS:new RegExp(r("[^\\%]",u,s),"g"),PCT_ENCODED:new RegExp(o,"g"),IPV6ADDRESS:new RegExp("\\[?("+g+")\\]?","g")}}function a(e){throw new RangeError(A[e])}function c(e,r){for(var t=[],n=e.length;n--;)t[n]=r(e[n]);return t}function u(e,r){var t=e.split("@"),n="";return t.length>1&&(n=t[0]+"@",e=t[1]),n+c((e=e.replace(D,".")).split("."),r).join(".")}function f(e){for(var r=[],t=0,n=e.length;t<n;){var o=e.charCodeAt(t++);if(o>=55296&&o<=56319&&t<n){var i=e.charCodeAt(t++);56320==(64512&i)?r.push(((1023&o)<<10)+(1023&i)+65536):(r.push(o),t--)}else r.push(o)}return r}function l(e){var r=e.charCodeAt(0);return r<16?"%0"+r.toString(16).toUpperCase():r<128?"%"+r.toString(16).toUpperCase():r<2048?"%"+(r>>6|192).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase():"%"+(r>>12|224).toString(16).toUpperCase()+"%"+(r>>6&63|128).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase()}function p(e){for(var r="",t=0,n=e.length;t<n;){var o=parseInt(e.substr(t+1,2),16);if(o<128)r+=String.fromCharCode(o),t+=3;else if(o>=194&&o<224){if(n-t>=6){var i=parseInt(e.substr(t+4,2),16);r+=String.fromCharCode((31&o)<<6|63&i)}else r+=e.substr(t,6);t+=6}else if(o>=224){if(n-t>=9){var s=parseInt(e.substr(t+4,2),16),a=parseInt(e.substr(t+7,2),16);r+=String.fromCharCode((15&o)<<12|(63&s)<<6|63&a)}else r+=e.substr(t,9);t+=9}else r+=e.substr(t,3),t+=3}return r}function h(e,r){function t(e){var t=p(e);return t.match(r.UNRESERVED)?t:e}return e.scheme&&(e.scheme=String(e.scheme).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(r.PCT_ENCODED,t).replace(r.NOT_USERINFO,l).replace(r.PCT_ENCODED,o)),void 0!==e.host&&(e.host=String(e.host).replace(r.PCT_ENCODED,t).toLowerCase().replace(r.NOT_HOST,l).replace(r.PCT_ENCODED,o)),void 0!==e.path&&(e.path=String(e.path).replace(r.PCT_ENCODED,t).replace(e.scheme?r.NOT_PATH:r.NOT_PATH_NOSCHEME,l).replace(r.PCT_ENCODED,o)),void 0!==e.query&&(e.query=String(e.query).replace(r.PCT_ENCODED,t).replace(r.NOT_QUERY,l).replace(r.PCT_ENCODED,o)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(r.PCT_ENCODED,t).replace(r.NOT_FRAGMENT,l).replace(r.PCT_ENCODED,o)),e}function d(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={},n=!1!==r.iri?O:E;"suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e);var o=e.match(z);if(o){H?(t.scheme=o[1],t.userinfo=o[3],t.host=o[4],t.port=parseInt(o[5],10),t.path=o[6]||"",t.query=o[7],t.fragment=o[8],isNaN(t.port)&&(t.port=o[5])):(t.scheme=o[1]||void 0,t.userinfo=-1!==e.indexOf("@")?o[3]:void 0,t.host=-1!==e.indexOf("//")?o[4]:void 0,t.port=parseInt(o[5],10),t.path=o[6]||"",t.query=-1!==e.indexOf("?")?o[7]:void 0,t.fragment=-1!==e.indexOf("#")?o[8]:void 0,isNaN(t.port)&&(t.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?o[4]:void 0)),t.host&&(t.host=t.host.replace(n.IPV6ADDRESS,"$1")),void 0!==t.scheme||void 0!==t.userinfo||void 0!==t.host||void 0!==t.port||t.path||void 0!==t.query?void 0===t.scheme?t.reference="relative":void 0===t.fragment?t.reference="absolute":t.reference="uri":t.reference="same-document",r.reference&&"suffix"!==r.reference&&r.reference!==t.reference&&(t.error=t.error||"URI is not a "+r.reference+" reference.");var i=q[(r.scheme||t.scheme||"").toLowerCase()];if(r.unicodeSupport||i&&i.unicodeSupport)h(t,n);else{if(t.host&&(r.domainHost||i&&i.domainHost))try{t.host=F.toASCII(t.host.replace(n.PCT_ENCODED,p).toLowerCase())}catch(e){t.error=t.error||"Host's domain name can not be converted to ASCII via punycode: "+e}h(t,E)}i&&i.parse&&i.parse(t,r)}else t.error=t.error||"URI can not be parsed.";return t}function v(e,r){var t=!1!==r.iri?O:E,n=[];return void 0!==e.userinfo&&(n.push(e.userinfo),n.push("@")),void 0!==e.host&&n.push(String(e.host).replace(t.IPV6ADDRESS,"[$1]")),"number"==typeof e.port&&(n.push(":"),n.push(e.port.toString(10))),n.length?n.join(""):void 0}function g(e){for(var r=[];e.length;)if(e.match(L))e=e.replace(L,"");else if(e.match($))e=e.replace($,"/");else if(e.match(k))e=e.replace(k,"/"),r.pop();else if("."===e||".."===e)e="";else{var t=e.match(J);if(!t)throw new Error("Unexpected dot segment condition");var n=t[0];e=e.slice(n.length),r.push(n)}return r.join("")}function y(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.iri?O:E,n=[],o=q[(r.scheme||e.scheme||"").toLowerCase()];if(o&&o.serialize&&o.serialize(e,r),e.host)if(t.IPV6ADDRESS.test(e.host));else if(r.domainHost||o&&o.domainHost)try{e.host=r.iri?F.toUnicode(e.host):F.toASCII(e.host.replace(t.PCT_ENCODED,p).toLowerCase())}catch(t){e.error=e.error||"Host's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+t}h(e,t),"suffix"!==r.reference&&e.scheme&&(n.push(e.scheme),n.push(":"));var i=v(e,r);if(void 0!==i&&("suffix"!==r.reference&&n.push("//"),n.push(i),e.path&&"/"!==e.path.charAt(0)&&n.push("/")),void 0!==e.path){var s=e.path;r.absolutePath||o&&o.absolutePath||(s=g(s)),void 0===i&&(s=s.replace(/^\/\//,"/%2F")),n.push(s)}return void 0!==e.query&&(n.push("?"),n.push(e.query)),void 0!==e.fragment&&(n.push("#"),n.push(e.fragment)),n.join("")}function m(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n={};return arguments[3]||(e=d(y(e,t),t),r=d(y(r,t),t)),!(t=t||{}).tolerant&&r.scheme?(n.scheme=r.scheme,n.userinfo=r.userinfo,n.host=r.host,n.port=r.port,n.path=g(r.path||""),n.query=r.query):(void 0!==r.userinfo||void 0!==r.host||void 0!==r.port?(n.userinfo=r.userinfo,n.host=r.host,n.port=r.port,n.path=g(r.path||""),n.query=r.query):(r.path?("/"===r.path.charAt(0)?n.path=g(r.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?n.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+r.path:n.path=r.path:n.path="/"+r.path,n.path=g(n.path)),n.query=r.query):(n.path=e.path,void 0!==r.query?n.query=r.query:n.query=e.query),n.userinfo=e.userinfo,n.host=e.host,n.port=e.port),n.scheme=e.scheme),n.fragment=r.fragment,n}function w(e,r){return e&&e.toString().replace(r&&r.iri?O.PCT_ENCODED:E.PCT_ENCODED,p)}function b(e){var r=p(e);return r.match(Y)?r:e}var E=s(!1),O=s(!0),C=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)},P=2147483647,x=/^xn--/,S=/[^\0-\x7E]/,D=/[\x2E\u3002\uFF0E\uFF61]/g,A={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},U=Math.floor,T=String.fromCharCode,I=function(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:36},j=function(e,r){return e+22+75*(e<26)-((0!=r)<<5)},R=function(e,r,t){var n=0;for(e=t?U(e/700):e>>1,e+=U(e/r);e>455;n+=36)e=U(e/35);return U(n+36*e/(e+38))},N=function(e){var r=[],t=e.length,n=0,o=128,i=72,s=e.lastIndexOf("-");s<0&&(s=0);for(var c=0;c<s;++c)e.charCodeAt(c)>=128&&a("not-basic"),r.push(e.charCodeAt(c));for(var u=s>0?s+1:0;u<t;){for(var f=n,l=1,p=36;;p+=36){u>=t&&a("invalid-input");var h=I(e.charCodeAt(u++));(h>=36||h>U((P-n)/l))&&a("overflow"),n+=h*l;var d=p<=i?1:p>=i+26?26:p-i;if(h<d)break;var v=36-d;l>U(P/v)&&a("overflow"),l*=v}var g=r.length+1;i=R(n-f,g,0==f),U(n/g)>P-o&&a("overflow"),o+=U(n/g),n%=g,r.splice(n++,0,o)}return String.fromCodePoint.apply(String,r)},_=function(e){var r=[],t=(e=f(e)).length,n=128,o=0,i=72,s=!0,c=!1,u=void 0;try{for(var l,p=e[Symbol.iterator]();!(s=(l=p.next()).done);s=!0){var h=l.value;h<128&&r.push(T(h))}}catch(e){c=!0,u=e}finally{try{!s&&p.return&&p.return()}finally{if(c)throw u}}var d=r.length,v=d;for(d&&r.push("-");v<t;){var g=P,y=!0,m=!1,w=void 0;try{for(var b,E=e[Symbol.iterator]();!(y=(b=E.next()).done);y=!0){var O=b.value;O>=n&&O<g&&(g=O)}}catch(e){m=!0,w=e}finally{try{!y&&E.return&&E.return()}finally{if(m)throw w}}var C=v+1;g-n>U((P-o)/C)&&a("overflow"),o+=(g-n)*C,n=g;var x=!0,S=!1,D=void 0;try{for(var A,I=e[Symbol.iterator]();!(x=(A=I.next()).done);x=!0){var N=A.value;if(N<n&&++o>P&&a("overflow"),N==n){for(var _=o,F=36;;F+=36){var q=F<=i?1:F>=i+26?26:F-i;if(_<q)break;var z=_-q,H=36-q;r.push(T(j(q+z%H,0))),_=U(z/H)}r.push(T(j(_,0))),i=R(o,C,v==d),o=0,++v}}}catch(e){S=!0,D=e}finally{try{!x&&I.return&&I.return()}finally{if(S)throw D}}++o,++n}return r.join("")},F={version:"2.1.0",ucs2:{decode:f,encode:function(e){return String.fromCodePoint.apply(String,C(e))}},decode:N,encode:_,toASCII:function(e){return u(e,function(e){return S.test(e)?"xn--"+_(e):e})},toUnicode:function(e){return u(e,function(e){return x.test(e)?N(e.slice(4).toLowerCase()):e})}},q={},z=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[\dA-F:.]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,H=void 0==="".match(/(){0}/)[1],L=/^\.\.?\//,$=/^\/\.(\/|$)/,k=/^\/\.\.(\/|$)/,J=/^\/?(?:.|\n)*?(?=\/|$)/,M={scheme:"http",domainHost:!0,parse:function(e,r){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,r){return e.port!==("https"!==String(e.scheme).toLowerCase()?80:443)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}},Z={scheme:"https",domainHost:M.domainHost,parse:M.parse,serialize:M.serialize},V={},B="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",G="[0-9A-Fa-f]",K=t(t("%[EFef][0-9A-Fa-f]%"+G+G+"%"+G+G)+"|"+t("%[89A-Fa-f][0-9A-Fa-f]%"+G+G)+"|"+t("%"+G+G)),Q=r("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",'[\\"\\\\]'),Y=new RegExp(B,"g"),W=new RegExp(K,"g"),X=new RegExp(r("[^]","[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]","[\\.]",'[\\"]',Q),"g"),ee=new RegExp(r("[^]",B,"[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"),"g"),re=ee,te={scheme:"mailto",parse:function(e,r){var t=e.to=e.path?e.path.split(","):[];if(e.path=void 0,e.query){for(var n=!1,o={},i=e.query.split("&"),s=0,a=i.length;s<a;++s){var c=i[s].split("=");switch(c[0]){case"to":for(var u=c[1].split(","),f=0,l=u.length;f<l;++f)t.push(u[f]);break;case"subject":e.subject=w(c[1],r);break;case"body":e.body=w(c[1],r);break;default:n=!0,o[w(c[0],r)]=w(c[1],r)}}n&&(e.headers=o)}e.query=void 0;for(var p=0,h=t.length;p<h;++p){var d=t[p].split("@");if(d[0]=w(d[0]),r.unicodeSupport)d[1]=w(d[1],r).toLowerCase();else try{d[1]=F.toASCII(w(d[1],r).toLowerCase())}catch(r){e.error=e.error||"Email address's domain name can not be converted to ASCII via punycode: "+r}t[p]=d.join("@")}return e},serialize:function(e,r){var t=i(e.to);if(t){for(var n=0,s=t.length;n<s;++n){var a=String(t[n]),c=a.lastIndexOf("@"),u=a.slice(0,c).replace(W,b).replace(W,o).replace(X,l),f=a.slice(c+1);try{f=r.iri?F.toUnicode(f):F.toASCII(w(f,r).toLowerCase())}catch(t){e.error=e.error||"Email address's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+t}t[n]=u+"@"+f}e.path=t.join(",")}var p=e.headers=e.headers||{};e.subject&&(p.subject=e.subject),e.body&&(p.body=e.body);var h=[];for(var d in p)p[d]!==V[d]&&h.push(d.replace(W,b).replace(W,o).replace(ee,l)+"="+p[d].replace(W,b).replace(W,o).replace(re,l));return h.length&&(e.query=h.join("&")),e}},ne=new RegExp("^urn\\:((?:[0-9A-Za-z][0-9A-Za-z\\-]{1,31}))$"),oe=/^([^\:]+)\:(.*)/,ie=/[\x00-\x20\\\"\&\<\>\[\]\^\`\{\|\}\~\x7F-\xFF]/g,se={scheme:"urn",parse:function(e,r){var t=e.path&&e.path.match(oe);if(t){var n="urn:"+t[1].toLowerCase(),o=q[n];o||(o=q[n]={scheme:n,parse:function(e,r){return e},serialize:q.urn.serialize}),e.scheme=n,e.path=t[2],e=o.parse(e,r)}else e.error=e.error||"URN can not be parsed.";return e},serialize:function(e,r){var t=e.scheme||r.scheme;if(t&&"urn"!==t){var n=t.match(ne)||["urn:"+t,t];e.scheme="urn",e.path=n[1]+":"+(e.path?e.path.replace(ie,l):"")}return e}},ae=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,ce={scheme:"urn:uuid",parse:function(e,r){return r.tolerant||e.path&&e.path.match(ae)||(e.error=e.error||"UUID is not valid."),e},serialize:function(e,r){return r.tolerant||e.path&&e.path.match(ae)?e.path=(e.path||"").toLowerCase():e.scheme=void 0,q.urn.serialize(e,r)}};q.http=M,q.https=Z,q.mailto=te,q.urn=se,q["urn:uuid"]=ce,e.SCHEMES=q,e.pctEncChar=l,e.pctDecChars=p,e.parse=d,e.removeDotSegments=g,e.serialize=y,e.resolveComponents=m,e.resolve=function(e,r,t){return y(m(d(e,t),d(r,t),t,!0),t)},e.normalize=function(e,r){return"string"==typeof e?e=y(d(e,r),r):"object"===n(e)&&(e=d(y(e,r),r)),e},e.equal=function(e,r,t){return"string"==typeof e?e=y(d(e,t),t):"object"===n(e)&&(e=y(e,t)),"string"==typeof r?r=y(d(r,t),t):"object"===n(r)&&(r=y(r,t)),e===r},e.escapeComponent=function(e,r){return e&&e.toString().replace(r&&r.iri?O.ESCAPE:E.ESCAPE,l)},e.unescapeComponent=w,Object.defineProperty(e,"__esModule",{value:!0})})},{}]},{},[1])(1)});