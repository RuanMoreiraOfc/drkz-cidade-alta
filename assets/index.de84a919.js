var ve=Object.defineProperty,Ee=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var ie=(e,n,r)=>n in e?ve(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,b=(e,n)=>{for(var r in n||(n={}))le.call(n,r)&&ie(e,r,n[r]);if(Y)for(var r of Y(n))ce.call(n,r)&&ie(e,r,n[r]);return e},F=(e,n)=>Ee(e,we(n));var K=(e,n)=>{var r={};for(var l in e)le.call(e,l)&&n.indexOf(l)<0&&(r[l]=e[l]);if(e!=null&&Y)for(var l of Y(e))n.indexOf(l)<0&&ce.call(e,l)&&(r[l]=e[l]);return r};import{W as Fe,c as $e,a as De,b as re,u as ae,j as t,N as ne,s as o,d as U,e as s,H,f as Se,r as u,F as Ae,g as Le,h as ke,i as Te,L as pe,k as Ne,B as Re,R as Pe,l as P,m as Be,n as Me,o as je,P as Oe}from"./vendor.07dc27db.js";const Ie=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}};Ie();const ze={fonts:{family:{heading:"Roboto, sans-serif",body:"Roboto, sans-serif"}},colors:{white:"#FFF",black:"#222",blue:{s900:"#1E3E5F",s500:"#3770AC",s50:"#C6E7F8"},gray:{s900:"#181B23",s800:"#1F2029",s700:"#353646",s600:"#4B4D63",s500:"#616480",s400:"#797D9A",s300:"#9699B0",s200:"#B3B5C6",s100:"#D1D2DC",s50:"#EEEEF2"}}},_e=Fe`
  :root {
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
    background-color: ${e=>e.theme.colors.gray.s900};
    color: ${e=>e.theme.colors.gray.s50};
    font-family: ${e=>e.theme.fonts.family.body};

    font-size: 2rem;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${e=>e.theme.fonts.family.heading};
  }

  input, textarea {
    font-family: ${e=>e.theme.fonts.family.body};
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
`;var he;const Ve={username:(he=sessionStorage.getItem("username"))!=null?he:null};function Ue(e=Ve,n){switch(n.type){case"LOGIN":{const r=n.payload.username;return sessionStorage.setItem("username",r),{username:r}}case"LOGOUT":return sessionStorage.removeItem("username"),{username:null};default:return e}}var He=Ge();function Ge(){return $e(De({session:Ue}))}var B=re(e=>({isAuthenticated:e.session.username!==null}))(We);function We({isAuthenticated:e,render:n}){const r=ae();if(e===!0&&r.pathname==="/"){const a=r.search.slice(1).replace(/&/g,"=").split("=").reduce((c,p,x,g)=>(x+1)/2===0?F(b({},c),{[g[x+1]]:p}):c,{});return t(ne,{to:a.next_redirect||"/dashboard",replace:!0})}return e===!1&&r.pathname!=="/"?t(ne,{to:`/?next_redirect=${r.pathname}`,replace:!0}):n}var G=o.div`
   padding: 0 4rem;

   display: grid;
   gap: 2.4rem;
`,W=o.h1``,oe=o.form`
   display: grid;
   gap: 2.4rem;
`,I=o.input.attrs({required:!0})`
   width: 100%;
   padding: 0.8rem;

   border: none;
   border-radius: 0.4rem;

   font-size: 1.8rem;
`;const de=e=>typeof e=="function";var R=o.button.withConfig({shouldForwardProp:(e,n)=>n(e)})`
   padding: 0.8rem;

   border-radius: 0.4rem;
   border: none;

   color: ${e=>{const{textColor:n}=e;return de(n)?n(e):n}};
   background-color: ${e=>{const{bgColor:n}=e;return de(n)?n(e):n}};

   cursor: pointer;

   &:hover {
      filter: brightness(1.2);
   }

   &:active {
      filter: brightness(1.4);
   }
`,qe=re()(Ye);function Ye({dispatch:e}){const n=U();return s(Ke,{children:[t(H,{children:t("title",{children:"Entrar - Cidade Alta"})}),t(W,{children:"Entre na sua conta para prosseguir"}),s(oe,{onSubmit:l=>{l.preventDefault(),e({type:"LOGIN",payload:{username:l.currentTarget.elements.username.value}}),n("/dashboard")},children:[t(I,{name:"username",placeholder:"Usu\xE1rio",required:!0}),t(I,{name:"password",type:"password",placeholder:"Senha",required:!0}),t(Qe,{children:"Entrar"})]})]})}const Ke=o(G)`
   max-width: 500px;
`,Qe=o(R).attrs(({theme:e})=>({type:"submit",textColor:e.colors.white,bgColor:e.colors.blue.s900}))`
   font-size: 2.4rem;
`;function ge(e,n){return Intl.NumberFormat(e,{style:"currency",currency:n,minimumFractionDigits:2}).format}function fe(e={integer:{singular:"real",plural:"reais"},decimals:{singular:"centavo",plural:"centavos"},decimalUnion:"e"}){return function(n){const[r,l]=n.toFixed(2).split(".").map(Number),a=r===0?"":r===1?e.integer.singular:e.integer.plural,c=e.decimals&&(l===0&&r!==0?"":l===1?e.decimals.singular:e.decimals.plural);return`${r>0?`${r} ${a}`:""} ${e.decimalUnion&&(r>0&&l>0?e.decimalUnion:"")} ${l>0?`${l} ${c}`:""}`.trim()}}function Xe(e){return(n,r)=>e?n-r:r-n}function ue(e){return(n,r)=>e?n.localeCompare(r,["pt-br"]):r.localeCompare(n,["pt-br"])}var L=Je();function Je(){const e=Se.create({baseURL:"https://my-json-server.typicode.com/cidadealta/exercise"});return F(b({},e),{async get(...n){try{const r=await e.get(...n);return[null,r]}catch(r){return[r,n]}},async post(...n){try{const r=await e.post(...n);return[null,r]}catch(r){return[r,n]}},async put(...n){try{const r=await e.put(...n);return[null,r]}catch(r){return[r,n]}},async delete(...n){try{const r=await e.delete(...n);return[null,r]}catch(r){return[r,n]}}})}var Ze=o.span.attrs({hidden:!0,"aria-hidden":!1})``,et=o.span.attrs({"aria-hidden":!0})``;function Z(l){var a=l,{showAs:e,readAs:n}=a,r=K(a,["showAs","readAs"]);return s(tt,F(b({},r),{children:[t(et,{children:e}),t(nt,{children:n})]}))}const tt=o.span`
   position: relative;
`,nt=o.span.attrs({"aria-hidden":!1})`
   white-space: nowrap;

   visibility: hidden;
   overflow: hidden;

   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
`;var rt=re(void 0,e=>({dispatch:e}))(at);function at({dispatch:e}){const n=U(),[r,l]=u.exports.useState({name:!0,date:!0,penalty:!0,status:!0}),[a,c]=u.exports.useState(null),[p,x]=u.exports.useState([]),[g,y]=u.exports.useState([]),[v,C]=u.exports.useState({lastField:null,isAscendingMap:{name:null,date:null,penalty:null,status:null}});u.exports.useEffect(()=>{async function i(){const[D,T]=await Promise.all([L.get("/codigopenal"),L.get("/status")]),[S,A]=D,[w,N]=T;if(S||w){c({blockingRender:!0,message:"N\xE3o foi poss\xEDvel carregar os dados!"});return}const q=E=>z=>new Date(E.dataCriacao).toLocaleDateString(["pt-br"],{dateStyle:z}),Ce=A.data.flatMap(E=>({id:E.id,name:E.nome,date:q(E)("short"),dateLabel:q(E)("long"),penalty:E.multa,penaltyAsString:ge(["pt-br"],"BRL")(E.multa),penaltyLabel:fe()(E.multa),status:N.data.find(({id:z})=>z===E.status).descricao})),se=Array.from(Ce).sort((E,z)=>ue(!0)(E.name,z.name));c(null),x(se),y(se)}i()},[]),u.exports.useEffect(()=>{const{lastField:i,isAscendingMap:D}=v;if(i===null)return;const T=D[i];if(T===null){y(p);return}y(S=>Array.from(S).sort((w,N)=>typeof w[i]=="number"?Xe(T)(w[i],N[i]):ue(T)(w[i],N[i])))},[v]);function $(){e({type:"LOGOUT"}),n("/")}function h(i){return D;function D(T){l(S=>F(b({},S),{[i]:!S[i]}))}}function m(i){return D;function D(T){C(({lastField:S,isAscendingMap:A})=>{const w=Object.fromEntries(Object.entries(A).map(([N,q])=>[N,!q]));return{lastField:i,isAscendingMap:S!==i||A[i]===!1?F(b({},A),{[i]:null}):F(b({},A),{[i]:w[i]})}})}}function f(i){return D;async function D(T){if(c(null),confirm("Deseja realmente apagar esse c\xF3digo penal?")===!1)return;y(w=>w.filter(N=>i!==N.id));const[A]=await L.delete(`/codigopenal/${i}`);A&&(y(g),c({blockingRender:!1,message:s(u.exports.Fragment,{children:["N\xE3o foi poss\xEDvel deletar esse c\xF3digo penal de nome"," ",t("strong",{children:g.find(w=>i===w.id).name})]})}))}}const d=i=>r[i]===!1,k=i=>v.lastField===i?v.isAscendingMap[i]:void 0;return s(ot,{children:[t(H,{children:t("title",{children:"C\xF3digos Penais - Cidade Alta"})}),t(W,{children:"Dashboard"}),s(st,{children:[t(Q,{label:"Nome",name:"field-visibility",value:"name",isChecked:r.name,onToggle:h("name")}),t(Q,{label:"Data",name:"field-visibility",value:"date",isChecked:r.date,onToggle:h("date")}),t(Q,{label:"Multa",name:"field-visibility",value:"penalty",isChecked:r.penalty,onToggle:h("penalty")}),t(Q,{label:"Status",name:"field-visibility",value:"status",isChecked:r.status,onToggle:h("status")})]}),(a==null?void 0:a.message)&&t("p",{children:a.message}),t(Ze,{id:"table-description",children:"Tabela de c\xF3digos penais"}),s(ct,{"aria-describedby":"table-description",children:[t("thead",{children:s(me,{children:[t(_,{hidden:d("name"),isAscending:k("name"),onClick:m("name"),children:"Nome"}),t(_,{hidden:d("date"),isAscending:k("date"),onClick:m("date"),children:"Data"}),t(_,{hidden:d("penalty"),isAscending:k("penalty"),onClick:m("penalty"),children:"Multa"}),t(_,{hidden:d("status"),isAscending:k("status"),onClick:m("status"),children:"Status"}),t(_,{hidden:d("name")&&d("date")&&d("penalty")&&d("status")})]})}),t("tbody",{children:(a==null?void 0:a.blockingRender)!==!0&&g.map(i=>s(me,{"aria-atomic":"true",children:[t(V,{hidden:d("name"),children:i.name}),t(V,{hidden:d("date"),title:i.dateLabel,children:t(Z,{readAs:i.dateLabel,showAs:i.date})}),t(V,{hidden:d("penalty"),title:i.penaltyLabel,children:t(Z,{readAs:i.penaltyLabel,showAs:i.penaltyAsString})}),t(V,{hidden:d("status"),children:i.status}),t(V,{hidden:d("name")&&d("date")&&d("penalty")&&d("status"),children:s(dt,{children:[t(be,{onClick:f(i.id),children:t(Ae,{}),title:`Deletar '${i.name}'`}),t(te,{to:`./view/${i.id}`,children:t(Le,{}),title:`Ver mais sobre '${i.name}'`}),t(te,{to:`./edit/${i.id}`,children:t(ke,{}),title:`Editar '${i.name}'`})]})})]},i.id))})]}),s(ut,{children:[s(mt,{onClick:$,children:[t(Te,{})," Sair"]}),t(te,{to:"./create",children:"Adicionar"})]})]})}const ot=o(G)``,st=o.form`
   justify-content: center;
   display: flex;
   gap: 2.4rem;
`,it=o(R).attrs({as:"label"})`
   user-select: none;

   &:focus-within {
      outline-style: auto;
   }
`,lt=o.input.attrs({type:"checkbox"})`
   width: 0;
`,Q=e=>s(it,{textColor:({theme:n})=>n.colors.white,bgColor:({theme:n})=>e.isChecked?n.colors.blue.s500:n.colors.gray.s400,children:[t(lt,{name:e.value,checked:e.isChecked,onChange:e.onToggle}),e.label]}),be=o(R).attrs(({theme:e})=>({textColor:e.colors.white,bgColor:"green"}))`
   font-size: 1.6rem;
`,te=o(be).attrs({as:pe})`
   text-decoration: unset;

   justify-self: right;
`,ct=o.table`
   border-collapse: collapse;

   text-align: left;
`,me=o.tr``,_=o.th`
   padding: 0.8rem;
   padding-right: 3.2rem;

   border: 1px solid ${e=>e.theme.colors.gray.s400};

   color: ${e=>e.theme.colors.blue.s500};
   background-color: ${e=>e.theme.colors.gray.s800};

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
      border-top-color: ${e=>e.theme.colors.white};

      text-align: center;

      display: block;
      transform-origin: center;

      position: absolute;
      right: 0.8rem;
   }

   &:before {
      opacity: ${e=>e.isAscending===void 0||e.isAscending===!0?"0":"1"};

      transform: rotateX(180deg) translateY(50%);
   }

   &:after {
      opacity: ${e=>e.isAscending===void 0||e.isAscending===!1?"0":"1"};

      transform: translateY(-50%);
   }
`,V=o.td`
   padding: 0.8rem;
   border: 1px solid ${e=>e.theme.colors.gray.s600};
`,dt=o.div`
   display: grid;
   gap: 0.4rem;

   @media (min-width: 768px) {
      display: flex;
   }
`,ut=o.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`,mt=o(R).attrs(({theme:e})=>({textColor:e.colors.white,bgColor:"firebrick"}))`
   font-size: 2.4rem;

   display: flex;
   align-items: center;
   gap: 0.8rem;
`;function ee(e){return s(ht,F(b({},e),{children:[t(Ne,{})," Voltar"]}))}ee.defaultProps={to:".."};const ht=o(R).attrs(({theme:e})=>({as:pe,textColor:e.colors.white,bgColor:e.colors.blue.s500}))`
   text-decoration: unset;

   justify-self: left;
`;function pt({}){const e=Number(ae().pathname.split("/").slice(-1)[0]),n=U(),[r,l]=u.exports.useState(null),[a,c]=u.exports.useState({});return u.exports.useEffect(()=>{async function p(){const[x,g]=await Promise.all([L.get(`/codigopenal/${e}`),L.get("/status")]),[y,v]=x,[C,$]=g;if(y||C){l({blockingRender:!0,message:t(()=>{const[m,f]=u.exports.useState(5);return u.exports.useEffect(()=>{const d=setInterval(f.bind(null,k=>k-1),1e3);return()=>{clearTimeout(d)}},[]),u.exports.useEffect(()=>{m>=0||n("/dashboard")},[m]),s(u.exports.Fragment,{children:[t("div",{children:"N\xE3o foi poss\xEDvel carregar os dados ou esse c\xF3digo penal n\xE3o existe!"}),t("br",{}),s("div",{children:["Voc\xEA ser\xE1 redirecionado em"," ",s("strong",{children:[m," segundos"]}),"."]})]})},{})});return}c(()=>{const h=v.data,m=$.data,f=d=>new Date(h.dataCriacao).toLocaleDateString(["pt-br"],{dateStyle:d});return{id:h.id,name:h.nome,date:f("short"),dateLabel:f("long"),description:h.descricao,penaltyAsString:ge(["pt-br"],"BRL")(h.multa),penaltyLabel:fe()(h.multa),jailTime:h.tempoPrisao,status:m.find(({id:d})=>d===h.status).descricao}})}p()},[]),s(gt,{children:[t(H,{children:t("title",{children:"Visualizar C\xF3digo Penal - Cidade Alta"})}),r!=null&&r.blockingRender?t("p",{children:r.message}):a.name&&s(u.exports.Fragment,{children:[t(ee,{to:"../.."}),s(W,{id:"table-description",children:["C\xF3digo penal - ",a.name]}),t(ft,{"aria-describedby":"table-description",children:s("tbody",{children:[s(M,{children:[t(j,{children:"Nome"}),t(O,{children:a.name})]}),s(M,{children:[t(j,{children:"Descri\xE7\xE3o"}),t(O,{children:a.description})]}),s(M,{children:[t(j,{children:"Data de Cria\xE7\xE3o"}),t(O,{children:t(Z,{showAs:a.date,readAs:a.dateLabel})})]}),s(M,{children:[t(j,{children:"Multa"}),t(O,{children:t(Z,{showAs:a.penaltyAsString,readAs:a.penaltyLabel})})]}),s(M,{children:[t(j,{children:"Tempo de Pris\xE3o"}),s(O,{children:[a.jailTime," dias"]})]}),s(M,{children:[t(j,{children:"Status"}),t(O,{children:a.status})]})]})})]})]})}const gt=o(G)`
   max-width: 750px;
`,ft=o.table`
   border-collapse: collapse;

   color: black;

   text-align: left;
`,M=o.tr`
   color: ${e=>e.theme.colors.white};
   background-color: ${e=>e.theme.colors.blue.s500};

   &:nth-child(2n) {
      color: ${e=>e.theme.colors.blue.s900};
      background-color: ${e=>e.theme.colors.blue.s50};
   }
`,j=o.th`
   width: 15ch;
   padding: 0.8rem;

   border: 5px solid ${e=>e.theme.colors.gray.s900};

   vertical-align: initial;

   user-select: none;

   position: relative;
`,O=o.td`
   padding: 0.8rem;

   border: 5px solid ${e=>e.theme.colors.gray.s900};

   text-align: justify;
`;function bt({}){const e=Number(ae().pathname.split("/").slice(-1)[0]),n=U(),[r,l]=u.exports.useState(null),[a,c]=u.exports.useState({});u.exports.useEffect(()=>{async function x(){const[g,y]=await Promise.all([L.get(`/codigopenal/${e}`),L.get("/status")]),[v,C]=g,[$,h]=y;if(v||$){l({blockingRender:!0,message:t(()=>{const[f,d]=u.exports.useState(5);return u.exports.useEffect(()=>{const k=setInterval(d.bind(null,i=>i-1),1e3);return()=>{clearTimeout(k)}},[]),u.exports.useEffect(()=>{f>=0||n("/dashboard")},[f]),s(u.exports.Fragment,{children:[t("div",{children:"N\xE3o foi poss\xEDvel carregar os dados ou esse c\xF3digo penal n\xE3o existe!"}),t("br",{}),s("div",{children:["Voc\xEA ser\xE1 redirecionado em"," ",s("strong",{children:[f," segundos"]}),"."]})]})},{})});return}c(()=>{const m=C.data,f=h.data;return{id:m.id,name:m.nome,description:m.descricao,penalty:m.multa,jailTime:m.tempoPrisao,status:f.find(({id:d})=>d===m.status).descricao}})}x()},[]);async function p(x){x.preventDefault();const y=x.currentTarget.elements,v=Object.entries(y).filter(([m])=>Number.isNaN(Number(m))),C=Object.fromEntries(v.map(([m,f])=>[m,f.value])),$=F(b({},C),{multa:Number(C.multa),tempoPrisao:Number(C.tempoPrisao)}),[h]=await L.put(`/codigopenal/${a.id}`,$);if(h){l({blockingRender:!1,message:"N\xE3o foi poss\xEDvel atualizar o c\xF3digo penal, tente novamente."});return}n("/dashboard")}return s(xt,{children:[t(H,{children:t("title",{children:"Editar C\xF3digo Penal - Cidade Alta"})}),r&&r.blockingRender?t("p",{children:r.message}):a.name&&s(u.exports.Fragment,{children:[t(ee,{to:"../.."}),s(W,{children:["Editando - ",a.name]}),r&&t(yt,{children:r.message}),s(Ct,{onSubmit:p,children:[s(vt,{children:[t(X,{label:"Nome",name:"nome",defaultValue:a.name}),t(X,{label:"Descri\xE7\xE3o",type:"text-area",name:"descricao",defaultValue:a.description}),t(X,{label:"Multa (R$)",type:"number",name:"multa",defaultValue:a.penalty,min:0}),t(X,{label:"Dias Preso",type:"number",name:"tempoPrisao",defaultValue:a.jailTime,min:0})]}),s(Et,{children:[t(Dt,{children:"Limpar altera\xE7\xF5es"}),t(St,{children:"Confirmar edi\xE7\xE3o"})]})]})]})]})}const xt=o(G)`
   max-width: 450px;
   width: 100%;
`,yt=o.p`
   color: red;

   text-weight: bold;
`,Ct=o(oe)`
   display: grid;
   gap: 2.4rem;
`,vt=o.div`
   display: grid;
   gap: 1.6rem;
`,Et=o.div`
   display: flex;
   gap: 0.8rem;
`,wt=o.label`
   user-select: none;

   display: grid;
   gap: 0.4rem;
`,Ft=o(I).attrs({as:"textarea",rows:3})``,$t=o(I)``,X=a=>{var c=a,{label:e,type:n,min:r}=c,l=K(c,["label","type","min"]);return s(wt,{children:[s("span",{children:[e,":"]}),n==="text-area"?t(Ft,b({},l)):t($t,b({type:n,min:r},l))]})},xe=o(R).attrs(({theme:e})=>({textColor:e.colors.white,bgColor:"green"}))`
   flex: 1;
   font-size: 1.8rem;
   font-weight: bold;
`,Dt=o(xe).attrs({type:"reset",bgColor:"firebrick"})``,St=o(xe).attrs({type:"submit"})``;function At({}){const e=U(),[n,r]=u.exports.useState(null);async function l(a){a.preventDefault();const p=a.currentTarget.elements,x=Object.entries(p).filter(([C])=>Number.isNaN(Number(C))),g=Object.fromEntries(x.map(([C,$])=>[C,$.value])),y=F(b({},g),{dataCriacao:new Date().toISOString(),multa:Number(g.multa),tempoPrisao:Number(g.tempoPrisao)}),[v]=await L.post("/codigopenal",y);if(v){r("N\xE3o foi poss\xEDvel criar o c\xF3digo penal, tente novamente.");return}e("/dashboard")}return s(Lt,{children:[t(H,{children:t("title",{children:"Criar C\xF3digo Penal - Cidade Alta"})}),t(ee,{}),t(W,{children:"Criar C\xF3digo Penal"}),n&&t(kt,{children:n}),s(Tt,{onSubmit:l,children:[s(Nt,{children:[t(J,{label:"Nome",name:"nome"}),t(J,{label:"Descri\xE7\xE3o",type:"text-area",name:"descricao"}),t(J,{label:"Multa (R$)",type:"number",name:"multa",min:0}),t(J,{label:"Dias Preso",type:"number",name:"tempoPrisao",min:0})]}),s(Rt,{children:[t(jt,{children:"Limpar Campos"}),t(Ot,{children:"Criar"})]})]})]})}const Lt=o(G)`
   max-width: 450px;
   width: 100%;
`,kt=o.p`
   color: red;

   text-weight: bold;
`,Tt=o(oe)`
   display: grid;
   gap: 2.4rem;
`,Nt=o.div`
   display: grid;
   gap: 1.6rem;
`,Rt=o.div`
   display: flex;
   gap: 0.8rem;
`,Pt=o.label`
   user-select: none;

   display: grid;
   gap: 0.4rem;
`,Bt=o(I).attrs({as:"textarea",rows:3})``,Mt=o(I)``,J=a=>{var c=a,{label:e,type:n,min:r}=c,l=K(c,["label","type","min"]);return s(Pt,{children:[s("span",{children:[e,":"]}),n==="text-area"?t(Bt,b({},l)):t(Mt,b({type:n,min:r},l))]})},ye=o(R).attrs(({theme:e})=>({textColor:e.colors.white,bgColor:"green"}))`
   flex: 1;
   font-size: 1.8rem;
   font-weight: bold;
`,jt=o(ye).attrs({type:"reset",bgColor:"firebrick"})``,Ot=o(ye).attrs({type:"submit"})``;function It({}){return t(Re,{basename:"/drkz-cidade-alta/",children:s(Pe,{children:[t(P,{path:"/",element:t(B,{render:t(qe,{})})}),t(P,{path:"/dashboard",element:t(B,{render:t(rt,{})})}),t(P,{path:"/dashboard/view/*",element:t(B,{render:t(pt,{})})}),t(P,{path:"/dashboard/edit/*",element:t(B,{render:t(bt,{})})}),t(P,{path:"/dashboard/create",element:t(B,{render:t(At,{})})}),t(P,{path:"*",element:t(B,{render:t(ne,{to:"/dashboard",replace:!0})})})]})})}const zt=o.div`
   max-width: 100%;
   min-height: 100vh;

   display: flex;
   align-items: center;
   justify-content: center;
`;Be.render(t(Me.StrictMode,{children:t(je,{theme:ze,children:t(zt,{children:s(Oe,{store:He,children:[t(_e,{}),t(It,{})]})})})}),document.getElementById("root"));
