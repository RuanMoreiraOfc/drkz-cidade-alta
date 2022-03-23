var ve=Object.defineProperty,Ce=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var se=(t,r,a)=>r in t?ve(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,f=(t,r)=>{for(var a in r||(r={}))le.call(r,a)&&se(t,a,r[a]);if(K)for(var a of K(r))ce.call(r,a)&&se(t,a,r[a]);return t},D=(t,r)=>Ce(t,Ee(r));var V=(t,r)=>{var a={};for(var l in t)le.call(t,l)&&r.indexOf(l)<0&&(a[l]=t[l]);if(t!=null&&K)for(var l of K(t))r.indexOf(l)<0&&ce.call(t,l)&&(a[l]=t[l]);return a};import{W as we,c as De,a as Fe,b as re,u as ne,j as e,N as ae,s as i,d as H,e as o,H as G,f as Se,r as u,F as Ae,g as $e,h as Le,i as ke,L as pe,k as Te,B as Ne,R as Re,l as P,m as Pe,n as Be,P as Me}from"./vendor.dced31d7.js";const je=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}};je();const Oe=we`
  :root {
    --ff-heading: Roboto, sans-serif;
    --ff-body: Roboto, sans-serif;

    --c-white: #FFF;
    --c-black: #222;

    --c-blue-900: #1E3E5F;
    --c-blue-500: #3770AC;
    --c-blue-50: #C6E7F8;
    --c-gray-900: #181B23;
    --c-gray-800: #1F2029;
    --c-gray-700: #353646;
    --c-gray-600: #4B4D63;
    --c-gray-500: #616480;
    --c-gray-400: #797D9A;
    --c-gray-300: #9699B0;
    --c-gray-200: #B3B5C6;
    --c-gray-100: #D1D2DC;
    --c-gray-50: #EEEEF2;

    font-size: 37.5%; // 6px

    @media (min-width: 425px) {
      font-size: 56.25%; // 8px
    }

    @media (min-width: 768px) {
      font-size: 56.25%; // 9px
    }

    @media (min-width: 1024px) {
      font-size: 62.5%; // 10px
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: auto;
    outline-style: unset;
    outline-offset: 0.5rem;

    transition-duration: 200ms;
    transition-property: outline-offset;

    &:focus, &:focus-visible, &:focus-within {
      outline-offset: 0;
    }

    &:focus-visible {
      outline-style: auto;
    }
  }

  body {
    background-color: var(--c-gray-900);
    color: var(--c-gray-50);
    font-family: var(--ff-body);

    font-size: 2rem;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--ff-heading);
  }

  input, textarea {
    font-family: var(--ff-body);
  }

  nav {
    display: contents;
  }

  ul {
    listStyle: none;

    display: contents;
  }

  li {
    listStyle: none;
  }
`;var me;const Ie={username:(me=sessionStorage.getItem("username"))!=null?me:null};function ze(t=Ie,r){switch(r.type){case"LOGIN":{const a=r.payload.username;return sessionStorage.setItem("username",a),{username:a}}case"LOGOUT":return sessionStorage.removeItem("username"),{username:null};default:return t}}var Ve=_e();function _e(){return De(Fe({session:ze}))}var B=re(t=>({isAuthenticated:t.session.username!==null}))(Ue);function Ue({isAuthenticated:t,render:r}){const a=ne();if(t===!0&&a.pathname==="/"){const n=a.search.slice(1).replace(/&/g,"=").split("=").reduce((c,h,y,g)=>(y+1)/2===0?D(f({},c),{[g[y+1]]:h}):c,{});return e(ae,{to:n.next_redirect||"/dashboard",replace:!0})}return t===!1&&a.pathname!=="/"?e(ae,{to:`/?next_redirect=${a.pathname}`,replace:!0}):r}var W=i.div`
   padding: 0 4rem;

   display: grid;
   gap: 2.4rem;
`,q=i.h1``,ie=i.form`
   display: grid;
   gap: 2.4rem;
`,I=i.input.attrs({required:!0})`
   width: 100%;
   padding: 0.8rem;

   border: none;
   border-radius: 0.4rem;

   font-size: 1.8rem;
`,R=i.button`
   padding: 0.8rem;

   border-radius: 0.4rem;
   border: none;

   color: ${t=>t.textColor};
   background-color: ${t=>t.bgColor};

   cursor: pointer;

   &:hover {
      filter: brightness(1.2);
   }

   &:active {
      filter: brightness(1.4);
   }
`,He=re()(Ge);function Ge({dispatch:t}){const r=H();return o(We,{children:[e(G,{children:e("title",{children:"Entrar - Cidade Alta"})}),e(q,{children:"Entre na sua conta para prosseguir"}),o(ie,{onSubmit:l=>{l.preventDefault(),t({type:"LOGIN",payload:{username:l.currentTarget.elements.username.value}}),r("/dashboard")},children:[e(I,{name:"username",placeholder:"Usu\xE1rio",required:!0}),e(I,{name:"password",type:"password",placeholder:"Senha",required:!0}),e(qe,{children:"Entrar"})]})]})}const We=i(W)`
   max-width: 500px;
`,qe=i(R).attrs(t=>({type:"submit",textColor:"var(--c-white)",bgColor:"var(--c-blue-900)"}))`
   font-size: 2.4rem;
`;function he(t,r){return Intl.NumberFormat(t,{style:"currency",currency:r,minimumFractionDigits:2}).format}function ge(t={integer:{singular:"real",plural:"reais"},decimals:{singular:"centavo",plural:"centavos"},decimalUnion:"e"}){return function(r){const[a,l]=r.toFixed(2).split(".").map(Number),n=a===0?"":a===1?t.integer.singular:t.integer.plural,c=t.decimals&&(l===0&&a!==0?"":l===1?t.decimals.singular:t.decimals.plural);return`${a>0?`${a} ${n}`:""} ${t.decimalUnion&&(a>0&&l>0?t.decimalUnion:"")} ${l>0?`${l} ${c}`:""}`.trim()}}function Ye(t){return(r,a)=>t?r-a:a-r}function de(t){return(r,a)=>t?r.localeCompare(a,["pt-br"]):a.localeCompare(r,["pt-br"])}var L=Ke();function Ke(){const t=Se.create({baseURL:"https://my-json-server.typicode.com/cidadealta/exercise"});return D(f({},t),{async get(...r){try{const a=await t.get(...r);return[null,a]}catch(a){return[a,r]}},async post(...r){try{const a=await t.post(...r);return[null,a]}catch(a){return[a,r]}},async put(...r){try{const a=await t.put(...r);return[null,a]}catch(a){return[a,r]}},async delete(...r){try{const a=await t.delete(...r);return[null,a]}catch(a){return[a,r]}}})}var Qe=i.span.attrs({hidden:!0,"aria-hidden":!1})``,Xe=i.span.attrs({"aria-hidden":!0})``;function Z(l){var n=l,{showAs:t,readAs:r}=n,a=V(n,["showAs","readAs"]);return o(Je,D(f({},a),{children:[e(Xe,{children:t}),e(Ze,{children:r})]}))}const Je=i.span`
   position: relative;
`,Ze=i.span.attrs({"aria-hidden":!1})`
   white-space: nowrap;

   visibility: hidden;
   overflow: hidden;

   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
`;var et=re(void 0,t=>({dispatch:t}))(tt);function tt({dispatch:t}){const r=H(),[a,l]=u.exports.useState({name:!0,date:!0,penalty:!0,status:!0}),[n,c]=u.exports.useState(null),[h,y]=u.exports.useState([]),[g,x]=u.exports.useState([]),[C,v]=u.exports.useState({lastField:null,isAscendingMap:{name:null,date:null,penalty:null,status:null}});u.exports.useEffect(()=>{async function s(){const[S,T]=await Promise.all([L.get("/codigopenal"),L.get("/status")]),[A,$]=S,[w,N]=T;if(A||w){c({blockingRender:!0,message:"N\xE3o foi poss\xEDvel carregar os dados!"});return}const Y=E=>z=>new Date(E.dataCriacao).toLocaleDateString(["pt-br"],{dateStyle:z}),xe=$.data.flatMap(E=>({id:E.id,name:E.nome,date:Y(E)("short"),dateLabel:Y(E)("long"),penalty:E.multa,penaltyAsString:he(["pt-br"],"BRL")(E.multa),penaltyLabel:ge()(E.multa),status:N.data.find(({id:z})=>z===E.status).descricao})),oe=Array.from(xe).sort((E,z)=>de(!0)(E.name,z.name));c(null),y(oe),x(oe)}s()},[]),u.exports.useEffect(()=>{const{lastField:s,isAscendingMap:S}=C;if(s===null)return;const T=S[s];if(T===null){x(h);return}x(A=>Array.from(A).sort((w,N)=>typeof w[s]=="number"?Ye(T)(w[s],N[s]):de(T)(w[s],N[s])))},[C]);function F(){t({type:"LOGOUT"}),r("/")}function p(s){return S;function S(T){l(A=>D(f({},A),{[s]:!A[s]}))}}function m(s){return S;function S(T){v(({lastField:A,isAscendingMap:$})=>{const w=Object.fromEntries(Object.entries($).map(([N,Y])=>[N,!Y]));return{lastField:s,isAscendingMap:A!==s||$[s]===!1?D(f({},$),{[s]:null}):D(f({},$),{[s]:w[s]})}})}}function b(s){return S;async function S(T){if(c(null),confirm("Deseja realmente apagar esse c\xF3digo penal?")===!1)return;x(w=>w.filter(N=>s!==N.id));const[$]=await L.delete(`/codigopenal/${s}`);$&&(x(g),c({blockingRender:!1,message:o(u.exports.Fragment,{children:["N\xE3o foi poss\xEDvel deletar esse c\xF3digo penal de nome"," ",e("strong",{children:g.find(w=>s===w.id).name})]})}))}}const d=s=>a[s]===!1,k=s=>C.lastField===s?C.isAscendingMap[s]:void 0;return o(at,{children:[e(G,{children:e("title",{children:"C\xF3digos Penais - Cidade Alta"})}),e(q,{children:"Dashboard"}),o(rt,{children:[e(Q,{label:"Nome",name:"field-visibility",value:"name",isChecked:a.name,onToggle:p("name")}),e(Q,{label:"Data",name:"field-visibility",value:"date",isChecked:a.date,onToggle:p("date")}),e(Q,{label:"Multa",name:"field-visibility",value:"penalty",isChecked:a.penalty,onToggle:p("penalty")}),e(Q,{label:"Status",name:"field-visibility",value:"status",isChecked:a.status,onToggle:p("status")})]}),(n==null?void 0:n.message)&&e("p",{children:n.message}),e(Qe,{id:"table-description",children:"Tabela de c\xF3digos penais"}),o(ot,{"aria-describedby":"table-description",children:[e("thead",{children:o(ue,{children:[e(_,{hidden:d("name"),isAscending:k("name"),onClick:m("name"),children:"Nome"}),e(_,{hidden:d("date"),isAscending:k("date"),onClick:m("date"),children:"Data"}),e(_,{hidden:d("penalty"),isAscending:k("penalty"),onClick:m("penalty"),children:"Multa"}),e(_,{hidden:d("status"),isAscending:k("status"),onClick:m("status"),children:"Status"}),e(_,{hidden:d("name")&&d("date")&&d("penalty")&&d("status")})]})}),e("tbody",{children:(n==null?void 0:n.blockingRender)!==!0&&g.map(s=>o(ue,{"aria-atomic":"true",children:[e(U,{hidden:d("name"),children:s.name}),e(U,{hidden:d("date"),title:s.dateLabel,children:e(Z,{readAs:s.dateLabel,showAs:s.date})}),e(U,{hidden:d("penalty"),title:s.penaltyLabel,children:e(Z,{readAs:s.penaltyLabel,showAs:s.penaltyAsString})}),e(U,{hidden:d("status"),children:s.status}),e(U,{hidden:d("name")&&d("date")&&d("penalty")&&d("status"),children:o(st,{children:[e(be,{onClick:b(s.id),children:e(Ae,{}),title:`Deletar '${s.name}'`}),e(te,{to:`./view/${s.id}`,children:e($e,{}),title:`Ver mais sobre '${s.name}'`}),e(te,{to:`./edit/${s.id}`,children:e(Le,{}),title:`Editar '${s.name}'`})]})})]},s.id))})]}),o(lt,{children:[o(ct,{onClick:F,children:[e(ke,{})," Sair"]}),e(te,{to:"./create",children:"Adicionar"})]})]})}const at=i(W)``,rt=i.form`
   justify-content: center;
   display: flex;
   gap: 2.4rem;
`,nt=i(R).attrs({as:"label"})`
   user-select: none;

   &:focus-within {
      outline-style: auto;
   }
`,it=i.input.attrs({type:"checkbox"})`
   width: 0;
`,Q=t=>o(nt,{textColor:"var(--c-white)",bgColor:t.isChecked?"var(--c-blue-500)":"var(--c-gray-400)",children:[e(it,{name:t.value,checked:t.isChecked,onChange:t.onToggle}),t.label]}),be=i(R).attrs({textColor:"var(--c-white)",bgColor:"green"})`
   font-size: 1.6rem;
`,te=i(be).attrs({as:pe})`
   text-decoration: unset;

   justify-self: right;
`,ot=i.table`
   border-collapse: collapse;

   text-align: left;
`,ue=i.tr``,_=i.th`
   padding: 0.8rem;
   padding-right: 3.2rem;

   border: 1px solid var(--c-gray-400);

   color: var(--c-blue-500);
   background-color: var(--c-gray-800);

   cursor: pointer;
   user-select: none;

   position: relative;

   &:before,
   &:after {
      content: '';

      width: 0;
      height: 0;
      margin: 0 auto;

      border: 0.8rem solid transparent;
      border-top-color: var(--c-white);
      // border-bottom-color: var(--c-white);

      text-align: center;

      display: block;
      transform-origin: center;

      position: absolute;
      right: 0.8rem;
   }

   &:before {
      opacity: ${t=>t.isAscending===void 0||t.isAscending===!0?"0":"1"};

      transform: rotateX(180deg) translateY(50%);
   }

   &:after {
      opacity: ${t=>t.isAscending===void 0||t.isAscending===!1?"0":"1"};

      transform: translateY(-50%);
   }
`,U=i.td`
   padding: 0.8rem;
   border: 1px solid var(--c-gray-600);
`,st=i.div`
   display: grid;
   gap: 0.4rem;

   @media (min-width: 768px) {
      display: flex;
   }
`,lt=i.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`,ct=i(R).attrs({textColor:"var(--c-white)",bgColor:"firebrick"})`
   font-size: 2.4rem;

   display: flex;
   align-items: center;
   gap: 0.8rem;
`,dt=i(R).attrs({as:pe,textColor:"var(--c-white)",bgColor:"var(--c-blue-500)"})`
   text-decoration: unset;

   justify-self: left;
`;function ee(a){var l=a,{to:t}=l,r=V(l,["to"]);return o(dt,D(f({to:t},r),{children:[e(Te,{})," Voltar"]}))}ee.defaultProps={to:".."};function ut({}){const t=Number(ne().pathname.split("/").slice(-1)[0]),r=H(),[a,l]=u.exports.useState(null),[n,c]=u.exports.useState({});return u.exports.useEffect(()=>{async function h(){const[y,g]=await Promise.all([L.get(`/codigopenal/${t}`),L.get("/status")]),[x,C]=y,[v,F]=g;if(x||v){l({blockingRender:!0,message:e(()=>{const[m,b]=u.exports.useState(5);return u.exports.useEffect(()=>{const d=setInterval(b.bind(null,k=>k-1),1e3);return()=>{clearTimeout(d)}},[]),u.exports.useEffect(()=>{m>=0||r("/dashboard")},[m]),o(u.exports.Fragment,{children:[e("div",{children:"N\xE3o foi poss\xEDvel carregar os dados ou esse c\xF3digo penal n\xE3o existe!"}),e("br",{}),o("div",{children:["Voc\xEA ser\xE1 redirecionado em"," ",o("strong",{children:[m," segundos"]}),"."]})]})},{})});return}c(()=>{const p=C.data,m=F.data,b=d=>new Date(p.dataCriacao).toLocaleDateString(["pt-br"],{dateStyle:d});return{id:p.id,name:p.nome,date:b("short"),dateLabel:b("long"),description:p.descricao,penaltyAsString:he(["pt-br"],"BRL")(p.multa),penaltyLabel:ge()(p.multa),jailTime:p.tempoPrisao,status:m.find(({id:d})=>d===p.status).descricao}})}h()},[]),o(mt,{children:[e(G,{children:e("title",{children:"Visualizar C\xF3digo Penal - Cidade Alta"})}),a!=null&&a.blockingRender?e("p",{children:a.message}):n.name&&o(u.exports.Fragment,{children:[e(ee,{to:"../.."}),o(q,{id:"table-description",children:["C\xF3digo penal - ",n.name]}),e(pt,{"aria-describedby":"table-description",children:o("tbody",{children:[o(M,{children:[e(j,{children:"Nome"}),e(O,{children:n.name})]}),o(M,{children:[e(j,{children:"Descri\xE7\xE3o"}),e(O,{children:n.description})]}),o(M,{children:[e(j,{children:"Data de Cria\xE7\xE3o"}),e(O,{children:e(Z,{showAs:n.date,readAs:n.dateLabel})})]}),o(M,{children:[e(j,{children:"Multa"}),e(O,{children:e(Z,{showAs:n.penaltyAsString,readAs:n.penaltyLabel})})]}),o(M,{children:[e(j,{children:"Tempo de Pris\xE3o"}),o(O,{children:[n.jailTime," dias"]})]}),o(M,{children:[e(j,{children:"Status"}),e(O,{children:n.status})]})]})})]})]})}const mt=i(W)`
   max-width: 750px;
`,pt=i.table`
   border-collapse: collapse;

   color: black;

   text-align: left;
`,M=i.tr`
   color: var(--c-white);
   background-color: var(--c-blue-500);

   &:nth-child(2n) {
      color: var(--c-blue-900);
      background-color: var(--c-blue-50);
   }
`,j=i.th`
   width: 15ch;
   padding: 0.8rem;

   border: 5px solid var(--c-gray-900);

   vertical-align: initial;

   user-select: none;

   position: relative;
`,O=i.td`
   padding: 0.8rem;

   border: 5px solid var(--c-gray-900);

   text-align: justify;
`;function ht({}){const t=Number(ne().pathname.split("/").slice(-1)[0]),r=H(),[a,l]=u.exports.useState(null),[n,c]=u.exports.useState({});u.exports.useEffect(()=>{async function y(){const[g,x]=await Promise.all([L.get(`/codigopenal/${t}`),L.get("/status")]),[C,v]=g,[F,p]=x;if(C||F){l({blockingRender:!0,message:e(()=>{const[b,d]=u.exports.useState(5);return u.exports.useEffect(()=>{const k=setInterval(d.bind(null,s=>s-1),1e3);return()=>{clearTimeout(k)}},[]),u.exports.useEffect(()=>{b>=0||r("/dashboard")},[b]),o(u.exports.Fragment,{children:[e("div",{children:"N\xE3o foi poss\xEDvel carregar os dados ou esse c\xF3digo penal n\xE3o existe!"}),e("br",{}),o("div",{children:["Voc\xEA ser\xE1 redirecionado em"," ",o("strong",{children:[b," segundos"]}),"."]})]})},{})});return}c(()=>{const m=v.data,b=p.data;return{id:m.id,name:m.nome,description:m.descricao,penalty:m.multa,jailTime:m.tempoPrisao,status:b.find(({id:d})=>d===m.status).descricao}})}y()},[]);async function h(y){y.preventDefault();const x=y.currentTarget.elements,C=Object.entries(x).filter(([m])=>Number.isNaN(Number(m))),v=Object.fromEntries(C.map(([m,b])=>[m,b.value])),F=D(f({},v),{multa:Number(v.multa),tempoPrisao:Number(v.tempoPrisao)}),[p]=await L.put(`/codigopenal/${n.id}`,F);if(p){l({blockingRender:!1,message:"N\xE3o foi poss\xEDvel atualizar o c\xF3digo penal, tente novamente."});return}r("/dashboard")}return o(gt,{children:[e(G,{children:e("title",{children:"Editar C\xF3digo Penal - Cidade Alta"})}),a&&a.blockingRender?e("p",{children:a.message}):n.name&&o(u.exports.Fragment,{children:[e(ee,{to:"../.."}),o(q,{children:["Editando - ",n.name]}),a&&e(bt,{children:a.message}),o(ft,{onSubmit:h,children:[o(yt,{children:[e(X,{label:"Nome",name:"nome",defaultValue:n.name}),e(X,{label:"Descri\xE7\xE3o",type:"text-area",name:"descricao",defaultValue:n.description}),e(X,{label:"Multa (R$)",type:"number",name:"multa",defaultValue:n.penalty,min:0}),e(X,{label:"Dias Preso",type:"number",name:"tempoPrisao",defaultValue:n.jailTime,min:0})]}),o(xt,{children:[e(wt,{children:"Limpar altera\xE7\xF5es"}),e(Dt,{children:"Confirmar edi\xE7\xE3o"})]})]})]})]})}const gt=i(W)`
   max-width: 450px;
   width: 100%;
`,bt=i.p`
   color: red;

   text-weight: bold;
`,ft=i(ie)`
   display: grid;
   gap: 2.4rem;
`,yt=i.div`
   display: grid;
   gap: 1.6rem;
`,xt=i.div`
   display: flex;
   gap: 0.8rem;
`,vt=i.label`
   user-select: none;

   display: grid;
   gap: 0.4rem;
`,Ct=i(I).attrs({as:"textarea",rows:3})``,Et=i(I)``,X=n=>{var c=n,{label:t,type:r,min:a}=c,l=V(c,["label","type","min"]);return o(vt,{children:[o("span",{children:[t,":"]}),r==="text-area"?e(Ct,f({},l)):e(Et,f({type:r,min:a},l))]})},fe=i(R).attrs({textColor:"var(--c-white)",bgColor:"green"})`
   flex: 1;
   font-size: 1.8rem;
   font-weight: bold;
`,wt=i(fe).attrs({type:"reset",bgColor:"firebrick"})``,Dt=i(fe).attrs({type:"submit"})``;function Ft({}){const t=H(),[r,a]=u.exports.useState(null);async function l(n){n.preventDefault();const h=n.currentTarget.elements,y=Object.entries(h).filter(([v])=>Number.isNaN(Number(v))),g=Object.fromEntries(y.map(([v,F])=>[v,F.value])),x=D(f({},g),{dataCriacao:new Date().toISOString(),multa:Number(g.multa),tempoPrisao:Number(g.tempoPrisao)}),[C]=await L.post("/codigopenal",x);if(C){a("N\xE3o foi poss\xEDvel criar o c\xF3digo penal, tente novamente.");return}t("/dashboard")}return o(St,{children:[e(G,{children:e("title",{children:"Criar C\xF3digo Penal - Cidade Alta"})}),e(ee,{}),e(q,{children:"Criar C\xF3digo Penal"}),r&&e(At,{children:r}),o($t,{onSubmit:l,children:[o(Lt,{children:[e(J,{label:"Nome",name:"nome"}),e(J,{label:"Descri\xE7\xE3o",type:"text-area",name:"descricao"}),e(J,{label:"Multa (R$)",type:"number",name:"multa",min:0}),e(J,{label:"Dias Preso",type:"number",name:"tempoPrisao",min:0})]}),o(kt,{children:[e(Pt,{children:"Limpar Campos"}),e(Bt,{children:"Criar"})]})]})]})}const St=i(W)`
   max-width: 450px;
   width: 100%;
`,At=i.p`
   color: red;

   text-weight: bold;
`,$t=i(ie)`
   display: grid;
   gap: 2.4rem;
`,Lt=i.div`
   display: grid;
   gap: 1.6rem;
`,kt=i.div`
   display: flex;
   gap: 0.8rem;
`,Tt=i.label`
   user-select: none;

   display: grid;
   gap: 0.4rem;
`,Nt=i(I).attrs({as:"textarea",rows:3})``,Rt=i(I)``,J=n=>{var c=n,{label:t,type:r,min:a}=c,l=V(c,["label","type","min"]);return o(Tt,{children:[o("span",{children:[t,":"]}),r==="text-area"?e(Nt,f({},l)):e(Rt,f({type:r,min:a},l))]})},ye=i(R).attrs({textColor:"var(--c-white)",bgColor:"green"})`
   flex: 1;
   font-size: 1.8rem;
   font-weight: bold;
`,Pt=i(ye).attrs({type:"reset",bgColor:"firebrick"})``,Bt=i(ye).attrs({type:"submit"})``;function Mt({}){return e(Ne,{basename:"/drkz-cidade-alta/",children:o(Re,{children:[e(P,{path:"/",element:e(B,{render:e(He,{})})}),e(P,{path:"/dashboard",element:e(B,{render:e(et,{})})}),e(P,{path:"/dashboard/view/*",element:e(B,{render:e(ut,{})})}),e(P,{path:"/dashboard/edit/*",element:e(B,{render:e(ht,{})})}),e(P,{path:"/dashboard/create",element:e(B,{render:e(Ft,{})})}),e(P,{path:"*",element:e(B,{render:e(ae,{to:"/dashboard",replace:!0})})})]})})}const jt=i.div`
   max-width: 100%;
   min-height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
`;Pe.render(e(Be.StrictMode,{children:e(jt,{children:o(Me,{store:Ve,children:[e(Oe,{}),e(Mt,{})]})})}),document.getElementById("root"));
