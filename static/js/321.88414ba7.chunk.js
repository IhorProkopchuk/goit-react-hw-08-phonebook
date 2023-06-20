"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{321:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var r=t(439),a=t(791),i=t(434),u=t(634),o="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?c:r,i=t.maxSize,u=void 0===i?1:i,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:o},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return o}return{get:r,put:function(n,a){r(n)===o&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,l);function d(){var n=f.get(arguments);if(n===o){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i,u=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,f=s.memoizeOptions,d=void 0===f?t:f,m=Array.isArray(d)?d:[d],p=l(r),v=e.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(m)),h=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:p,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return a}var d=f(s),m=function(e){return e.contacts.items},p=d([m,function(e){return e.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),v="ContactForm_form__dhl+T",h="ContactForm_label__-cVXI",_="ContactForm_input__Bl93P",x="ContactForm_button__eSwX9",y=t(184),b=function(){var e=(0,i.I0)(),n=(0,i.v9)(m),t=(0,a.useState)(""),o=(0,r.Z)(t,2),c=o[0],s=o[1],l=(0,a.useState)(""),f=(0,r.Z)(l,2),d=f[0],p=f[1],b=function(e){var n=e.target,t=n.name,r=n.value;"name"===t?s(r):"number"===t&&p(r)};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("form",{className:v,onSubmit:function(t){t.preventDefault();var r=n.find((function(e){return e.name.toLowerCase()===c.toLowerCase()})),a=n.find((function(e){return e.number===d}));return r?(alert("".concat(c," is already in contacts.")),s(""),void p("")):a?(alert("The number ".concat(d," is already associated with another contact.")),s(""),void p("")):(e((0,u.uK)({name:c,number:d})),s(""),void p(""))},children:[(0,y.jsxs)("label",{className:h,children:["Name",(0,y.jsx)("input",{className:_,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:c,onChange:b})]}),(0,y.jsxs)("label",{className:h,children:["Number",(0,y.jsx)("input",{className:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:b})]}),(0,y.jsx)("button",{className:x,type:"submit",children:"Add contact"})]})})},C="ContactList_container__hYHc3",g="ContactList_list__csErn",j="ContactList_item__EZYHO",N="ContactList_name__UCkFW",w="ContactList_number__2af8f",k="ContactList_btn__6Piat",F=function(){var e=(0,i.v9)(p),n=(0,i.I0)();return(0,y.jsx)("div",{className:C,children:(0,y.jsx)("ul",{className:g,children:e.map((function(e){return(0,y.jsxs)("li",{className:j,children:[(0,y.jsx)("div",{className:N,children:e.name}),(0,y.jsx)("div",{className:w,children:e.number}),(0,y.jsx)("button",{className:k,onClick:function(){return t=e.id,void n((0,u.GK)(t));var t},children:"Delete"})]},e.id)}))})})},A=t(808),E="Filter_filter__vxThR",L="Filter_label__vEd1E",z="Filter_input__N7T3z",S=function(){var e=(0,i.I0)(),n=(0,i.v9)((function(e){return e.filter}));return(0,y.jsx)("div",{className:E,children:(0,y.jsxs)("label",{className:L,children:["Find contacts by name",(0,y.jsx)("input",{className:z,type:"text",value:n,onChange:function(n){e((0,A.W1)(n.target.value))}})]})})},I=function(){var e=(0,i.I0)();return(0,a.useEffect)((function(){e((0,u.yF)())}),[e]),(0,y.jsxs)("div",{style:{maxWidth:"960px",margin:"0 auto",padding:"0 16px",backgroundColor:"#e7ecf2",borderRadius:"4px",boxShadow:"2px 2px 4px rgba(0,0,0,.5)"},children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(b,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(S,{}),(0,y.jsx)(F,{})]})}}}]);
//# sourceMappingURL=321.88414ba7.chunk.js.map