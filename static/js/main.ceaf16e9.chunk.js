(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(9),i=a.n(s),r=(a(14),a(15),a(7)),l=a(4),o=a(6),j=a(8),d=(a(16),a(0)),m=function(e){for(var t=e.dataArray,a=e.handleDeleteButton,n=0,c=0,s=0,i=0;i<t.length;i++){if("expense"===t[i].transaction_type){var r=Number(t[i].amount);n+=r,s-=r}if("income"===t[i].transaction_type){var l=Number(t[i].amount);c+=l,s+=l}}return Object(d.jsxs)("article",{className:"article article__result",children:[Object(d.jsxs)("header",{className:"results__header",children:[Object(d.jsxs)("p",{className:"header__income",children:["Income: ",c]}),Object(d.jsxs)("p",{className:"header__expense",children:["Expense: ",n]}),Object(d.jsxs)("p",{className:"header__total",children:["Total: ",s]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"results__title",children:"History"}),Object(d.jsx)("div",{className:"results__list",children:t.map((function(e,t){var n=e.id,c=e.transaction_type,s=e.name,i=e.amount;return Object(d.jsxs)("div",{className:"ticket ".concat(c),children:[Object(d.jsx)("p",{className:"ticket__name",children:s}),Object(d.jsxs)("p",{children:[i,"$"]}),Object(d.jsx)("button",{className:"ticket__button",onClick:function(){return a(t)},children:"Delete"})]},n)}))})]})]})},u=(a(18),function(e){var t=e.handleInputChange,a=e.handleSubmit,n=e.data;return Object(d.jsx)("article",{className:"article article__transaction",children:Object(d.jsxs)("form",{onSubmit:a,action:"#",children:[Object(d.jsxs)("div",{className:"transaction__name",children:[Object(d.jsx)("h3",{className:"transaction__section--title",children:"Name"}),Object(d.jsx)("input",{type:"text",required:!0,placeholder:"Name",name:"name",value:n.name,onChange:t})]}),Object(d.jsxs)("div",{className:"transaction__type",children:[Object(d.jsx)("h3",{className:"transaction__section--title",children:"Transaction Type"}),Object(d.jsxs)("select",{name:"transaction_type",className:"transaction__select",value:n.transaction_type,onChange:t,children:[Object(d.jsx)("option",{value:"select",children:"Select"}),Object(d.jsx)("option",{value:"income",children:"Income"}),Object(d.jsx)("option",{value:"expense",children:"Expense"})]})]}),Object(d.jsxs)("div",{className:"transaction__amount",children:[Object(d.jsx)("h3",{className:"transaction__section--title",children:"Amount"}),Object(d.jsx)("input",{type:"number",value:n.amount,name:"amount",onChange:t})]}),Object(d.jsx)("button",{type:"submit",className:"submit__form",children:"Submit"})]})})}),h=function(){var e=Object(n.useState)({id:5*Math.random(),name:"",transaction_type:"",amount:0}),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(j.a)(s,2),h=i[0],b=i[1];return Object(d.jsxs)("main",{children:[Object(d.jsx)(u,{handleInputChange:function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){if(e.preventDefault(),""===a.transaction_type||"select"===a.transaction_type)return alert("Please select a transaction type");b([].concat(Object(r.a)(h),[a])),c({id:5*Math.random(),name:"",transaction_type:"",amount:0})},data:a}),Object(d.jsx)(m,{dataArray:h,handleDeleteButton:function(e){var t=h;t.splice(e,1),b(Object(r.a)(t))}})]})};var b=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("h1",{className:"header__title",children:"Expense Tracker"})}),Object(d.jsx)(h,{})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ceaf16e9.chunk.js.map