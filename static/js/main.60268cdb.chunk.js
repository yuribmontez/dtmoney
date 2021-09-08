(this.webpackJsonpdtmoney=this.webpackJsonpdtmoney||[]).push([[0],{101:function(n,t,e){"use strict";e.r(t);var r,a,i=e(1),c=e.n(i),o=e(28),s=e.n(o),d=e(6),l=e.p+"static/media/income.d58effe2.svg",b=e.p+"static/media/outcome.6eb96d30.svg",u=e.p+"static/media/total.e90c2d1e.svg",j=e(3),h=e(4),m=h.b.div(r||(r=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-top: -10rem;\n\n  div {\n    background: var(--shape);\n    padding: 1.5rem 2rem;\n    border-radius: 0.25rem;\n    color: var(--text-title);\n\n    header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    strong {\n      display: block;\n      margin-top: 1rem;\n      font-size: 2rem;\n      font-weight: 500;\n      line-height: 3rem;\n    }\n\n    &.highlight-background {\n      background: var(--green);\n      color: #FFF;\n    }\n  }\n"]))),p=e(10),g=e.n(p),x=e(63),O=e(35),f=e(17),v=e(53),y=e.n(v).a.create({baseURL:"http://localhost:3000/api"}),w=e(0),k=Object(i.createContext)({});function F(n){var t=n.children,e=Object(i.useState)([]),r=Object(d.a)(e,2),a=r[0],c=r[1];function o(){return(o=Object(f.a)(g.a.mark((function n(t){var e,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.post("/transactions",Object(O.a)(Object(O.a)({},t),{},{createdAt:new Date}));case 2:e=n.sent,r=e.data.transaction,c([].concat(Object(x.a)(a),[r]));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(i.useEffect)((function(){var n=localStorage.getItem("@dtmoney:transactions");if(n){var t=JSON.parse(n);c(t)}else y.get("transactions").then((function(n){return c(n.data.transactions)}))}),[]),Object(i.useEffect)((function(){localStorage.setItem("@dtmoney:transactions",JSON.stringify(a))}),[a]),Object(w.jsx)(k.Provider,{value:{transactions:a,createTransaction:function(n){return o.apply(this,arguments)},clearTransactions:function(){c([])}},children:t})}function C(){return Object(i.useContext)(k)}function N(){var n=C().transactions.reduce((function(n,t){return"deposit"===t.type?(n.deposits+=t.amount,n.total+=t.amount):(n.withdraws+=t.amount,n.total-=t.amount),n}),{deposits:0,withdraws:0,total:0});return Object(w.jsxs)(m,{children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("header",{children:[Object(w.jsx)("p",{children:"Incomes"}),Object(w.jsx)("img",{src:l,alt:"Entradas"})]}),Object(w.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.deposits)})]}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("header",{children:[Object(w.jsx)("p",{children:"Withdraws"}),Object(w.jsx)("img",{src:b,alt:"Sa\xeddas"})]}),Object(w.jsxs)("strong",{children:["- ",new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.withdraws)]})]}),Object(w.jsxs)("div",{className:"highlight-background",children:[Object(w.jsxs)("header",{children:[Object(w.jsx)("p",{children:"Total"}),Object(w.jsx)("img",{src:u,alt:"Total"})]}),Object(w.jsx)("strong",{children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.total)})]})]})}var R,S=h.b.div(a||(a=Object(j.a)(["\n  margin-top: 4rem;\n\n  table {\n    width: 100%;\n    border-spacing: 0 0.5rem;\n\n    th {\n      color: var(--text-body);\n      font-weight: 400;\n      padding: 1rem 2rem;\n      text-align: left;\n      line-height: 1.5rem;\n\n      &:last-child {\n        text-align: right;\n        padding: 0;\n      }\n    }\n\n    td {\n      padding: 1rem 2rem;\n      border: 0;\n      background: var(--shape);\n      color: var(--text-body);\n      border-radius: 0.25rem;\n\n      &:first-child {\n        color: var(--text-title);\n      }\n\n      &:last-child {\n        text-align: right;\n      }\n\n      &.deposit {\n        color: var(--green);\n      }\n\n      &.withdraw {\n        color: var(--red);\n      }\n    }\n\n    button {\n      font-size: 1rem;\n      color: #FFF;\n      background: var(--red);\n      border: 0;\n      padding: 0 2rem;\n      border-radius: 0.25rem;\n      height: 3rem;\n\n      transition: filter 0.2s;\n\n      &:hover {\n        filter: brightness(0.9);\n      }\n\n      &.transaction-button {\n        background: none;\n        height: 0;\n        padding: 0;\n      }\n    }\n  }\n"]))),B=e.p+"static/media/delete.73fbebdb.svg";function E(){var n=C(),t=n.transactions,e=n.clearTransactions;return Object(w.jsx)(S,{children:Object(w.jsxs)("table",{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Title"}),Object(w.jsx)("th",{children:"Value"}),Object(w.jsx)("th",{children:"Category"}),Object(w.jsx)("th",{children:"Date"}),Object(w.jsx)("th",{children:Object(w.jsx)("button",{type:"button",onClick:e,children:"Clear transactions"})})]})}),Object(w.jsx)("tbody",{children:t.map((function(n){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:n.title}),Object(w.jsx)("td",{className:n.type,children:new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n.amount)}),Object(w.jsx)("td",{children:n.category}),Object(w.jsx)("td",{children:new Intl.DateTimeFormat("pt-BR").format(new Date(n.createdAt))}),Object(w.jsx)("td",{children:Object(w.jsx)("button",{type:"button",className:"transaction-button",children:Object(w.jsx)("img",{src:B,alt:"Delete transaction"})})})]},n.id)}))})]})})}var D=h.b.div(R||(R=Object(j.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 2.5rem 1rem;\n"])));function T(){return Object(w.jsxs)(D,{children:[Object(w.jsx)(N,{}),Object(w.jsx)(E,{})]})}var z,I,A,J=e.p+"static/media/logo.614d71d1.svg",L=h.b.header(z||(z=Object(j.a)(["\n  background: var(--blue);\n"]))),q=h.b.div(I||(I=Object(j.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n\n  padding: 2rem 1rem 12rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  button {\n    font-size: 1rem;\n    color: #FFF;\n    background: var(--blue-light);\n    border: 0;\n    padding: 0 2rem;\n    border-radius: 0.25rem;\n    height: 3rem;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"])));function M(n){var t=n.onOpenNewTransactionModal;return Object(w.jsx)(L,{children:Object(w.jsxs)(q,{children:[Object(w.jsx)("img",{src:J,alt:"dt money"}),Object(w.jsx)("button",{type:"button",onClick:t,children:"New transaction"})]})})}var W,P,V,H=Object(h.a)(A||(A=Object(j.a)(["\n  :root {\n    --background: #F0F2F5;\n    --shape: #FFF;\n\n    --green: #33CC95;\n    --red: #E52E4D;\n    --blue: #5429CC;\n    --blue-light: #6933FF;\n\n    --text-title: #363F5F;\n    --text-body: #969CB3;\n\n    --input-background: #E7E9EE;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%; //15px\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%; //14px\n    }\n  }\n\n  body {\n    background: var(--background);\n    -webkit-font-smothing: antialiased;\n  }\n\n  body, input, textarea, button {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 600;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  [disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n\n  .react-modal-overlay {\n    background: rgba(0, 0, 0, 0.5);\n\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .react-modal-content {\n    width: 100%;\n    max-width: 576px;\n    background: var(--background);\n    padding: 3rem;\n    position: relative;\n    border-radius: 0.25rem;\n  }\n\n  .react-modal-close {\n    position: absolute;\n    right: 1.5rem;\n    top: 1.5rem;\n    border: 0;\n    background: transparent;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.8);\n    }\n  }\n\n"]))),U=e(18),G=e.n(U),K=e(33),Q={green:"#33cc95",red:"#e52e4d"},X=h.b.form(W||(W=Object(j.a)(["\n  h2 {\n    color: var(--text-title);\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  }\n\n  input {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    border-radius: 0.25rem;\n\n    border: 1px solid #d7d7d7;\n    background: var(--input-background);\n\n    font-weight: 400;\n    font-size: 1rem;\n\n    &::placeholder {\n    color: var(--text-body);\n    }\n\n    & + input {\n      margin-top: 1rem;\n    }\n  }\n\n  button[type='submit'] {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    background: var(--green);\n    color: #FFF;\n    border-radius: 0.25rem;\n    border: 0;\n    font-size: 1rem;\n    margin-top: 1.5rem;\n    font-weight: 600;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"]))),Y=h.b.div(P||(P=Object(j.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.5rem;\n"]))),Z=h.b.button(V||(V=Object(j.a)(["\n  height: 4rem;\n  border: 1px solid #d7d7d7;\n  border-radius: 0.25rem;\n\n  background: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  transition: border-color 0.2s;\n\n  &:hover {\n    border-color: ","\n  }\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 1rem;\n    font-size: 1rem;\n    color: var(--text-title);\n  }\n"])),(function(n){return n.isActive?Object(K.b)(.9,Q[n.activeColor]):"transparent"}),Object(K.a)(.1,"#d7d7d7")),$=e.p+"static/media/close.f62862c6.svg";function _(n){var t=n.isOpen,e=n.onRequestClose,r=Object(i.useState)(""),a=Object(d.a)(r,2),c=a[0],o=a[1],s=Object(i.useState)(0),u=Object(d.a)(s,2),j=u[0],h=u[1],m=Object(i.useState)(""),p=Object(d.a)(m,2),x=p[0],O=p[1],v=Object(i.useState)("deposit"),y=Object(d.a)(v,2),k=y[0],F=y[1],N=C().createTransaction,R=function(){var n=Object(f.a)(g.a.mark((function n(t){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,N({title:c,amount:j,category:x,type:k});case 3:o(""),h(0),O(""),F("deposit"),e();case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(w.jsxs)(G.a,{isOpen:t,onRequestClose:e,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[Object(w.jsx)("button",{type:"button",onClick:e,className:"react-modal-close",children:Object(w.jsx)("img",{src:$,alt:"Fechar modal"})}),Object(w.jsxs)(X,{onSubmit:R,children:[Object(w.jsx)("h2",{children:"Register transaction"}),Object(w.jsx)("input",{type:"text",placeholder:"Title",value:c,onChange:function(n){return o(n.target.value)}}),Object(w.jsx)("input",{type:"number",placeholder:"Value",value:j,onChange:function(n){return h(Number(n.target.value))}}),Object(w.jsxs)(Y,{children:[Object(w.jsxs)(Z,{type:"button",onClick:function(){F("deposit")},isActive:"deposit"===k,activeColor:"green",children:[Object(w.jsx)("img",{src:l,alt:"Entrada"}),Object(w.jsx)("span",{children:"Income"})]}),Object(w.jsxs)(Z,{type:"button",onClick:function(){F("withdraw")},isActive:"withdraw"===k,activeColor:"red",children:[Object(w.jsx)("img",{src:b,alt:"Saida"}),Object(w.jsx)("span",{children:"Withdraw"})]})]}),Object(w.jsx)("input",{placeholder:"Category",value:x,onChange:function(n){return O(n.target.value)}}),Object(w.jsx)("button",{type:"submit",children:"Register"})]})]})}function nn(){var n=Object(i.useState)(!1),t=Object(d.a)(n,2),e=t[0],r=t[1];return Object(w.jsxs)(F,{children:[Object(w.jsx)(M,{onOpenNewTransactionModal:function(){r(!0)}}),Object(w.jsx)(T,{}),Object(w.jsx)(_,{isOpen:e,onRequestClose:function(){r(!1)}}),Object(w.jsx)(H,{})]})}G.a.setAppElement("#root");var tn=e(34);Object(tn.b)({models:{transaction:tn.a},seeds:function(n){n.db.loadData({transactions:[{id:1,title:"Website freelance",type:"deposit",category:"Dev",amount:6e3,createdAt:new Date("2021-08-31 01:00:00")},{id:2,title:"Rent",type:"withdraw",category:"House",amount:1100,createdAt:new Date("2021-08-22 11:00:00")}]})},routes:function(){var n=this;this.namespace="api",this.get("/transactions",(function(){return n.schema.all("transaction")})),this.post("/transactions",(function(n,t){var e=JSON.parse(t.requestBody);return n.create("transaction",e)}))}}),s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(nn,{})}),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.60268cdb.chunk.js.map