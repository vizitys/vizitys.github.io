function C(){}function ct(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function F(){return Object.create(null)}function E(t){t.forEach(Q)}function U(t){return typeof t=="function"}function Nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let k;function Tt(t,e){return k||(k=document.createElement("a")),k.href=e,t===k.href}function ot(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return C;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function kt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function At(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?ct(n.ctx.slice(),t[1](i(e))):n.ctx}function St(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Ct(t,e,n,i,s,o){if(s){const r=V(e,n,i,o);t.p(r,s)}}function Mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ht(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}let j=!1;function ut(){j=!0}function at(){j=!1}function ft(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=u?s+1:ft(1,s,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<o.length&&r[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(r[c],f)}}function dt(t,e){if(j){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function mt(t,e,n){j&&!n?dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function Dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Lt(){return G(" ")}function Pt(){return G("")}function Bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function qt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function pt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function et(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Gt(t,e,n){return et(t,e,n,X)}function Rt(t,e,n){return et(t,e,n,Y)}function yt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function zt(t){return yt(t," ")}function W(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Ft(t,e){const n=W(t,"HTML_TAG_START",0),i=W(t,"HTML_TAG_END",n);if(n===i)return new I(void 0,e);Z(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new I(o,e)}function Wt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function It(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function gt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Jt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class xt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Y(n.nodeName):this.e=X(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class I extends xt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}}function Kt(t,e){return new t(e)}let w;function $(t){w=t}function v(){if(!w)throw new Error("Function called outside component initialization");return w}function Qt(t){v().$$.on_mount.push(t)}function Ut(t){v().$$.after_update.push(t)}function Vt(){const t=v();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=gt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Xt(t,e){return v().$$.context.set(t,e),e}function Yt(t){return v().$$.context.get(t)}function Zt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],J=[],A=[],K=[],nt=Promise.resolve();let q=!1;function it(){q||(q=!0,nt.then(st))}function te(){return it(),nt}function O(t){A.push(t)}const B=new Set;let x=0;function st(){if(x!==0)return;const t=w;do{try{for(;x<b.length;){const e=b[x];x++,$(e),bt(e.$$)}}catch(e){throw b.length=0,x=0,e}for($(null),b.length=0,x=0;J.length;)J.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];B.has(n)||(B.add(n),n())}A.length=0}while(b.length);for(;K.length;)K.pop()();q=!1,B.clear(),$(t)}function bt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const S=new Set;let g;function ee(){g={r:0,c:[],p:g}}function ne(){g.r||E(g.c),g=g.p}function rt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function $t(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ie(t,e){$t(t,1,1,()=>{e.delete(t.key)})}function se(t,e,n,i,s,o,r,l,c,u,f,d){let _=t.length,m=o.length,h=_;const H={};for(;h--;)H[t[h].key]=h;const N=[],D=new Map,L=new Map;for(h=m;h--;){const a=d(s,o,h),p=n(a);let y=r.get(p);y?i&&y.p(a,e):(y=u(p,a),y.c()),D.set(p,N[h]=y),p in H&&L.set(p,Math.abs(h-H[p]))}const R=new Set,z=new Set;function P(a){rt(a,1),a.m(l,f),r.set(a.key,a),f=a.first,m--}for(;_&&m;){const a=N[m-1],p=t[_-1],y=a.key,T=p.key;a===p?(f=a.first,_--,m--):D.has(T)?!r.has(y)||R.has(y)?P(a):z.has(T)?_--:L.get(y)>L.get(T)?(z.add(y),P(a)):(R.add(T),_--):(c(p,r),_--)}for(;_--;){const a=t[_];D.has(a.key)||c(a,r)}for(;m;)P(N[m-1]);return N}function re(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ce(t){return typeof t=="object"&&t!==null?t:{}}function oe(t){t&&t.c()}function le(t,e){t&&t.l(e)}function wt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||O(()=>{const r=t.$$.on_mount.map(Q).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),o.forEach(O)}function Et(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(b.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,s,o,r,l=[-1]){const c=w;$(t);const u=t.$$={fragment:null,ctx:[],props:o,update:C,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return u.ctx&&s(u.ctx[d],u.ctx[d]=h)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](h),f&&vt(t,d)),_}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ut();const d=pt(e.target);u.fragment&&u.fragment.l(d),d.forEach(M)}else u.fragment&&u.fragment.c();e.intro&&rt(t.$$.fragment),wt(t,e.target,e.anchor,e.customElement),at(),st()}$(c)}class ae{$destroy(){Et(this,1),this.$destroy=C}$on(e,n){if(!U(n))return C;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{se as $,le as A,wt as B,Et as C,Jt as D,dt as E,At as F,Ct as G,Mt as H,St as I,Y as J,Rt as K,ct as L,jt as M,kt as N,Tt as O,Ht as P,Dt as Q,re as R,ae as S,ce as T,Yt as U,I as V,Ft as W,Vt as X,Xt as Y,Bt as Z,qt as _,Lt as a,E as a0,ie as a1,Zt as a2,mt as b,zt as c,$t as d,Pt as e,ne as f,rt as g,M as h,ue as i,Ut as j,X as k,Gt as l,pt as m,C as n,Qt as o,Ot as p,It as q,G as r,Nt as s,te as t,yt as u,Wt as v,ee as w,J as x,Kt as y,oe as z};
