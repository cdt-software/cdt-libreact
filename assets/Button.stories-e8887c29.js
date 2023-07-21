import{a as k,F as N,j as P}from"./jsx-runtime-a8c9cf40.js";import{a as B}from"./index-420af902.js";import{R as l}from"./index-532c4ca3.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";var _={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=l.createContext&&l.createContext(_),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(r){for(var t,e=1,a=arguments.length;e<a;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},o.apply(this,arguments)},T=globalThis&&globalThis.__rest||function(r,t){var e={};for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&t.indexOf(a)<0&&(e[a]=r[a]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(r);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(r,a[n])&&(e[a[n]]=r[a[n]]);return e};function j(r){return r&&r.map(function(t,e){return l.createElement(t.tag,o({key:e},t.attr),j(t.child))})}function G(r){return function(t){return l.createElement(D,o({attr:o({},r.attr)},t),j(r.child))}}function D(r){var t=function(e){var a=r.attr,n=r.size,d=r.title,S=T(r,["attr","size","title"]),g=n||e.size||"1em",s;return e.className&&(s=e.className),r.className&&(s=(s?s+" ":"")+r.className),l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,S,{className:s,style:o(o({color:r.color||e.color},e.style),r.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),d&&l.createElement("title",null,d),r.children)};return f!==void 0?l.createElement(f.Consumer,null,function(e){return t(e)}):t(_)}function H(r){return G({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`}},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`}},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`}},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`}}]})(r)}const L={title:"Form/Button",component:B,args:{children:"Entrar",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{options:["primary","secondary","tertiary","greenDark","greenLight"],control:{type:"inline-radio"}},children:{control:{type:null}},size:{options:["full","md"],control:{type:"inline-radio"}},disabled:{control:{type:"boolean"}},onClick:{action:"click"}}},c={},i={args:{variant:"secondary"}},u={args:{variant:"tertiary",children:k(N,{children:[P(H,{}),"Entrar com o Google"]})}},m={args:{size:"full"}};var p,y,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(y=c.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var v,C,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var x,z,O;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: <>
                <FcGoogle />
                Entrar com o Google
            </>
  }
}`,...(O=(z=u.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var F,w,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'full'
  }
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const W=["Primary","Secondary","tertiary","Full"];export{m as Full,c as Primary,i as Secondary,W as __namedExportsOrder,L as default,u as tertiary};
//# sourceMappingURL=Button.stories-e8887c29.js.map
