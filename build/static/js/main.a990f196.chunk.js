(this["webpackJsonpcsv-to-dynamodb"]=this["webpackJsonpcsv-to-dynamodb"]||[]).push([[0],{14:function(e,t,a){e.exports=a(30)},19:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(19),a(12)),i=a(2),s=a(13),m=a.n(s);a(27),a(28),a(29);var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1],v=Object(n.useState)(""),f=Object(i.a)(v,2),h=f[0],b=f[1],p=Object(n.useState)([]),E=Object(i.a)(p,2),g=E[0],O=E[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,"Convert CSV to DynamoDB JSON"),r.a.createElement("div",{className:"configs"},r.a.createElement("input",{type:"text",placeholder:"Table Name",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{onClick:function(){var e=u.split("\n");if(0!==e.length&&0!==a.trim().length){!function(e){var t,a=/([a-zA-Z]*)\s\((\w)\)/g;for(;null!==(t=a.exec(e));){t.index===a.lastIndex&&a.lastIndex++;var n={name:t[1],type:t[2]};g.push(n),O(g)}}(e[0]);var t=[];e.slice(1).forEach((function(e,n){var r=e.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/g),c={Item:{},TableName:a};r.forEach((function(e,t){var a=e.trim()?JSON.parse(e).trim():"";if(0!==a.length){var n=g[t];c.Item[n.name]=Object(o.a)({},n.type,a)}})),Object.keys(c.Item).length>0&&(t[n]={Put:c})})),b(JSON.stringify(t,null,"\t"))}}},"Convert CSV")),r.a.createElement("div",{className:"editor-boxes"},r.a.createElement("div",{className:"left-editor"},r.a.createElement("textarea",{value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"right-editor"},r.a.createElement(m.a,{mode:"json",theme:"tomorrow",readOnly:!0,value:h,width:"100%",height:"100%",className:"aceEditorCustom"}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a990f196.chunk.js.map