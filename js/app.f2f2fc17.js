(function(){"use strict";var n={2326:function(n,e,t){var r=t(7195),o=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar"),e("router-view")],1)},u=[],i=function(){var n=this,e=n._self._c;return e("ul",[e("li",[e("router-link",{attrs:{to:{name:"home"}}},[n._v("Home")])],1),e("li",[e("router-link",{attrs:{to:{name:"quienes-somos"}}},[n._v("Quienes somos")])],1)])},a=[],c={name:"NavBar"},f=c,s=t(1001),l=(0,s.Z)(f,i,a,!1,null,null,null),d=l.exports,p={name:"App",components:{NavBar:d}},v=p,m=(0,s.Z)(v,o,u,!1,null,null,null),h=m.exports,b=t(2241);r.ZP.use(b.ZP);const g=[{path:"/",component:()=>t.e(687).then(t.bind(t,1687)),name:"home"},{path:"/quienes-somos",component:()=>t.e(891).then(t.bind(t,891)),name:"quienes-somos"},{path:"*",redirect:"/"}],y=new b.ZP({mode:"history",base:"/vue-production/",routes:g});var w=y;r.ZP.config.productionTip=!1,new r.ZP({router:w,render:n=>n(h)}).$mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r].call(u.exports,u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,u){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var f=o();void 0!==f&&(e=f)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{687:"7fd8e1f2",891:"ef487c58"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="vue-production:";t.l=function(r,o,u,i){if(n[r])n[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+u),a.src=r),n[r]=[o];var d=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/vue-production/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(e),a=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(e){return 0!==n[e]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(e&&e(r);f<i.length;f++)u=i[f],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},r=self["webpackChunkvue_production"]=self["webpackChunkvue_production"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2326)}));r=t.O(r)})();
//# sourceMappingURL=app.f2f2fc17.js.map