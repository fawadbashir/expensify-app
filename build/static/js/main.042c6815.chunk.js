(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){e.exports=n(205)},203:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),c=n(11),s=n(208),u=n(209),l=n(206),p=n(2),d=n.n(p),f=n(45),m=n.n(f),h=n(126),E=function(e){var t=e.id,n=e.description,a=e.amount,o=e.createdAt;return r.a.createElement("div",null,r.a.createElement(h.a,{to:"/edit/".concat(t)},r.a.createElement("h3",null,n)),r.a.createElement("p",null,m()(a/100).format("$0,0.00")," ",d()(o).format("MMMM do YYYY")))},v=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter(function(e){var t=d()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),i=!o||o.isSameOrAfter(t,"day"),c=e.description.toLowerCase().includes(n.toLowerCase());return a&&i&&c}).sort(function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:void 0})},g=Object(c.b)(function(e){return{expenses:v(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,0===e.expenses.length?r.a.createElement("p",null,"No Expenses"):e.expenses.map(function(e){return r.a.createElement(E,Object.assign({key:e.id},e))}))}),b=n(16),O=n(17),x=n(19),D=n(18),S=n(20),y=n(46),A=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={focusedInput:null},n.onDatesChange=function(e){var t=e.startDate,a=e.endDate;n.props.setStartDate(t),n.props.setEndDate(a)},n.onFocusChange=function(e){n.setState(function(){return{focusedInput:e}})},n.onTextChange=function(e){n.props.setTextFilter(e.target.value)},n.onSortBy=function(e){"date"===e.target.value?n.props.sortByDate():n.props.sortByAmount()},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.props.filters.text,onChange:this.onTextChange}),r.a.createElement("select",{value:this.props.filters.sortBy,onChange:this.onSortBy},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount")),r.a.createElement(y.DateRangePicker,{startDate:this.props.filters.startDate,startDateId:"123abc",endDate:this.props.filters.endDate,endDateId:"abc123",onDatesChange:this.onDatesChange,focusedInput:this.state.focusedInput,onFocusChange:this.onFocusChange,isOutsideRange:function(){return!1}}))}}]),t}(a.Component),T=Object(c.b)(function(e){return{filters:e.filters}},function(e){return{setTextFilter:function(t){return e(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t))},sortByDate:function(){return e({type:"SORT_BY_DATE"})},sortByAmount:function(){return e({type:"SORT_BY_AMOUNT"})},setStartDate:function(t){return e(function(e){return{type:"SET_START_DATE",startDate:e}}(t))},setEndDate:function(t){return e(function(e){return{type:"SET_END_DATE",endDate:e}}(t))}}})(A),w=Object(c.b)(function(e){return{expenses:v(e.expenses,e.filters)}})(function(e){var t,n=m()((t=e.expenses,(0===t.length?0:t.map(function(e){return e.amount}).reduce(function(e,t){return e+t},0))/100)).format("$0,0.00"),a=1===e.expenses.length?"Expense":"Expenses";return r.a.createElement("div",null,r.a.createElement("h1",null,"Viewing ",e.expenses.length," ",a," of Total ",n))}),C=function(){return r.a.createElement("div",null,"This is my Dashboard Page",r.a.createElement(w,null),r.a.createElement(T,null),r.a.createElement(g,null))},_=(n(182),n(196),function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(x.a)(this,Object(D.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState(function(){return{amount:t}})},n.onDateChange=function(e){e&&n.setState(function(){return{createdAt:e}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{calendarFocused:t}})},n.onSubmit=function(e){e.preventDefault(),n.state.description&&n.state.amount?(n.setState(function(){return{error:""}}),n.props.onSubmit({description:n.state.description,amount:100*parseFloat(n.state.amount,10),createdAt:n.state.createdAt.valueOf(),note:n.state.note})):n.setState(function(){return{error:"Please provide description and amount"}})},n.state={description:n.props.expense?e.expense.description:"",note:n.props.expense?e.expense.note:"",amount:n.props.expense?(e.expense.amount/100).toString():"",createdAt:n.props.expense?d()(e.expense.createdAt):d()(),calendarFocused:!1,error:""},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",null,this.state.error),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Description",autoFocus:!0,value:this.state.description,onChange:this.onDescriptionChange}),r.a.createElement("input",{type:"number",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement(y.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("br",null),r.a.createElement("textarea",{placeholder:"Add a note for your expense(optional)",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("button",null,"AddExpense")))}}]),t}(a.Component)),j=n(112),N=n.n(j),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,a=e.note,r=void 0===a?"":a,o=e.amount,i=void 0===o?0:o,c=e.createdAt,s=void 0===c?0:c;return{type:"ADD_EXPENSE",expense:{id:N()(),description:n,note:r,amount:i,createdAt:s}}},R=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.addExpense(e),n.props.history.push("/")},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Add Expense"),r.a.createElement(_,{onSubmit:this.onSubmit}))}}]),t}(a.Component),B=Object(c.b)(void 0,function(e){return{addExpense:function(t){return e(k(t))}}})(R),F=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editExpense(n.props.expense.id,e),n.props.history.push("/")},n.onClick=function(){n.props.removeExpense({id:n.props.expense.id}),n.props.history.push("/")},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_,{expense:this.props.expense,onSubmit:this.onSubmit}),r.a.createElement("button",{onClick:this.onClick},"Remove"))}}]),t}(a.Component),I=Object(c.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}},function(e){return{editExpense:function(t){return e({type:"EDIT_EXPENSE",id:t,updates:n});var n},removeExpense:function(t){return e(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:t.id}))}}})(F),P=function(){return r.a.createElement("div",null,"This is from Help Page")},X=function(){return r.a.createElement("div",null,"404 - ",r.a.createElement(h.a,{to:"/"},"Go Home"))},M=n(207),L=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Expensify"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(M.a,{activeClassName:"active",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(M.a,{activeClassName:"active",to:"/create"},"Add Expense ")),r.a.createElement("li",null,r.a.createElement(M.a,{activeClassName:"active",to:"/help"},"Help")))))},Y=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement(u.a,null,r.a.createElement(l.a,{path:"/",exact:!0,component:C}),r.a.createElement(l.a,{path:"/create",component:B}),r.a.createElement(l.a,{path:"/edit/:id",component:I}),r.a.createElement(l.a,{path:"/help",component:P}),r.a.createElement(l.a,{component:X}))))},U=(n(203),n(38)),W=n(21),V=n(115),H=[],$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(V.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(W.a)({},e,t.updates):e});default:return e}},J={text:"",sortBy:"date",startDate:d()().startOf("month"),endDate:d()().endOf("month")},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(W.a)({},e,{text:t.text});case"SORT_BY_DATE":return Object(W.a)({},e,{sortBy:"date"});case"SORT_BY_AMOUNT":return Object(W.a)({},e,{sortBy:"amount"});case"SET_START_DATE":return Object(W.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(W.a)({},e,{endDate:t.endDate});default:return e}},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var K=Object(U.c)(Object(U.b)({expenses:$,filters:G}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());K.dispatch(k({description:"water bill",amount:45e5})),K.dispatch(k({description:"gas bill",createdAt:1e3})),K.dispatch(k({description:"Rent",amount:109500}));var Q=K.getState(),Z=v(Q.expenses,Q.filters);console.log(Z),i.a.render(r.a.createElement(c.a,{store:K}," ",r.a.createElement(Y,null)," "),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");q?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):z(t,e)})}}()}},[[116,2,1]]]);
//# sourceMappingURL=main.042c6815.chunk.js.map