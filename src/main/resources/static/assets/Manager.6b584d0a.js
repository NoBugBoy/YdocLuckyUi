import{r as e,u as a,o as t,g as l,d as s,t as r,w as i,a1 as o,U as u,e as n,f as d,an as c,n as p,ao as g,p as f,q as v,s as y,K as m,ap as k,M as S,a as h,ak as _,aq as x,ar as C,G as N,O,aa as I}from"./vendor.239c07d9.js";import{C as J}from"./index.81aafe26.js";const b={key:0},q=S("点我清除全部用例"),E=S(" 你确定要全部清理吗，我会把LocalStorage全部干掉哦。 "),j={style:{"font-size":"18px"}},w={key:1},z={setup(S){const z=J.radioConsts;let P=e([]),G=e([{title:"名称",key:"title"},{title:"状态",key:"status",render(e){let a=z.find((a=>a.value==e.status));return h(_,{type:"success"==a.value?"success":"error"==a.value?"error":"warning"},{default:()=>a.label})}},{title:"创建时间",key:"time"},{title:"请求参数",key:"param",render:e=>(e.param.forEach((e=>{delete e.in,delete e.type,delete e.required,delete e.active})),JSON.stringify(e.param))},{title:"请求体",key:"body"},{title:"操作",key:"action",render:e=>h(f,{type:"primary",onClick:()=>L(e)},{default:()=>"删除"})}]),K=e(!0);a();let L=e=>{let a=localStorage.getItem(e.group),t=JSON.parse(a);for(var l=0;l<t.length;l++)if(t[l].title==e.title){1==t.length?localStorage.removeItem(e.group):(t.splice(l,1),localStorage.setItem(e.group,JSON.stringify(t)));break}U()},M=()=>{localStorage.clear(),U()},U=()=>{K.vlaue=!1,P.value=[];for(var e=0;e<localStorage.length;e++){var a=localStorage.key(e);if(a.startsWith("lucky")){let e={},t=JSON.parse(localStorage.getItem(a));t.forEach((e=>{e.group=a})),e.key=a.split("_")[1],e.value=t,P.value.push(e)}}K.vlaue=!0};return t((()=>{U()})),(e,a)=>l(K)?(s(),r(l(o),{key:0,title:"请求用例管理"},{default:i((()=>[l(P).length>0?(s(),n("div",b,[d(l(m),{vertical:"",size:15},{default:i((()=>[d(l(c),{"positive-text":"好的,没关系.","negative-text":"Emmm,算了吧.",onPositiveClick:l(M),onNegativeClick:a[0]||(a[0]=()=>{})},{icon:i((()=>[d(l(p),null,{default:i((()=>[d(l(g))])),_:1})])),trigger:i((()=>[d(l(f),{dashed:"",type:"primary"},{default:i((()=>[q])),_:1})])),default:i((()=>[E])),_:1},8,["onPositiveClick"]),(s(!0),n(v,null,y(l(P),((e,a)=>(s(),n("div",null,[d(l(x),null,{default:i((()=>[d(l(C),{name:"index"},{header:i((()=>[N("span",j,O(e.key),1)])),default:i((()=>[d(l(I),{columns:l(G),data:e.value},null,8,["columns","data"])])),_:2},1024)])),_:2},1024)])))),256))])),_:1})])):(s(),n("div",w,[d(l(k),{status:"404",title:"好像没有多余的请求用例了",description:"去创建几个试试吧"})]))])),_:1})):u("",!0)}};export{z as default};
