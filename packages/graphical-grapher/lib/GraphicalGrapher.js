!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define("GraphicalGrapher",["lodash"],t):"object"==typeof exports?exports.GraphicalGrapher=t(require("lodash")):e.GraphicalGrapher=t(e.lodash)}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=34)}([function(e,t){var n=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(26)("wks"),o=n(27),i=n(2).Symbol,a="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=a&&i[e]||(a?i:o)("Symbol."+e))}).store=r},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(6),o=n(20);e.exports=n(4)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){e.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports={}},function(e,t,n){var r=n(7),o=n(47),i=n(48),a=Object.defineProperty;t.f=n(4)?Object.defineProperty:function(e,t,n){if(r(e),t=i(t,!0),r(n),o)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(10);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(2),o=n(0),i=n(45),a=n(3),s=function(e,t,n){var c,u,l,d=e&s.F,f=e&s.G,p=e&s.S,v=e&s.P,h=e&s.B,y=e&s.W,b=f?o:o[t]||(o[t]={}),_=b.prototype,g=f?r:p?r[t]:(r[t]||{}).prototype;f&&(n=t);for(c in n)(u=!d&&g&&void 0!==g[c])&&c in b||(l=u?g[c]:n[c],b[c]=f&&"function"!=typeof g[c]?n[c]:h&&u?i(l,r):y&&g[c]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[c]=l,e&s.R&&_&&!_[c]&&a(_,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var r=n(22),o=n(13);e.exports=function(e){return r(o(e))}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(26)("keys"),o=n(27);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(y){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(37),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,v=!1,h=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=l[a.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var c=Object.create(s.computed||null);Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}}),s.computed=c}return{esModule:o,exports:i,options:s}}},function(e,t,n){var r=n(10),o=n(2).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){n(52);for(var r=n(2),o=n(3),i=n(5),a=n(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],l=r[u],d=l&&l.prototype;d&&!d[a]&&o(d,a,u),i[u]=i.Array}},function(e,t,n){var r=n(23);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){"use strict";var r=n(55),o=n(9),i=n(56),a=n(3),s=n(8),c=n(5),u=n(57),l=n(29),d=n(65),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};e.exports=function(e,t,n,h,y,b,_){u(n,t,h);var g,x,m,w=function(e){if(!p&&e in O)return O[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},k=t+" Iterator",j="values"==y,S=!1,O=e.prototype,C=O[f]||O["@@iterator"]||y&&O[y],M=C||w(y),L=y?j?w("entries"):M:void 0,F="Array"==t?O.entries||C:C;if(F&&(m=d(F.call(new e)))!==Object.prototype&&m.next&&(l(m,k,!0),r||s(m,f)||a(m,f,v)),j&&C&&"values"!==C.name&&(S=!0,M=function(){return C.call(this)}),r&&!_||!p&&!S&&O[f]||a(O,f,M),c[t]=M,c[k]=v,y)if(g={values:j?M:w("values"),keys:b?M:w("keys"),entries:L},_)for(x in g)x in O||i(O,x,g[x]);else o(o.P+o.F*(p||S),t,g);return g}},function(e,t,n){var r=n(60),o=n(28);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(6).f,o=n(8),i=n(1)("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},function(e,t,n){var r=n(13);e.exports=function(e){return Object(r(e))}},function(e,t,n){"use strict";var r=n(66)(!0);n(24)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var r=n(23),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),o))?n:i?r(t):"Object"==(s=r(t))&&"function"==typeof t.callee?"Arguments":s}},function(t,n){t.exports=e},function(e,t,n){n(35);var r=n(18)(n(38),n(83),"data-v-1ba326ef",null);r.options.__file="/home/simon/Desktop/grapher-vue-demo/packages/graphical-grapher/src/GraphicalGrapher.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] GraphicalGrapher.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(36);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(17)("1a27f33c",r,!1)},function(e,t,n){t=e.exports=n(16)(void 0),t.push([e.i,"\n.graphicalGrapher[data-v-1ba326ef] {\n  font-family: sans-serif;\n  flex-direction: column;\n}\n.graphicalGrapher *[data-v-1ba326ef] {\n  display: flex;\n  user-select: none;\n}\n.collections[data-v-1ba326ef] {\n  border-radius: 8px;\n  overflow: hidden;\n  flex-wrap: wrap;\n}\n.collections div[data-v-1ba326ef] {\n  cursor: pointer;\n  padding: 10px;\n  flex-grow: 1;\n  background: #333;\n  color: #fff;\n  justify-content: center;\n}\n.collections div[data-v-1ba326ef]:hover {\n  background: #444;\n}\n.collections div.noStuff[data-v-1ba326ef] {\n  color: #aaa;\n}\n.collections div.active[data-v-1ba326ef] {\n  background: #0a0;\n  color: #fff;\n}\n@media (max-width: 750px) {\n.options[data-v-1ba326ef] {\n    flex-wrap: wrap;\n}\n}\n.options label[data-v-1ba326ef] {\n  padding: 5px;\n  margin: 5px;\n  cursor: pointer;\n  align-items: center;\n}\n.options label[data-v-1ba326ef]:hover {\n  background: #eee;\n}\n.options label span[data-v-1ba326ef] {\n  opacity: 0.5;\n  margin-left: 5px;\n  font-size: 12px;\n}\n.options input[data-v-1ba326ef] {\n  height: 20px;\n  width: 20px;\n  flex-shrink: 0;\n}\n.columns > div[data-v-1ba326ef] {\n  flex-direction: column;\n  flex-basis: 33%;\n  flex-grow: 1;\n  flex-shrink: 1;\n  padding: 10px;\n}\n.columns h2[data-v-1ba326ef] {\n  margin-top: 0;\n}\n.columns h2 span[data-v-1ba326ef] {\n  margin-left: auto;\n  opacity: 0.5;\n  font-weight: normal;\n}\n.query[data-v-1ba326ef],\n.result[data-v-1ba326ef] {\n  white-space: pre-wrap;\n  flex-grow: 1;\n  user-select: all;\n  cursor: text;\n}\n.query[data-v-1ba326ef] {\n  border: none;\n  outline: none;\n  resize: none;\n  tab-size: 2;\n}\n.query.badQuery[data-v-1ba326ef] {\n  color: #f00;\n}\n",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],c=i[2],u=i[3],l={id:e+":"+o,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(39),i=r(o),a=n(41),s=r(a),c=n(49),u=r(c),l=n(33),d=r(l),f=n(72),p=r(f);t.default={components:{Editor:p.default},props:{indent:{type:String,default:"\t"},singleResult:{type:Boolean,default:!1},includeCreate:{type:Boolean,default:!0},lessUsedFields:{type:Array,default:function(){return["$filter","$postFilters","$postOptions"]}}},data:function(){return{collections:void 0,namedQueries:void 0,currentCollection:void 0,queries:{},badQuery:!1,single:this.singleResult,bypassFirewall:!1,includeCreate_:this.includeCreate,showLessUsed:!1,result:{}}},created:function(){var e=this;Meteor.call("grapher.live_docs",function(t,n){if(t)throw t;var r=n.collections;d.default.each(r,function(e){d.default.size(e.schema)||d.default.size(e.links)||d.default.size(e.reducers)||(e.noStuff=!0)}),e.collections=d.default.pickBy(r,function(e){return!e.noStuff}),d.default.each(d.default.pickBy(r,function(e){return e.noStuff}),function(t,n){return e.$set(e.collections,n,t)}),e.namedQueries=n.namedQueries}),this.$watch(function(){return[e.currentCollection,e.query,e.single,e.bypassFirewall]},function(t){var n=(0,u.default)(t,4),r=n[0],o=n[1],i=n[2];n[3];if(r){var a=(0,s.default)({},r,d.default.cloneDeep(o));i&&d.default.set(a[r],"$options.limit",1),Meteor.call("grapher.live",{body:a,params:void 0,checkUser:!e.bypassFirewall},function(t,n){return e.result=n||t})}},{deep:!0})},computed:{query:function(){return this.queries[this.currentCollection]||this.$set(this.queries,this.currentCollection,{}),this.queries[this.currentCollection]},jsonQuery:function(){var e=(0,i.default)(this.query,null,this.indent);return this.includeCreate_&&(e=d.default.upperFirst(this.currentCollection)+".createQuery("+e+")"),e},dev:function(){return Meteor.isDevelopment},jsonResult:function(){return(0,i.default)(this.result.data,null,"  ")}}}},function(e,t,n){e.exports={default:n(40),__esModule:!0}},function(e,t,n){var r=n(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(42),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t,n){return t in e?(0,o.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){e.exports={default:n(43),__esModule:!0}},function(e,t,n){n(44);var r=n(0).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},function(e,t,n){var r=n(9);r(r.S+r.F*!n(4),"Object",{defineProperty:n(6).f})},function(e,t,n){var r=n(46);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){e.exports=!n(4)&&!n(11)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(10);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(50),i=r(o),a=n(68),s=r(a);t.default=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=(0,s.default)(e);!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(e,t,n){e.exports={default:n(51),__esModule:!0}},function(e,t,n){n(21),n(31),e.exports=n(67)},function(e,t,n){"use strict";var r=n(53),o=n(54),i=n(5),a=n(12);e.exports=n(24)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,n):"values"==t?o(0,e[n]):o(0,[n,e[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t){e.exports=!0},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";var r=n(58),o=n(20),i=n(29),a={};n(3)(a,n(1)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:o(1,n)}),i(e,t+" Iterator")}},function(e,t,n){var r=n(7),o=n(59),i=n(28),a=n(15)("IE_PROTO"),s=function(){},c=function(){var e,t=n(19)("iframe"),r=i.length;for(t.style.display="none",n(64).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[i[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=c(),void 0===t?n:o(n,t)}},function(e,t,n){var r=n(6),o=n(7),i=n(25);e.exports=n(4)?Object.defineProperties:function(e,t){o(e);for(var n,a=i(t),s=a.length,c=0;s>c;)r.f(e,n=a[c++],t[n]);return e}},function(e,t,n){var r=n(8),o=n(12),i=n(61)(!1),a=n(15)("IE_PROTO");e.exports=function(e,t){var n,s=o(e),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;t.length>c;)r(s,n=t[c++])&&(~i(u,n)||u.push(n));return u}},function(e,t,n){var r=n(12),o=n(62),i=n(63);e.exports=function(e){return function(t,n,a){var s,c=r(t),u=o(c.length),l=i(a,u);if(e&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var r=n(14),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(14),o=Math.max,i=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):i(e,t)}},function(e,t,n){var r=n(2).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(8),o=n(30),i=n(15)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){var r=n(14),o=n(13);e.exports=function(e){return function(t,n){var i,a,s=String(o(t)),c=r(n),u=s.length;return c<0||c>=u?e?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):i:e?s.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},function(e,t,n){var r=n(32),o=n(1)("iterator"),i=n(5);e.exports=n(0).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(r(t))}},function(e,t,n){e.exports={default:n(69),__esModule:!0}},function(e,t,n){n(21),n(31),e.exports=n(70)},function(e,t,n){var r=n(7),o=n(71);e.exports=n(0).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return r(t.call(e))}},function(e,t,n){var r=n(32),o=n(1)("iterator"),i=n(5);e.exports=n(0).getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[r(e)]}},function(e,t,n){n(73);var r=n(18)(n(75),n(82),"data-v-5555da98",null);r.options.__file="/home/simon/Desktop/grapher-vue-demo/packages/graphical-grapher/src/Editor.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Editor.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(74);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(17)("f6b25aba",r,!1)},function(e,t,n){t=e.exports=n(16)(void 0),t.push([e.i,"\n*[data-v-5555da98] {\n  display: flex;\n  user-select: none;\n}\n.editor[data-v-5555da98] {\n  flex-direction: column;\n}\n.node[data-v-5555da98] {\n  padding: 4px;\n  margin: 1px;\n  border-radius: 4px;\n  cursor: pointer;\n  border: 1px solid #ccc;\n  flex-wrap: nowrap;\n  flex-basis: fill;\n  align-items: flex-start;\n  position: relative;\n}\n.node.link b[data-v-5555da98],\n.node.object b[data-v-5555da98] {\n  background: #a0a;\n}\n.node.link.active[data-v-5555da98],\n.node.object.active[data-v-5555da98] {\n  flex-direction: column;\n}\n.node.field b[data-v-5555da98] {\n  background: #08f;\n}\n.node.reducer b[data-v-5555da98] {\n  background: #f80;\n}\n.node.special b[data-v-5555da98] {\n  background: #0a0;\n}\n.node.disabled[data-v-5555da98] {\n  cursor: default;\n}\n.node.disabled b[data-v-5555da98] {\n  background: #888;\n}\n.node.active[data-v-5555da98] {\n  background: #333;\n  border-color: #333;\n  color: #fff;\n}\n.node.active[data-v-5555da98]:hover {\n  background: #444;\n  border-color: #444;\n}\n.node[data-v-5555da98]:hover {\n  background: #eee;\n}\n.node .details[data-v-5555da98] {\n  opacity: 0.7;\n  white-space: nowrap;\n  align-self: flex-end;\n}\n.node b[data-v-5555da98] {\n  font-family: monospace;\n  width: 18px;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border-radius: 4px;\n  margin-right: 3px;\n}\n.node:hover .hover[data-v-5555da98] {\n  display: flex;\n}\n.hover[data-v-5555da98] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  display: none;\n  pointer-events: none;\n}\n.hover > div[data-v-5555da98] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: #fff;\n  color: #000;\n  box-shadow: 0px 1px 5px rgba(0,0,0,0.5);\n  border-radius: 4px;\n  z-index: 100;\n  flex-direction: column;\n  white-space: nowrap;\n}\n.hover > div div[data-v-5555da98] {\n  border-bottom: 1px solid #ddd;\n  padding: 3px;\n}\n.hover span[data-v-5555da98] {\n  opacity: 0.7;\n  margin-left: 3px;\n}\ntextarea[data-v-5555da98] {\n  border: 1px solid #ccc;\n  outline: none;\n  border-radius: 4px;\n  margin: 1px;\n}\ntextarea[data-v-5555da98]:focus {\n  border-color: #7c7;\n}\ntextarea.error[data-v-5555da98] {\n  border-color: #f88;\n}\n",""])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(76),i=r(o),a=n(33),s=r(a);t.default={name:"Editor",props:["collection","node","collections","object","lessUsedFields","showLessUsed"],data:function(){return{errors:{}}},computed:{fields:function(){return this.object?this.object:s.default.omit(this.collection.schema,"_id")},specialFields:function(){var e=["$filters","$options","$filter","$postFilters","$postOptions"];return this.showLessUsed?e:s.default.difference(e,this.lessUsedFields)}},methods:{icon:function(e){var t=this.type(e);return t.includes("||")?"?":{Object:"{}",Array:"[]",String:'""'}[t]||t[0]},type:function(e){return 1==e.types[0].length?e.types[0].type:e.types.map(function(e){return e.type}).join(" || ")},contentType:function(e,t){return"Array"==e.types[0].type?t?"["+this.contentType(e.types[0].content,!0)+"]":this.contentType(e.types[0].content):e.types[0].blackbox?"Blackbox":this.type(e)},details:function(e){var t=s.default.omit(e,"types","optional");return s.default.each(e.types,function(e){(0,i.default)(t,s.default.omit(e,["type","content"]))}),t},clickField:function(e,t){this.node[t]?this.$delete(this.node,t):"Object"==this.contentType(e)?this.$set(this.node,t,{}):this.$set(this.node,t,1)},clickSpecial:function(e){var t=this;this.node[e]?this.$delete(this.node,e):(this.$set(this.node,e,{}),this.$nextTick(function(){return t.$refs[e][0].focus()}))},setSpecial:function(e,t){try{var n=new Function("return {"+t+"}")();this.node[e]=n,this.$set(this.errors,e,!1)}catch(t){console.dir(t),this.$set(this.errors,e,!0)}}}}},function(e,t,n){e.exports={default:n(77),__esModule:!0}},function(e,t,n){n(78),e.exports=n(0).Object.assign},function(e,t,n){var r=n(9);r(r.S+r.F,"Object",{assign:n(79)})},function(e,t,n){"use strict";var r=n(25),o=n(80),i=n(81),a=n(30),s=n(22),c=Object.assign;e.exports=!c||n(11)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r})?function(e,t){for(var n=a(e),c=arguments.length,u=1,l=o.f,d=i.f;c>u;)for(var f,p=s(arguments[u++]),v=l?r(p).concat(l(p)):r(p),h=v.length,y=0;h>y;)d.call(p,f=v[y++])&&(n[f]=p[f]);return n}:c},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"editor"},[e.object?e._e():e._l(e.specialFields,function(t){return n("div",[n("div",{staticClass:"node special",class:{active:e.node[t]},on:{click:function(n){e.clickSpecial(t)}}},[n("div",[n("b",[e._v("$")]),e._v(e._s(t))])]),e._v(" "),e.node[t]?n("textarea",{ref:t,refInFor:!0,class:{error:e.errors[t]},on:{input:function(n){e.setSpecial(t,n.target.value)}}}):e._e()])}),e._v(" "),e._l(e.fields,function(t,r){return n("div",[n("div",{staticClass:"node field",class:{active:e.node[r]},on:{click:function(n){e.clickField(t,r)},contextmenu:function(t){t.preventDefault(),1==e.node[r]?e.$delete(e.node,r):e.$set(e.node,r,1)}}},[n("div",[n("b",[e._v(e._s(e.icon(t)))]),e._v(e._s(r))]),e._v(" "),"object"!=typeof e.node[r]?n("div",{staticClass:"details"},[e._v(": "+e._s(e.contentType(t,!0)))]):e._e(),e._v(" "),n("div",{staticClass:"hover"},[n("div",[n("div",[e._v(e._s(t.optional?"Optional":"Required"))]),e._v(" "),e._l(e.details(t),function(t,r){return n("div",[e._v(e._s(r)+":"),n("span",[e._v(e._s(t))])])}),e._v(" "),"Object"==e.contentType(t)?n("div",[e._v("Right click to include all fields")]):e._e()],2)])]),e._v(" "),"object"==typeof e.node[r]?n("Editor",{attrs:{object:"Array"==e.type(t)?t.types[0].content.types[0].content:t.types[0].content,node:e.node[r],collections:e.collections}}):e._e()],1)}),e._v(" "),e.object?e._e():[e._l(e.collection.reducers,function(t,r){return n("div",[n("div",{staticClass:"node reducer",class:{active:e.node[r]},on:{click:function(t){e.node[r]?e.$delete(e.node,r):e.$set(e.node,r,1)}}},[n("div",[n("b",[e._v("()")]),e._v(e._s(r))]),e._v(" "),n("div",{staticClass:"details"},[e._v(": reducer")]),e._v(" "),n("div",{staticClass:"hover"},[n("div",[n("div",[e._v("body:"),n("span",[e._v(e._s(Object.keys(t.body).join(", ")))])])])])])])}),e._v(" "),e._l(e.collection.links,function(t,r){return n("div",[n("div",{staticClass:"node link",class:{active:e.node[r]},on:{click:function(t){e.node[r]?e.$delete(e.node,r):e.$set(e.node,r,{})}}},[n("div",[n("b",[e._v(e._s(t.isOneResult?">":"[]"))]),e._v(e._s(r))]),e._v(" "),n("div",{staticClass:"details"},[e._v(": "+e._s(t.collection))]),e._v(" "),n("div",{staticClass:"hover"},[n("div",[n("div",[e._v("collection: "),n("span",[e._v(e._s(t.collection))])]),e._v(" "),t.inversedBy?n("div",[e._v("inversedBy: "),n("span",[e._v(e._s(t.inversedBy))])]):[n("div",[e._v("type:"),n("span",[e._v(e._s(t.strategy))])]),e._v(" "),n("div",[e._v("field:"),n("span",[e._v(e._s(t.linkStorageField))])])]],2)])]),e._v(" "),e.node[r]?n("Editor",{attrs:{node:e.node[r],collection:e.collections[t.collection],collections:e.collections,lessUsedFields:e.lessUsedFields}}):e._e()],1)})]],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.collections?n("div",{staticClass:"graphicalGrapher"},[n("h1",[e._v("Graphical Grapher")]),e._v(" "),n("div",{staticClass:"collections"},e._l(e.collections,function(t,r){return n("div",{class:{active:e.currentCollection==r,noStuff:t.noStuff},on:{click:function(t){e.currentCollection=r}}},[e._v("\n\t\t\t"+e._s(r)+"\n\t\t")])})),e._v(" "),n("div",{staticClass:"options"},[e.dev?n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.bypassFirewall,expression:"bypassFirewall"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.bypassFirewall)?e._i(e.bypassFirewall,null)>-1:e.bypassFirewall},on:{change:function(t){var n=e.bypassFirewall,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=e._i(n,null);r.checked?i<0&&(e.bypassFirewall=n.concat([null])):i>-1&&(e.bypassFirewall=n.slice(0,i).concat(n.slice(i+1)))}else e.bypassFirewall=o}}}),e._v("Bypass firewall"),n("span",[e._v(" (not available in production)")])]):e._e(),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.single,expression:"single"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.single)?e._i(e.single,null)>-1:e.single},on:{change:function(t){var n=e.single,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=e._i(n,null);r.checked?i<0&&(e.single=n.concat([null])):i>-1&&(e.single=n.slice(0,i).concat(n.slice(i+1)))}else e.single=o}}}),e._v("Single result")]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.includeCreate_,expression:"includeCreate_"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.includeCreate_)?e._i(e.includeCreate_,null)>-1:e.includeCreate_},on:{change:function(t){var n=e.includeCreate_,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=e._i(n,null);r.checked?i<0&&(e.includeCreate_=n.concat([null])):i>-1&&(e.includeCreate_=n.slice(0,i).concat(n.slice(i+1)))}else e.includeCreate_=o}}}),e._v('Add "Collection.createQuery"')]),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.showLessUsed,expression:"showLessUsed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showLessUsed)?e._i(e.showLessUsed,null)>-1:e.showLessUsed},on:{change:function(t){var n=e.showLessUsed,r=t.target,o=!!r.checked;if(Array.isArray(n)){var i=e._i(n,null);r.checked?i<0&&(e.showLessUsed=n.concat([null])):i>-1&&(e.showLessUsed=n.slice(0,i).concat(n.slice(i+1)))}else e.showLessUsed=o}}}),e._v("Show less used fields")])]),e._v(" "),e.currentCollection?n("div",{staticClass:"columns"},[n("div",[n("h2",[e._v("Editor")]),e._v(" "),n("Editor",{attrs:{collection:e.collections[e.currentCollection],node:e.query,collections:e.collections,lessUsedFields:e.lessUsedFields,showLessUsed:e.showLessUsed}})],1),e._v(" "),n("div",[n("h2",[e._v("Query")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.jsonQuery,expression:"jsonQuery"}],class:{query:1,badQuery:e.badQuery},attrs:{readonly:""},domProps:{value:e.jsonQuery},on:{click:function(e){e.target.select()},input:function(t){t.target.composing||(e.jsonQuery=t.target.value)}}})]),e._v(" "),n("div",[n("h2",[e._v("Result "),n("span",[e._v(e._s(e.result.data&&e.result.data.length)+" documents - "+e._s(e.result.timeElapsedMs)+"ms")])]),e._v(" "),n("div",{staticClass:"result"},[e._v(e._s(e.jsonResult))])])]):n("h1",{staticStyle:{color:"#888"}},[e._v("Choose a collection")])]):e._e()},staticRenderFns:[]},e.exports.render._withStripped=!0}])});