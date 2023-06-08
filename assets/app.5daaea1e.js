import{a5 as V,A as pe,p as X,w as fe,v as ge,Q as D,a6 as ve,a7 as he,a8 as ze,a9 as ye,aa as be,ab as Ee,ac as we,ad as Le,ae as Ce,af as He,M as Ae,d as Oe,u as Se,k as Te,ag as xe,ah as Pe,ai as Ie}from"./chunks/framework.2956d6af.js";import{t as U}from"./chunks/theme.48d00094.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var b=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var m in r)Object.prototype.hasOwnProperty.call(r,m)&&(o[m]=r[m])}return o},x=function(t){return t.tagName==="IMG"},Ne=function(t){return NodeList.prototype.isPrototypeOf(t)},P=function(t){return t&&t.nodeType===1},Y=function(t){var r=t.currentSrc||t.src;return r.substr(-4).toLowerCase()===".svg"},W=function(t){try{return Array.isArray(t)?t.filter(x):Ne(t)?[].slice.call(t).filter(x):P(t)?[t].filter(x):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(x):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Re=function(t){var r=document.createElement("div");return r.classList.add("medium-zoom-overlay"),r.style.background=t,r},je=function(t){var r=t.getBoundingClientRect(),m=r.top,f=r.left,I=r.width,N=r.height,h=t.cloneNode(),R=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=m+R+"px",h.style.left=f+A+"px",h.style.width=I+"px",h.style.height=N+"px",h.style.transform="",h},L=function(t,r){var m=b({bubbles:!1,cancelable:!1,detail:void 0},r);if(typeof window.CustomEvent=="function")return new CustomEvent(t,m);var f=document.createEvent("CustomEvent");return f.initCustomEvent(t,m.bubbles,m.cancelable,m.detail),f},ke=function o(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=window.Promise||function(n){function a(){}n(a,a)},f=function(n){var a=n.target;if(a===S){z();return}g.indexOf(a)!==-1&&Z({target:a})},I=function(){if(!(E||!e.original)){var n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(q-n)>d.scrollOffset&&setTimeout(z,150)}},N=function(n){var a=n.key||n.keyCode;(a==="Escape"||a==="Esc"||a===27)&&z()},h=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n;if(n.background&&(S.style.background=n.background),n.container&&n.container instanceof Object&&(a.container=b({},d.container,n.container)),n.template){var s=P(n.template)?n.template:document.querySelector(n.template);a.template=s}return d=b({},d,a),g.forEach(function(u){u.dispatchEvent(L("medium-zoom:update",{detail:{zoom:l}}))}),l},R=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o(b({},d,n))},A=function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];var u=a.reduce(function(i,p){return[].concat(i,W(p))},[]);return u.filter(function(i){return g.indexOf(i)===-1}).forEach(function(i){g.push(i),i.classList.add("medium-zoom-image")}),O.forEach(function(i){var p=i.type,v=i.listener,w=i.options;u.forEach(function(y){y.addEventListener(p,v,w)})}),l},G=function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];e.zoomed&&z();var u=a.length>0?a.reduce(function(i,p){return[].concat(i,W(p))},[]):g;return u.forEach(function(i){i.classList.remove("medium-zoom-image"),i.dispatchEvent(L("medium-zoom:detach",{detail:{zoom:l}}))}),g=g.filter(function(i){return u.indexOf(i)===-1}),l},K=function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(u){u.addEventListener("medium-zoom:"+n,a,s)}),O.push({type:"medium-zoom:"+n,listener:a,options:s}),l},Q=function(n,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return g.forEach(function(u){u.removeEventListener("medium-zoom:"+n,a,s)}),O=O.filter(function(u){return!(u.type==="medium-zoom:"+n&&u.listener.toString()===a.toString())}),l},F=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.target,s=function(){var i={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},p=void 0,v=void 0;if(d.container)if(d.container instanceof Object)i=b({},i,d.container),p=i.width-i.left-i.right-d.margin*2,v=i.height-i.top-i.bottom-d.margin*2;else{var w=P(d.container)?d.container:document.querySelector(d.container),y=w.getBoundingClientRect(),j=y.width,oe=y.height,ne=y.left,ae=y.top;i=b({},i,{width:j,height:oe,left:ne,top:ae})}p=p||i.width-d.margin*2,v=v||i.height-d.margin*2;var H=e.zoomedHd||e.original,re=Y(H)?p:H.naturalWidth||p,ie=Y(H)?v:H.naturalHeight||v,T=H.getBoundingClientRect(),de=T.top,me=T.left,k=T.width,_=T.height,se=Math.min(Math.max(k,re),p)/k,ue=Math.min(Math.max(_,ie),v)/_,M=Math.min(se,ue),le=(-me+(p-k)/2+d.margin+i.left)/M,ce=(-de+(v-_)/2+d.margin+i.top)/M,B="scale("+M+") translate3d("+le+"px, "+ce+"px, 0)";e.zoomed.style.transform=B,e.zoomedHd&&(e.zoomedHd.style.transform=B)};return new m(function(u){if(a&&g.indexOf(a)===-1){u(l);return}var i=function j(){E=!1,e.zoomed.removeEventListener("transitionend",j),e.original.dispatchEvent(L("medium-zoom:opened",{detail:{zoom:l}})),u(l)};if(e.zoomed){u(l);return}if(a)e.original=a;else if(g.length>0){var p=g;e.original=p[0]}else{u(l);return}if(e.original.dispatchEvent(L("medium-zoom:open",{detail:{zoom:l}})),q=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,E=!0,e.zoomed=je(e.original),document.body.appendChild(S),d.template){var v=P(d.template)?d.template:document.querySelector(d.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&e.original.parentElement.tagName==="PICTURE"&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",i),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(w),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,s()};var w=setInterval(function(){e.zoomedHd.complete&&(clearInterval(w),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),s()})}else s()})},z=function(){return new m(function(n){if(E||!e.original){n(l);return}var a=function s(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(S),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),E=!1,e.zoomed.removeEventListener("transitionend",s),e.original.dispatchEvent(L("medium-zoom:closed",{detail:{zoom:l}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,n(l)};E=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(L("medium-zoom:close",{detail:{zoom:l}})),e.zoomed.addEventListener("transitionend",a)})},Z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.target;return e.original?z():F({target:a})},J=function(){return d},ee=function(){return g},te=function(){return e.original},g=[],O=[],E=!1,q=0,d=r,e={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?d=t:(t||typeof t=="string")&&A(t),d=b({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d);var S=Re(d.background);document.addEventListener("click",f),document.addEventListener("keyup",N),document.addEventListener("scroll",I),window.addEventListener("resize",z);var l={open:F,close:z,toggle:Z,update:h,clone:R,attach:A,detach:G,on:K,off:Q,getOptions:J,getImages:ee,getZoomedImage:te};return l};function _e(o,t){t===void 0&&(t={});var r=t.insertAt;if(!(!o||typeof document>"u")){var m=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",r==="top"&&m.firstChild?m.insertBefore(f,m.firstChild):m.appendChild(f),f.styleSheet?f.styleSheet.cssText=o:f.appendChild(document.createTextNode(o))}}var Me=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";_e(Me);const De=ke,Fe={...U,Layout:()=>V(U.Layout,null,{}),enhanceApp({app:o,router:t,siteData:r}){},setup(){const o=pe(),t=()=>{De(".main img",{background:"var(--vp-c-bg)"})};X(()=>{t()}),fe(()=>o.path,()=>ge(()=>t()))}};function $(o){if(o.extends){const t=$(o.extends);return{...t,...o,async enhanceApp(r){t.enhanceApp&&await t.enhanceApp(r),o.enhanceApp&&await o.enhanceApp(r)}}}return o}const C=$(Fe),Ze=Oe({name:"VitePressApp",setup(){const{site:o}=Se();return X(()=>{Te(()=>{document.documentElement.lang=o.value.lang,document.documentElement.dir=o.value.dir})}),xe(),Pe(),Ie(),C.setup&&C.setup(),()=>V(C.Layout)}});async function qe(){const o=Ue(),t=Be();t.provide(he,o);const r=ze(o.route);return t.provide(ye,r),t.component("Content",be),t.component("ClientOnly",Ee),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),C.enhanceApp&&await C.enhanceApp({app:t,router:o,siteData:we}),{app:t,router:o,data:r}}function Be(){return Le(Ze)}function Ue(){let o=D,t;return Ce(r=>{let m=He(r);return o&&(t=m),(o||t===m)&&(m=m.replace(/\.js$/,".lean.js")),D&&(o=!1),Ae(()=>import(m),[])},C.NotFound)}D&&qe().then(({app:o,router:t,data:r})=>{t.go().then(()=>{ve(t.route,r.site),o.mount("#app")})});export{qe as createApp};