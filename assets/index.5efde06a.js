var ye=Object.defineProperty,ve=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var oe=(t,a,r)=>a in t?ye(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,f=(t,a)=>{for(var r in a||(a={}))se.call(a,r)&&oe(t,r,a[r]);if(K)for(var r of K(a))le.call(a,r)&&oe(t,r,a[r]);return t},F=(t,a)=>ve(t,Ce(a));var V=(t,a)=>{var r={};for(var l in t)se.call(t,l)&&a.indexOf(l)<0&&(r[l]=t[l]);if(t!=null&&K)for(var l of K(t))a.indexOf(l)<0&&le.call(t,l)&&(r[l]=t[l]);return r};import{W as Ee,c as we,a as Fe,b as re,u as ae,j as e,N as te,s as n,d as H,e as o,H as G,f as De,r as d,F as Se,g as Ae,h as $e,i as Le,L as pe,k as ke,B as Te,R as Ne,l as P,m as Re,n as Pe,P as Be}from"./vendor.dced31d7.js";const Me=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function r(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(i){if(i.ep)return;i.ep=!0;const c=r(i);fetch(i.href,c)}};Me();const Oe=Ee`
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
`;var me;const je={username:(me=sessionStorage.getItem("username"))!=null?me:null};function Ie(t=je,a){switch(a.type){case"LOGIN":{const r=a.payload.username;return sessionStorage.setItem("username",r),{username:r}}case"LOGOUT":return sessionStorage.removeItem("username"),{username:null};default:return t}}var ze=Ve();function Ve(){return we(Fe({session:Ie}))}var B=re(t=>({isAuthenticated:t.session.username!==null}))(_e);function _e({isAuthenticated:t,render:a}){const r=ae();if(t===!0&&r.pathname==="/"){const i=r.search.slice(1).replace(/&/g,"=").split("=").reduce((c,h,b,g)=>(b+1)/2===0?F(f({},c),{[g[b+1]]:h}):c,{});return e(te,{to:i.next_redirect||"/dashboard",replace:!0})}return t===!1&&r.pathname!=="/"?e(te,{to:`/?next_redirect=${r.pathname}`,replace:!0}):a}var W=n.div`
   padding: 0 4rem;

   display: grid;
   gap: 2.4rem;
`,q=n.h1``,ne=n.form`
   display: grid;
   gap: 2.4rem;
`,I=n.input.attrs({required:!0})`
   width: 100%;
   padding: 0.8rem;

   border: none;
   border-radius: 0.4rem;

   font-size: 1.8rem;
`,R=n.button`
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
`,Ue=re()(He);function He({dispatch:t}){const a=H();return o(Ge,{children:[e(G,{children:e("title",{children:"Entrar - Cidade Alta"})}),e(q,{children:"Entre na sua conta para prosseguir"}),o(ne,{onSubmit:l=>{l.preventDefault(),t({type:"LOGIN",payload:{username:l.currentTarget.elements.username.value}}),a("/dashboard")},children:[e(I,{name:"username",placeholder:"Usu\xE1rio",required:!0}),e(I,{name:"password",type:"password",placeholder:"Senha",required:!0}),e(We,{children:"Entrar"})]})]})}const Ge=n(W)`
   max-width: 500px;
`,We=n(R).attrs(t=>({type:"submit",textColor:"var(--c-white)",bgColor:"var(--c-blue-900)"}))`
   font-size: 2.4rem;
`;function he(t,a){return Intl.NumberFormat(t,{style:"currency",currency:a,minimumFractionDigits:2}).format}function qe(t={integer:{singular:"real",plural:"reais"},decimals:{singular:"centavo",plural:"centavos"},decimalUnion:"e"}){return function(a){const[r,l]=a.toFixed(2).split(".").map(Number),i=r===0?"":r===1?t.integer.singular:t.integer.plural,c=t.decimals&&(l===0&&r!==0?"":l===1?t.decimals.singular:t.decimals.plural);return`${r>0?`${r} ${i}`:""} ${t.decimalUnion&&(r>0&&l>0?t.decimalUnion:"")} ${l>0?`${l} ${c}`:""}`.trim()}}function Ye(t){return(a,r)=>t?a-r:r-a}function ce(t){return(a,r)=>t?a.localeCompare(r,["pt-br"]):r.localeCompare(a,["pt-br"])}var L=Ke();function Ke(){const t=De.create({baseURL:{}.VITE_APP_API_URL});return F(f({},t),{async get(...a){try{const r=await t.get(...a);return[null,r]}catch(r){return[r,a]}},async post(...a){try{const r=await t.post(...a);return[null,r]}catch(r){return[r,a]}},async put(...a){try{const r=await t.put(...a);return[null,r]}catch(r){return[r,a]}},async delete(...a){try{const r=await t.delete(...a);return[null,r]}catch(r){return[r,a]}}})}var Qe=n.span.attrs({hidden:!0,"aria-hidden":!1})``,Xe=n.span.attrs({"aria-hidden":!0})``;function de(l){var i=l,{showAs:t,readAs:a}=i,r=V(i,["showAs","readAs"]);return o(Je,F(f({},r),{children:[e(Xe,{children:t}),e(Ze,{children:a})]}))}const Je=n.span`
   position: relative;
`,Ze=n.span`
   white-space: nowrap;

   visibility: hidden;
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
`;var et=re(void 0,t=>({dispatch:t}))(tt);function tt({dispatch:t}){const a=H(),[r,l]=d.exports.useState({name:!0,date:!0,penalty:!0,status:!0}),[i,c]=d.exports.useState(null),[h,b]=d.exports.useState([]),[g,x]=d.exports.useState([]),[C,y]=d.exports.useState({lastField:null,isAscendingMap:{name:null,date:null,penalty:null,status:null}});d.exports.useEffect(()=>{async function s(){const[S,T]=await Promise.all([L.get("/codigopenal"),L.get("/status")]),[A,$]=S,[w,N]=T;if(A||w){c({blockingRender:!0,message:"N\xE3o foi poss\xEDvel carregar os dados!"});return}const Y=E=>z=>new Date(E.dataCriacao).toLocaleDateString(["pt-br"],{dateStyle:z}),xe=$.data.flatMap(E=>({id:E.id,name:E.nome,date:Y(E)("short"),dateLabel:Y(E)("long"),penalty:E.multa,penaltyAsString:he(["pt-br"],"BRL")(E.multa),penaltyLabel:qe()(E.multa),status:N.data.find(({id:z})=>z===E.status).descricao})),ie=Array.from(xe).sort((E,z)=>ce(!0)(E.name,z.name));c(null),b(ie),x(ie)}s()},[]),d.exports.useEffect(()=>{const{lastField:s,isAscendingMap:S}=C;if(s===null)return;const T=S[s];if(T===null){x(h);return}x(A=>Array.from(A).sort((w,N)=>typeof w[s]=="number"?Ye(T)(w[s],N[s]):ce(T)(w[s],N[s])))},[C]);function D(){t({type:"LOGOUT"}),a("/")}function p(s){return S;function S(T){l(A=>F(f({},A),{[s]:!A[s]}))}}function u(s){return S;function S(T){y(({lastField:A,isAscendingMap:$})=>{const w=Object.fromEntries(Object.entries($).map(([N,Y])=>[N,!Y]));return{lastField:s,isAscendingMap:A!==s||$[s]===!1?F(f({},$),{[s]:null}):F(f({},$),{[s]:w[s]})}})}}function v(s){return S;async function S(T){if(c(null),confirm("Deseja realmente apagar esse c\xF3digo penal?")===!1)return;x(w=>w.filter(N=>s!==N.id));const[$]=await L.delete(`/codigopenal/${s}`);$&&(x(g),c({blockingRender:!1,message:o(d.exports.Fragment,{children:["N\xE3o foi poss\xEDvel deletar esse c\xF3digo penal de nome"," ",e("strong",{children:g.find(w=>s===w.id).name})]})}))}}const m=s=>r[s]===!1,k=s=>C.lastField===s?C.isAscendingMap[s]:void 0;return o(rt,{children:[e(G,{children:e("title",{children:"C\xF3digos Penais - Cidade Alta"})}),e(q,{children:"Dashboard"}),o(at,{children:[e(Q,{label:"Nome",name:"field-visibility",value:"name",isChecked:r.name,onToggle:p("name")}),e(Q,{label:"Data",name:"field-visibility",value:"date",isChecked:r.date,onToggle:p("date")}),e(Q,{label:"Multa",name:"field-visibility",value:"penalty",isChecked:r.penalty,onToggle:p("penalty")}),e(Q,{label:"Status",name:"field-visibility",value:"status",isChecked:r.status,onToggle:p("status")})]}),(i==null?void 0:i.message)&&e("p",{children:i.message}),e(Qe,{id:"table-description",children:"Tabela de c\xF3digos penais"}),o(ot,{"aria-describedby":"table-description",children:[e("thead",{children:o(ue,{children:[e(_,{hidden:m("name"),isAscending:k("name"),onClick:u("name"),children:"Nome"}),e(_,{hidden:m("date"),isAscending:k("date"),onClick:u("date"),children:"Data"}),e(_,{hidden:m("penalty"),isAscending:k("penalty"),onClick:u("penalty"),children:"Multa"}),e(_,{hidden:m("status"),isAscending:k("status"),onClick:u("status"),children:"Status"}),e(_,{hidden:m("name")&&m("date")&&m("penalty")&&m("status")})]})}),e("tbody",{children:(i==null?void 0:i.blockingRender)!==!0&&g.map(s=>o(ue,{"aria-atomic":"true",children:[e(U,{hidden:m("name"),children:s.name}),e(U,{hidden:m("date"),title:s.dateLabel,"aria-hidden":"false",children:e(de,{readAs:s.dateLabel,showAs:s.date})}),e(U,{hidden:m("penalty"),title:s.penaltyLabel,"aria-hidden":"false",children:e(de,{readAs:s.penaltyLabel,showAs:s.penaltyAsString})}),e(U,{hidden:m("status"),children:s.status}),e(U,{hidden:m("name")&&m("date")&&m("penalty")&&m("status"),children:o(st,{children:[e(ge,{onClick:v(s.id),children:e(Se,{}),title:`Deletar '${s.name}'`}),e(ee,{to:`./view/${s.id}`,children:e(Ae,{}),title:`Ver mais sobre '${s.name}'`}),e(ee,{to:`./edit/${s.id}`,children:e($e,{}),title:`Editar '${s.name}'`})]})})]},s.id))})]}),o(lt,{children:[o(ct,{onClick:D,children:[e(Le,{})," Sair"]}),e(ee,{to:"./create",children:"Adicionar"})]})]})}const rt=n(W)``,at=n.form`
   justify-content: center;
   display: flex;
   gap: 2.4rem;
`,nt=n(R).attrs({as:"label"})`
   user-select: none;

   &:focus-within {
      outline-style: auto;
   }
`,it=n.input.attrs({type:"checkbox"})`
   width: 0;
`,Q=t=>o(nt,{textColor:"var(--c-white)",bgColor:t.isChecked?"var(--c-blue-500)":"var(--c-gray-400)",children:[e(it,{name:t.value,checked:t.isChecked,onChange:t.onToggle}),t.label]}),ge=n(R).attrs({textColor:"var(--c-white)",bgColor:"green"})`
   font-size: 1.6rem;
`,ee=n(ge).attrs({as:pe})`
   text-decoration: unset;

   justify-self: right;
`,ot=n.table`
   border-collapse: collapse;

   text-align: left;
`,ue=n.tr``,_=n.th`
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
`,U=n.td`
   padding: 0.8rem;
   border: 1px solid var(--c-gray-600);
`,st=n.div`
   display: grid;
   gap: 0.4rem;

   @media (min-width: 768px) {
      display: flex;
   }
`,lt=n.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`,ct=n(R).attrs({textColor:"var(--c-white)",bgColor:"firebrick"})`
   font-size: 2.4rem;

   display: flex;
   align-items: center;
   gap: 0.8rem;
`,dt=n(R).attrs({as:pe,textColor:"var(--c-white)",bgColor:"var(--c-blue-500)"})`
   text-decoration: unset;

   justify-self: left;
`;function Z(r){var l=r,{to:t}=l,a=V(l,["to"]);return o(dt,F(f({to:t},a),{children:[e(ke,{})," Voltar"]}))}Z.defaultProps={to:".."};function ut({}){const t=Number(ae().pathname.split("/").slice(-1)[0]),a=H(),[r,l]=d.exports.useState(null),[i,c]=d.exports.useState({});return d.exports.useEffect(()=>{async function h(){const[b,g]=await Promise.all([L.get(`/codigopenal/${t}`),L.get("/status")]),[x,C]=b,[y,D]=g;if(x||y){l({blockingRender:!0,message:e(()=>{const[u,v]=d.exports.useState(5);return d.exports.useEffect(()=>{const m=setInterval(v.bind(null,k=>k-1),1e3);return()=>{clearTimeout(m)}},[]),d.exports.useEffect(()=>{u>=0||a("/dashboard")},[u]),o(d.exports.Fragment,{children:[e("div",{children:"N\xE3o foi poss\xEDvel carregar os dados ou esse c\xF3digo penal n\xE3o existe!"}),e("br",{}),o("div",{children:["Voc\xEA ser\xE1 redirecionado em"," ",o("strong",{children:[u," segundos"]}),"."]})]})},{})});return}c(()=>{const p=C.data,u=D.data;return{id:p.id,name:p.nome,date:new Date(p.dataCriacao).toLocaleDateString(["pt-br"]),description:p.descricao,penaltyAsString:he(["pt-br"],"BRL")(p.multa),jailTime:p.tempoPrisao,status:u.find(({id:v})=>v===p.status).descricao}})}h()},[]),o(mt,{children:[e(G,{children:e("title",{children:"Visualizar C\xF3digo Penal - Cidade Alta"})}),r!=null&&r.blockingRender?e("p",{children:r.message}):i.name&&o(d.exports.Fragment,{children:[e(Z,{to:"../.."}),o(q,{children:["C\xF3digo penal - ",i.name]}),e(pt,{children:o("tbody",{children:[o(M,{children:[e(O,{children:"Nome"}),e(j,{children:i.name})]}),o(M,{children:[e(O,{children:"Descri\xE7\xE3o"}),e(j,{children:i.description})]}),o(M,{children:[e(O,{children:"Data de Cria\xE7\xE3o"}),e(j,{children:i.date})]}),o(M,{children:[e(O,{children:"Multa"}),e(j,{children:i.penaltyAsString})]}),o(M,{children:[e(O,{children:"Tempo de Pris\xE3o"}),o(j,{children:[i.jailTime," dias"]})]}),o(M,{children:[e(O,{children:"Status"}),e(j,{children:i.status})]})]})})]})]})}const mt=n(W)`
   max-width: 750px;
`,pt=n.table`
   border-collapse: collapse;

   color: black;

   text-align: left;
`,M=n.tr`
   color: var(--c-white);
   background-color: var(--c-blue-500);

   &:nth-child(2n) {
      color: var(--c-blue-900);
      background-color: var(--c-blue-50);
   }
`,O=n.th`
   width: 15ch;
   padding: 0.8rem;

   border: 5px solid var(--c-gray-900);

   vertical-align: initial;

   user-select: none;

   position: relative;
`,j=n.td`
   padding: 0.8rem;

   border: 5px solid var(--c-gray-900);

   text-align: justify;
`;function ht({}){const t=Number(ae().pathname.split("/").slice(-1)[0]),a=H(),[r,l]=d.exports.useState(null),[i,c]=d.exports.useState({});d.exports.useEffect(()=>{async function b(){const[g,x]=await Promise.all([L.get(`/codigopenal/${t}`),L.get("/status")]),[C,y]=g,[D,p]=x;if(C||D){l({blockingRender:!0,message:e(()=>{const[v,m]=d.exports.useState(5);return d.exports.useEffect(()=>{const k=setInterval(m.bind(null,s=>s-1),1e3);return()=>{clearTimeout(k)}},[]),d.exports.useEffect(()=>{v>=0||a("/dashboard")},[v]),o(d.exports.Fragment,{children:[e("div",{children:"N\xE3o foi poss\xEDvel carregar os dados ou esse c\xF3digo penal n\xE3o existe!"}),e("br",{}),o("div",{children:["Voc\xEA ser\xE1 redirecionado em"," ",o("strong",{children:[v," segundos"]}),"."]})]})},{})});return}c(()=>{const u=y.data,v=p.data;return{id:u.id,name:u.nome,description:u.descricao,penalty:u.multa,jailTime:u.tempoPrisao,status:v.find(({id:m})=>m===u.status).descricao}})}b()},[]);async function h(b){b.preventDefault();const x=b.currentTarget.elements,C=Object.entries(x).filter(([u])=>Number.isNaN(Number(u))),y=Object.fromEntries(C.map(([u,v])=>[u,v.value])),D=F(f({},y),{multa:Number(y.multa),tempoPrisao:Number(y.tempoPrisao)}),[p]=await L.put(`/codigopenal/${i.id}`,D);if(p){l({blockingRender:!1,message:"N\xE3o foi poss\xEDvel atualizar o c\xF3digo penal, tente novamente."});return}a("/dashboard")}return o(gt,{children:[e(G,{children:e("title",{children:"Editar C\xF3digo Penal - Cidade Alta"})}),r&&r.blockingRender?e("p",{children:r.message}):i.name&&o(d.exports.Fragment,{children:[e(Z,{to:"../.."}),o(q,{children:["Editando - ",i.name]}),r&&e(ft,{children:r.message}),o(bt,{onSubmit:h,children:[o(xt,{children:[e(X,{label:"Nome",name:"nome",defaultValue:i.name}),e(X,{label:"Descri\xE7\xE3o",type:"text-area",name:"descricao",defaultValue:i.description}),e(X,{label:"Multa (R$)",type:"number",name:"multa",defaultValue:i.penalty,min:0}),e(X,{label:"Dias Preso",type:"number",name:"tempoPrisao",defaultValue:i.jailTime,min:0})]}),o(yt,{children:[e(wt,{children:"Limpar altera\xE7\xF5es"}),e(Ft,{children:"Confirmar edi\xE7\xE3o"})]})]})]})]})}const gt=n(W)`
   max-width: 450px;
   width: 100%;
`,ft=n.p`
   color: red;

   text-weight: bold;
`,bt=n(ne)`
   display: grid;
   gap: 2.4rem;
`,xt=n.div`
   display: grid;
   gap: 1.6rem;
`,yt=n.div`
   display: flex;
   gap: 0.8rem;
`,vt=n.label`
   user-select: none;

   display: grid;
   gap: 0.4rem;
`,Ct=n(I).attrs({as:"textarea",rows:3})``,Et=n(I)``,X=i=>{var c=i,{label:t,type:a,min:r}=c,l=V(c,["label","type","min"]);return o(vt,{children:[o("span",{children:[t,":"]}),a==="text-area"?e(Ct,f({},l)):e(Et,f({type:a,min:r},l))]})},fe=n(R).attrs({textColor:"var(--c-white)",bgColor:"green"})`
   flex: 1;
   font-size: 1.8rem;
   font-weight: bold;
`,wt=n(fe).attrs({type:"reset",bgColor:"firebrick"})``,Ft=n(fe).attrs({type:"submit"})``;function Dt({}){const t=H(),[a,r]=d.exports.useState(null);async function l(i){i.preventDefault();const h=i.currentTarget.elements,b=Object.entries(h).filter(([y])=>Number.isNaN(Number(y))),g=Object.fromEntries(b.map(([y,D])=>[y,D.value])),x=F(f({},g),{dataCriacao:new Date().toISOString(),multa:Number(g.multa),tempoPrisao:Number(g.tempoPrisao)}),[C]=await L.post("/codigopenal",x);if(C){r("N\xE3o foi poss\xEDvel criar o c\xF3digo penal, tente novamente.");return}t("/dashboard")}return o(St,{children:[e(G,{children:e("title",{children:"Criar C\xF3digo Penal - Cidade Alta"})}),e(Z,{}),e(q,{children:"Criar C\xF3digo Penal"}),a&&e(At,{children:a}),o($t,{onSubmit:l,children:[o(Lt,{children:[e(J,{label:"Nome",name:"nome"}),e(J,{label:"Descri\xE7\xE3o",type:"text-area",name:"descricao"}),e(J,{label:"Multa (R$)",type:"number",name:"multa",min:0}),e(J,{label:"Dias Preso",type:"number",name:"tempoPrisao",min:0})]}),o(kt,{children:[e(Pt,{children:"Limpar Campos"}),e(Bt,{children:"Criar"})]})]})]})}const St=n(W)`
   max-width: 450px;
   width: 100%;
`,At=n.p`
   color: red;

   text-weight: bold;
`,$t=n(ne)`
   display: grid;
   gap: 2.4rem;
`,Lt=n.div`
   display: grid;
   gap: 1.6rem;
`,kt=n.div`
   display: flex;
   gap: 0.8rem;
`,Tt=n.label`
   user-select: none;

   display: grid;
   gap: 0.4rem;
`,Nt=n(I).attrs({as:"textarea",rows:3})``,Rt=n(I)``,J=i=>{var c=i,{label:t,type:a,min:r}=c,l=V(c,["label","type","min"]);return o(Tt,{children:[o("span",{children:[t,":"]}),a==="text-area"?e(Nt,f({},l)):e(Rt,f({type:a,min:r},l))]})},be=n(R).attrs({textColor:"var(--c-white)",bgColor:"green"})`
   flex: 1;
   font-size: 1.8rem;
   font-weight: bold;
`,Pt=n(be).attrs({type:"reset",bgColor:"firebrick"})``,Bt=n(be).attrs({type:"submit"})``;function Mt({}){return e(Te,{children:o(Ne,{children:[e(P,{path:"/",element:e(B,{render:e(Ue,{})})}),e(P,{path:"/dashboard",element:e(B,{render:e(et,{})})}),e(P,{path:"/dashboard/view/*",element:e(B,{render:e(ut,{})})}),e(P,{path:"/dashboard/edit/*",element:e(B,{render:e(ht,{})})}),e(P,{path:"/dashboard/create",element:e(B,{render:e(Dt,{})})}),e(P,{path:"*",element:e(B,{render:e(te,{to:"/dashboard",replace:!0})})})]})})}const Ot=n.div`
   max-width: 100%;
   min-height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
`;Re.render(e(Pe.StrictMode,{children:e(Ot,{children:o(Be,{store:ze,children:[e(Oe,{}),e(Mt,{})]})})}),document.getElementById("root"));
