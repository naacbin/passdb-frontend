var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function a(t){t.forEach(n)}function s(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){const r=e.subscribe(n);t.$$.on_destroy.push(r.unsubscribe?()=>r.unsubscribe():r)}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function $(){return f("")}function h(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function v(t,e,n){t.style.setProperty(e,n)}let b;function y(t){b=t}const w=[],k=[],x=[],_=[],E=Promise.resolve();let q=!1;function L(t){x.push(t)}function A(){const t=new Set;do{for(;w.length;){const t=w.shift();y(t),T(t.$$)}for(;k.length;)k.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];t.has(n)||(n(),t.add(n))}x.length=0}while(w.length);for(;_.length;)_.pop()();q=!1}function T(t){t.fragment&&(t.update(t.dirty),a(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(L))}const N=new Set;let C;function D(){C={r:0,c:[],p:C}}function O(){C.r||a(C.c),C=C.p}function P(t,e){t&&t.i&&(N.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),C.c.push(()=>{N.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,n){const r=n.token={};function a(t,a,s,o){if(n.token!==r)return;n.resolved=s&&{[s]:o};const c=e(e({},n.ctx),n.resolved),l=t&&(n.current=t)(c);n.block&&(n.blocks?n.blocks.forEach((t,e)=>{e!==a&&t&&(D(),H(t,1,1,()=>{n.blocks[e]=null}),O())}):n.block.d(1),l.c(),P(l,1),l.m(n.mount(),n.anchor),A()),n.block=l,n.blocks&&(n.blocks[a]=l)}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){if(t.then(t=>{a(n.then,1,n.value,t)},t=>{a(n.catch,2,n.error,t)}),n.current!==n.pending)return a(n.pending,0),!0}else{if(n.current!==n.then)return a(n.then,1,n.value,t),!0;n.resolved={[n.value]:t}}var s}function j(t,e,r){const{fragment:o,on_mount:c,on_destroy:l,after_update:i}=t.$$;o.m(e,r),L(()=>{const e=c.map(n).filter(s);l?l.push(...e):a(e),t.$$.on_mount=[]}),i.forEach(L)}function S(t,e){t.$$.fragment&&(a(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function I(t,e){t.$$.dirty||(w.push(t),q||(q=!0,E.then(A)),t.$$.dirty=r()),t.$$.dirty[e]=!0}function B(e,n,s,o,c,l){const i=b;y(e);const u=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let d=!1;var f;p.ctx=s?s(e,u,(t,n)=>{p.ctx&&c(p.ctx[t],p.ctx[t]=n)&&(p.bound[t]&&p.bound[t](n),d&&I(e,t))}):u,p.update(),d=!0,a(p.before_update),p.fragment=o(p.ctx),n.target&&(n.hydrate?p.fragment.l((f=n.target,Array.from(f.childNodes))):p.fragment.c(),n.intro&&P(e.$$.fragment),j(e,n.target,n.anchor),A()),y(i)}class U{$destroy(){S(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const z=[];function G(t,e){return{subscribe:R(t,e).subscribe}}function R(e,n=t){let r;const a=[];function s(t){if(o(e,t)&&(e=t,r)){const t=!z.length;for(let t=0;t<a.length;t+=1){const n=a[t];n[1](),z.push(n,e)}if(t){for(let t=0;t<z.length;t+=2)z[t][0](z[t+1]);z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,c=t){const l=[o,c];return a.push(l),1===a.length&&(r=n(s)||t),o(e),()=>{const t=a.indexOf(l);-1!==t&&a.splice(t,1),0===a.length&&(r(),r=null)}}}}function F(e,n,r){const o=!Array.isArray(e),c=o?[e]:e,l=n.length<2;return G(r,e=>{let r=!1;const i=[];let u=0,p=t;const d=()=>{if(u)return;p();const r=n(o?i[0]:i,e);l?e(r):p=s(r)?r:t},f=c.map((t,e)=>t.subscribe(t=>{i[e]=t,u&=~(1<<e),r&&d()},()=>{u|=1<<e}));return r=!0,d(),function(){a(f),p()}})}function J(t){var e,n,r=t.component;function a(t){return{props:{params:t.componentParams}}}if(r)var s=new r(a(t));return{c(){s&&s.$$.fragment.c(),e=$()},m(t,r){s&&j(s,t,r),i(t,e,r),n=!0},p(t,n){var o={};if(t.componentParams&&(o.params=n.componentParams),r!==(r=n.component)){if(s){D();const t=s;H(t.$$.fragment,1,0,()=>{S(t,1)}),O()}r?((s=new r(a(n))).$$.fragment.c(),P(s.$$.fragment,1),j(s,e.parentNode,e)):s=null}else r&&s.$set(o)},i(t){n||(s&&P(s.$$.fragment,t),n=!0)},o(t){s&&H(s.$$.fragment,t),n=!1},d(t){t&&u(e),s&&S(s,t)}}}function K(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const Q=G(K(),function(t){const e=()=>{t(K())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}),V=F(Q,t=>t.location),W=F(Q,t=>t.querystring);function X(t){if(!t||t.length<1||"/"!=t.charAt(0))throw Error("Invalid parameter location");setTimeout(()=>{window.location.hash="#"+t},0)}function Y(t){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');const e=t.getAttribute("href");if(!e||e.length<1||"/"!=e.charAt(0))throw Error('Invalid value for "href" attribute');t.addEventListener("click",t=>{let e;t.preventDefault();let n=t.target;for(;null===(e=n.getAttribute("href"));)if(null===(n=n.parentElement))throw Error("Could not find corresponding href value");return X(e),!1})}function Z(t,e,n){let r;c(t,Q,t=>{n("$loc",r=t)});let{routes:a={}}=e;class s{constructor(t,e){if(!t||t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))throw Error('Invalid value for "path" argument');const{pattern:n,keys:r}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,a,s,o=[],c="",l=t.split("/");for(l[0]||l.shift();a=l.shift();)"*"===(n=a[0])?(o.push("wild"),c+="/(.*)"):":"===n?(r=a.indexOf("?",1),s=a.indexOf(".",1),o.push(a.substring(1,~r?r:~s?s:a.length)),c+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~r?"?":"")+"\\"+a.substring(s))):c+="/"+a;return{keys:o,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,this.component=e,this._pattern=n,this._keys=r}match(t){const e=this._pattern.exec(t);if(null===e)return null;const n={};let r=0;for(;r<this._keys.length;)n[this._keys[r]]=e[++r]||null;return n}}const o=Object.keys(a).map(t=>new s(t,a[t]));let l=null,i={};return t.$set=(t=>{"routes"in t&&n("routes",a=t.routes)}),t.$$.update=((t={component:1,$loc:1})=>{if(t.component||t.$loc){n("component",l=null);let t=0;for(;!l&&t<o.length;){const e=o[t].match(r.location);e&&(n("component",l=o[t].component),n("componentParams",i=e)),t++}}}),{routes:a,component:l,componentParams:i}}class tt extends U{constructor(t){super(),B(this,t,Z,J,o,["routes"])}}function et(e){var n,r,a,s,o,c,p,f,$,g;return{c(){var t,e,o,l;n=d("nav"),r=d("div"),a=d("div"),(s=d("a")).innerHTML='<span class="brand-logo">PassDB Search</span>',c=m(),p=d("ul"),f=d("li"),$=d("input"),h(s,"class","col s3 left"),h(s,"href","/"),h($,"placeholder","Search"),h($,"type","text"),h($,"class","white-text"),h(p,"id","nav-mobile"),h(p,"class","right col s6"),h(a,"class","nav-wrapper"),h(r,"class","container"),h(n,"class","blue-grey darken-1 z-depth-3"),e="keydown",o=nt,(t=$).addEventListener(e,o,l),g=(()=>t.removeEventListener(e,o,l))},m(t,e){i(t,n,e),l(n,r),l(r,a),l(a,s),o=Y.call(null,s)||{},l(a,c),l(a,p),l(p,f),l(f,$)},p:t,i:t,o:t,d(t){t&&u(n),o&&"function"==typeof o.destroy&&o.destroy(),g()}}}function nt(t){if(13==t.keyCode){let e,n,r=t.target.value;if(!r)return void X("/rtfm");switch([e]=r.split(":"),n=r.slice(2),e){case"u":X(`/username/${n}`);break;case"p":X(`/password/${n}`);break;case"d":X(`/domain/${n}`);break;case"e":X(`/email/${n}`);break;default:X("/rtfm")}}}class rt extends U{constructor(t){super(),B(this,t,null,et,o,[])}}function at(e){var n;return{c(){(n=d("div")).innerHTML='<div class="row"><h4>How to Search</h4> <div class="card-panel"><ul><li>\n\t\t\t\t\t\t\t\tUsername <span><pre class="svelte-12hns1o">   u:$term</pre></span></li> <li>\n\t\t\t\t\t\t\t\tPassword <span><pre class="svelte-12hns1o">   p:$term</pre></span></li> <li>\n\t\t\t\t\t\t\t\tDomain <span><pre class="svelte-12hns1o">   d:$term</pre></span></li> <li>\n\t\t\t\t\t\t\t\tEmail <span><pre class="svelte-12hns1o">   e:$term</pre></span></li></ul></div></div>',h(n,"class","container")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class st extends U{constructor(t){super(),B(this,t,null,at,o,[])}}function ot(e){var n,r,a,s,o,c,p,$,v,b,y,w,k,x,_,E,q,L,A=e.result.username,T=e.result.domain,N=e.result.password;return{c(){n=d("tr"),r=d("td"),a=d("a"),s=f(A),p=m(),$=d("td"),v=d("a"),b=f(T),k=m(),x=d("td"),_=d("a"),E=f(N),h(a,"href",o="/username/"+e.result.username),h(v,"href",y="/domain/"+e.result.domain),h(_,"href",q="/password/"+e.result.password)},m(t,e){i(t,n,e),l(n,r),l(r,a),l(a,s),c=Y.call(null,a)||{},l(n,p),l(n,$),l($,v),l(v,b),w=Y.call(null,v)||{},l(n,k),l(n,x),l(x,_),l(_,E),L=Y.call(null,_)||{}},p(t,e){t.result&&A!==(A=e.result.username)&&g(s,A),t.result&&o!==(o="/username/"+e.result.username)&&h(a,"href",o),t.result&&T!==(T=e.result.domain)&&g(b,T),t.result&&y!==(y="/domain/"+e.result.domain)&&h(v,"href",y),t.result&&N!==(N=e.result.password)&&g(E,N),t.result&&q!==(q="/password/"+e.result.password)&&h(_,"href",q)},i:t,o:t,d(t){t&&u(n),c&&"function"==typeof c.destroy&&c.destroy(),w&&"function"==typeof w.destroy&&w.destroy(),L&&"function"==typeof L.destroy&&L.destroy()}}}function ct(t,e,n){let{result:r}=e;return t.$set=(t=>{"result"in t&&n("result",r=t.result)}),{result:r}}class lt extends U{constructor(t){super(),B(this,t,ct,ot,o,["result"])}}function it(t){var e,n,r,a,s;return{c(){e=d("li"),n=d("a"),(r=d("i")).textContent="chevron_left",h(r,"class","material-icons"),h(n,"href",a=t.$location+"?page="+(t.page-1)),h(e,"class","waves-effect")},m(t,a){i(t,e,a),l(e,n),l(n,r),s=Y.call(null,n)||{}},p(t,e){(t.$location||t.page)&&a!==(a=e.$location+"?page="+(e.page-1))&&h(n,"href",a)},d(t){t&&u(e),s&&"function"==typeof s.destroy&&s.destroy()}}}function ut(e){var n;return{c(){(n=d("li")).innerHTML='<a><i class="material-icons">chevron_left</i></a>',h(n,"class","disabled")},m(t,e){i(t,n,e)},p:t,d(t){t&&u(n)}}}function pt(t){var e,n,r,a,s;return{c(){e=d("li"),n=d("a"),(r=d("i")).textContent="chevron_right",h(r,"class","material-icons"),h(n,"href",a=t.$location+"?page="+(t.page+1)),h(e,"class","waves-effect")},m(t,a){i(t,e,a),l(e,n),l(n,r),s=Y.call(null,n)||{}},p(t,e){(t.$location||t.page)&&a!==(a=e.$location+"?page="+(e.page+1))&&h(n,"href",a)},d(t){t&&u(e),s&&"function"==typeof s.destroy&&s.destroy()}}}function dt(e){var n;return{c(){(n=d("li")).innerHTML='<a><i class="material-icons">chevron_right </i></a>',h(n,"class","disabled")},m(t,e){i(t,n,e)},p:t,d(t){t&&u(n)}}}function ft(e){var n,r,a,s,o,c,p,$;function v(t){return 1===t.page||null==t.page?ut:it}var b=v(e),y=b(e);function w(t){return null==t.page?dt:pt}var k=w(e),x=k(e);return{c(){n=d("div"),r=d("div"),a=d("ul"),y.c(),s=m(),o=d("li"),c=d("a"),p=f(e.page),$=m(),x.c(),h(c,"href","#!"),h(o,"class","active"),h(a,"class","pagination"),h(r,"class","center-align"),h(n,"class","row")},m(t,e){i(t,n,e),l(n,r),l(r,a),y.m(a,null),l(a,s),l(a,o),l(o,c),l(c,p),l(a,$),x.m(a,null)},p(t,e){b===(b=v(e))&&y?y.p(t,e):(y.d(1),(y=b(e))&&(y.c(),y.m(a,s))),t.page&&g(p,e.page),k===(k=w(e))&&x?x.p(t,e):(x.d(1),(x=k(e))&&(x.c(),x.m(a,null)))},i:t,o:t,d(t){t&&u(n),y.d(),x.d()}}}function mt(t,e,n){let r;c(t,V,t=>{n("$location",r=t)});let{page:a}=e;return t.$set=(t=>{"page"in t&&n("page",a=t.page)}),{page:a,$location:r}}class $t extends U{constructor(t){super(),B(this,t,mt,ft,o,["page"])}}function ht(t,e,n){const r=Object.create(t);return r.result=e[n],r}function gt(t){var e,n=new lt({props:{result:t.result}});return{c(){n.$$.fragment.c()},m(t,r){j(n,t,r),e=!0},p(t,e){var r={};t.results&&(r.result=e.result),n.$set(r)},i(t){e||(P(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function vt(t){for(var e,n,r,a,s,o,c=new $t({props:{page:t.page}}),f=t.results,$=[],h=0;h<f.length;h+=1)$[h]=gt(ht(t,f,h));const g=t=>H($[t],1,1,()=>{$[t]=null});return{c(){c.$$.fragment.c(),e=m(),n=d("table"),(r=d("thead")).innerHTML="<tr><th>Usernames</th> <th>Domains</th> <th>Passwords</th></tr>",a=m(),s=d("tbody");for(var t=0;t<$.length;t+=1)$[t].c()},m(t,u){j(c,t,u),i(t,e,u),i(t,n,u),l(n,r),l(n,a),l(n,s);for(var p=0;p<$.length;p+=1)$[p].m(s,null);o=!0},p(t,e){var n={};if(t.page&&(n.page=e.page),c.$set(n),t.results){f=e.results;for(var r=0;r<f.length;r+=1){const n=ht(e,f,r);$[r]?($[r].p(t,n),P($[r],1)):($[r]=gt(n),$[r].c(),P($[r],1),$[r].m(s,null))}for(D(),r=f.length;r<$.length;r+=1)g(r);O()}},i(t){if(!o){P(c.$$.fragment,t);for(var e=0;e<f.length;e+=1)P($[e]);o=!0}},o(t){H(c.$$.fragment,t),$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)H($[t]);o=!1},d(t){S(c,t),t&&(u(e),u(n)),p($,t)}}}function bt(t,e,n){let r;c(t,W,t=>{n("$querystring",r=t)});let a,{results:s}=e;return t.$set=(t=>{"results"in t&&n("results",s=t.results)}),t.$$.update=((t={$querystring:1})=>{t.$querystring&&n("page",a=parseInt(r.split("=")[1])||1)}),{results:s,page:a}}class yt extends U{constructor(t){super(),B(this,t,bt,vt,o,["results"])}}function wt(e){var n;return{c(){(n=d("div")).innerHTML='<div class="indeterminate"></div>',h(n,"class","progress")},m(t,e){i(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class kt extends U{constructor(t){super(),B(this,t,null,wt,o,[])}}const xt="http://localhost:4567";function _t(e){var n,r,a=e.error.message;return{c(){n=d("p"),r=f(a),v(n,"color","red")},m(t,e){i(t,n,e),l(n,r)},p(t,e){t.endpoint&&a!==(a=e.error.message)&&g(r,a)},i:t,o:t,d(t){t&&u(n)}}}function Et(t){var e,n=new yt({props:{results:t.results}});return{c(){n.$$.fragment.c()},m(t,r){j(n,t,r),e=!0},p(t,e){var r={};(t.apiGet||t.endpoint)&&(r.results=e.results),n.$set(r)},i(t){e||(P(n.$$.fragment,t),e=!0)},o(t){H(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function qt(e){var n,r=new kt({});return{c(){r.$$.fragment.c()},m(t,e){j(r,t,e),n=!0},p:t,i(t){n||(P(r.$$.fragment,t),n=!0)},o(t){H(r.$$.fragment,t),n=!1},d(t){S(r,t)}}}function Lt(t){var n,r,a,s,o,c,p,v,b,y=t.$location.split("/")[2];let w={ctx:t,current:null,token:null,pending:qt,then:Et,catch:_t,value:"results",error:"error",blocks:[,,,]};return M(v=At(t.endpoint),w),{c(){n=d("div"),r=d("div"),a=d("h4"),s=f("results for "),o=f(y),c=m(),p=$(),w.block.c(),h(a,"class",""),h(r,"class","col s12 center-align"),h(n,"class","row")},m(t,e){i(t,n,e),l(n,r),l(r,a),l(a,s),l(a,o),i(t,c,e),i(t,p,e),w.block.m(t,w.anchor=e),w.mount=(()=>p.parentNode),w.anchor=p,b=!0},p(n,r){t=r,b&&!n.$location||y===(y=t.$location.split("/")[2])||g(o,y),w.ctx=t,"endpoint"in n&&v!==(v=At(t.endpoint))&&M(v,w)||w.block.p(n,e(e({},t),w.resolved))},i(t){b||(P(w.block),b=!0)},o(t){for(let t=0;t<3;t+=1){H(w.blocks[t])}b=!1},d(t){t&&(u(n),u(c),u(p)),w.block.d(t),w.token=null,w=null}}}async function At(t){const e=await fetch(`${xt}${t}`);return await e.json()}function Tt(t,e,n){let r;c(t,V,t=>{n("$location",r=t)});let{endpoint:a}=e;return t.$set=(t=>{"endpoint"in t&&n("endpoint",a=t.endpoint)}),{endpoint:a,$location:r}}class Nt extends U{constructor(t){super(),B(this,t,Tt,Lt,o,["endpoint"])}}function Ct(t){var e,n,r=new Nt({props:{endpoint:t.endpoint}});return{c(){e=d("div"),r.$$.fragment.c(),h(e,"class","container")},m(t,a){i(t,e,a),j(r,e,null),n=!0},p(t,e){var n={};t.endpoint&&(n.endpoint=e.endpoint),r.$set(n)},i(t){n||(P(r.$$.fragment,t),n=!0)},o(t){H(r.$$.fragment,t),n=!1},d(t){t&&u(e),S(r)}}}function Dt(t,e,n){let r;c(t,W,t=>{n("$querystring",r=t)});let a,{params:s={}}=e;return t.$set=(t=>{"params"in t&&n("params",s=t.params)}),t.$$.update=((t={params:1,$querystring:1})=>{(t.params||t.$querystring)&&n("endpoint",a=`/passwords/${s.password}?${r}`)}),{params:s,endpoint:a}}function Ot(t){var e,n,r=new Nt({props:{endpoint:t.endpoint}});return{c(){e=d("div"),r.$$.fragment.c(),h(e,"class","container")},m(t,a){i(t,e,a),j(r,e,null),n=!0},p(t,e){var n={};t.endpoint&&(n.endpoint=e.endpoint),r.$set(n)},i(t){n||(P(r.$$.fragment,t),n=!0)},o(t){H(r.$$.fragment,t),n=!1},d(t){t&&u(e),S(r)}}}function Pt(t,e,n){let r;c(t,W,t=>{n("$querystring",r=t)});let a,{params:s={}}=e;return t.$set=(t=>{"params"in t&&n("params",s=t.params)}),t.$$.update=((t={params:1,$querystring:1})=>{(t.params||t.$querystring)&&n("endpoint",a=`/usernames/${s.name}?${r}`)}),{params:s,endpoint:a}}function Ht(t){var e,n,r=new Nt({props:{endpoint:t.endpoint}});return{c(){e=d("div"),r.$$.fragment.c(),h(e,"class","container")},m(t,a){i(t,e,a),j(r,e,null),n=!0},p(t,e){var n={};t.endpoint&&(n.endpoint=e.endpoint),r.$set(n)},i(t){n||(P(r.$$.fragment,t),n=!0)},o(t){H(r.$$.fragment,t),n=!1},d(t){t&&u(e),S(r)}}}function Mt(t,e,n){let r;c(t,W,t=>{n("$querystring",r=t)});let a,{params:s={}}=e;return t.$set=(t=>{"params"in t&&n("params",s=t.params)}),t.$$.update=((t={params:1,$querystring:1})=>{(t.params||t.$querystring)&&n("endpoint",a=`/domains/${s.domain}?${r}`)}),{params:s,endpoint:a}}function jt(t,e,n){const r=Object.create(t);return r.breach=e[n],r}function St(e){var n,r,a=e.error.message;return{c(){n=d("p"),r=f(a),v(n,"color","red")},m(t,e){i(t,n,e),l(n,r)},p(t,e){t.email&&a!==(a=e.error.message)&&g(r,a)},i:t,o:t,d(t){t&&u(n)}}}function It(e){for(var n,r,a,s,o,c,f=e.results,$=[],g=0;g<f.length;g+=1)$[g]=Bt(jt(e,f,g));return{c(){(n=d("div")).innerHTML='<div class="col s12 center-align"><h4 class>breach data</h4></div>',r=m(),a=d("table"),(s=d("thead")).innerHTML="<tr><th>Name</th> <th>Domain</th> <th>Date</th> <th>Count</th></tr>",o=m(),c=d("tbody");for(var t=0;t<$.length;t+=1)$[t].c();h(n,"class","row")},m(t,e){i(t,n,e),i(t,r,e),i(t,a,e),l(a,s),l(a,o),l(a,c);for(var u=0;u<$.length;u+=1)$[u].m(c,null)},p(t,e){if(t.apiGet||t.email){f=e.results;for(var n=0;n<f.length;n+=1){const r=jt(e,f,n);$[n]?$[n].p(t,r):($[n]=Bt(r),$[n].c(),$[n].m(c,null))}for(;n<$.length;n+=1)$[n].d(1);$.length=f.length}},i:t,o:t,d(t){t&&(u(n),u(r),u(a)),p($,t)}}}function Bt(t){var e,n,r,a,s,o,c,p,$,h,v,b,y,w=t.breach.Title,k=t.breach.Domain,x=t.breach.Date,_=Number(t.breach.Count).toLocaleString();return{c(){e=d("tr"),n=d("td"),r=f(w),a=m(),s=d("td"),o=f(k),c=m(),p=d("td"),$=f(x),h=m(),v=d("td"),b=f(_),y=m()},m(t,u){i(t,e,u),l(e,n),l(n,r),l(e,a),l(e,s),l(s,o),l(e,c),l(e,p),l(p,$),l(e,h),l(e,v),l(v,b),l(e,y)},p(t,e){t.email&&w!==(w=e.breach.Title)&&g(r,w),t.email&&k!==(k=e.breach.Domain)&&g(o,k),t.email&&x!==(x=e.breach.Date)&&g($,x),t.email&&_!==(_=Number(e.breach.Count).toLocaleString())&&g(b,_)},d(t){t&&u(e)}}}function Ut(e){var n,r=new kt({});return{c(){r.$$.fragment.c()},m(t,e){j(r,t,e),n=!0},p:t,i(t){n||(P(r.$$.fragment,t),n=!0)},o(t){H(r.$$.fragment,t),n=!1},d(t){S(r,t)}}}function zt(t){var n,r,a;let s={ctx:t,current:null,token:null,pending:Ut,then:It,catch:St,value:"results",error:"error",blocks:[,,,]};return M(r=Gt(`/breaches/${t.email}`),s),{c(){n=$(),s.block.c()},m(t,e){i(t,n,e),s.block.m(t,s.anchor=e),s.mount=(()=>n.parentNode),s.anchor=n,a=!0},p(n,a){t=a,s.ctx=t,"email"in n&&r!==(r=Gt(`/breaches/${t.email}`))&&M(r,s)||s.block.p(n,e(e({},t),s.resolved))},i(t){a||(P(s.block),a=!0)},o(t){for(let t=0;t<3;t+=1){H(s.blocks[t])}a=!1},d(t){t&&u(n),s.block.d(t),s.token=null,s=null}}}async function Gt(t){const e=await fetch(`${xt}${t}`);return await e.json()}function Rt(t,e,n){let{email:r}=e;return t.$set=(t=>{"email"in t&&n("email",r=t.email)}),{email:r}}class Ft extends U{constructor(t){super(),B(this,t,Rt,zt,o,["email"])}}function Jt(t){var e,n,r,a=new Nt({props:{endpoint:t.endpoint}}),s=new Ft({props:{email:t.email}});return{c(){e=d("div"),a.$$.fragment.c(),n=m(),s.$$.fragment.c(),h(e,"class","container")},m(t,o){i(t,e,o),j(a,e,null),l(e,n),j(s,e,null),r=!0},p(t,e){var n={};t.endpoint&&(n.endpoint=e.endpoint),a.$set(n);var r={};t.email&&(r.email=e.email),s.$set(r)},i(t){r||(P(a.$$.fragment,t),P(s.$$.fragment,t),r=!0)},o(t){H(a.$$.fragment,t),H(s.$$.fragment,t),r=!1},d(t){t&&u(e),S(a),S(s)}}}function Kt(t,e,n){let r;c(t,W,t=>{n("$querystring",r=t)});let a,s,{params:o={}}=e;return t.$set=(t=>{"params"in t&&n("params",o=t.params)}),t.$$.update=((t={params:1,email:1,$querystring:1})=>{t.params&&n("email",a=o.email),(t.email||t.$querystring)&&n("endpoint",s=`/emails/${a}?${r}`)}),{params:o,email:a,endpoint:s}}function Qt(t){var e,n,r,a,s,o,c,p=t.params.wild,$=new st({});return{c(){e=d("div"),n=d("div"),r=d("div"),a=f("Unable to find: "),s=f(p),o=m(),$.$$.fragment.c(),h(r,"class","card-panel red lighten-2 center-align svelte-1pozbuo"),h(r,"id","error"),h(n,"class","row"),h(e,"class","container")},m(t,u){i(t,e,u),l(e,n),l(n,r),l(r,a),l(r,s),i(t,o,u),j($,t,u),c=!0},p(t,e){c&&!t.params||p===(p=e.params.wild)||g(s,p)},i(t){c||(P($.$$.fragment,t),c=!0)},o(t){H($.$$.fragment,t),c=!1},d(t){t&&(u(e),u(o)),S($,t)}}}function Vt(t,e,n){let{params:r}=e;return t.$set=(t=>{"params"in t&&n("params",r=t.params)}),{params:r}}const Wt={"/":st,"/password/:password":class extends U{constructor(t){super(),B(this,t,Dt,Ct,o,["params"])}},"/username/:name":class extends U{constructor(t){super(),B(this,t,Pt,Ot,o,["params"])}},"/domain/:domain":class extends U{constructor(t){super(),B(this,t,Mt,Ht,o,["params"])}},"/email/:email":class extends U{constructor(t){super(),B(this,t,Kt,Jt,o,["params"])}},"*":class extends U{constructor(t){super(),B(this,t,Vt,Qt,o,["params"])}}};function Xt(t){var e,n,r,a=new rt({}),s=new tt({props:{routes:Wt}});return{c(){e=d("body"),a.$$.fragment.c(),n=m(),s.$$.fragment.c()},m(t,o){i(t,e,o),j(a,e,null),l(e,n),j(s,e,null),r=!0},p(t,e){var n={};t.routes&&(n.routes=Wt),s.$set(n)},i(t){r||(P(a.$$.fragment,t),P(s.$$.fragment,t),r=!0)},o(t){H(a.$$.fragment,t),H(s.$$.fragment,t),r=!1},d(t){t&&u(e),S(a),S(s)}}}return new class extends U{constructor(t){super(),B(this,t,null,Xt,o,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
