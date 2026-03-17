import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{t as n}from"./compiler-runtime-Cwymwm1-.js";var r=e((()=>{}));function i(e){let t=(0,a.c)(9),{label:n,size:r,allCaps:i,color:s,backgroundColor:c}=e,l=r===void 0?`normal`:r,u=i===void 0?!1:i,d=`${l} ${s} label`,f;t[0]===c?f=t[1]:(f={backgroundColor:c},t[0]=c,t[1]=f);let p;t[2]!==u||t[3]!==n?(p=u?n.toUpperCase():n,t[2]=u,t[3]=n,t[4]=p):p=t[4];let m;return t[5]!==d||t[6]!==f||t[7]!==p?(m=(0,o.jsx)(`span`,{className:d,style:f,children:p}),t[5]=d,t[6]=f,t[7]=p,t[8]=m):m=t[8],m}var a,o,s=e((()=>{a=n(),r(),o=t(),i.__docgenInfo={description:``,methods:[],displayName:`MyLabel`,props:{label:{required:!0,tsType:{name:`string`},description:`Text to be displayed in the label\r
*`},size:{required:!1,tsType:{name:`union`,raw:`"normal" | "h1" | "h2" | "h3"`,elements:[{name:`literal`,value:`"normal"`},{name:`literal`,value:`"h1"`},{name:`literal`,value:`"h2"`},{name:`literal`,value:`"h3"`}]},description:`Label size\r
*`,defaultValue:{value:`"normal"`,computed:!1}},allCaps:{required:!1,tsType:{name:`boolean`},description:`Capitalize text\r
*`,defaultValue:{value:`false`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`"text-primary" | "text-secondary" | "text-tertiary"`,elements:[{name:`literal`,value:`"text-primary"`},{name:`literal`,value:`"text-secondary"`},{name:`literal`,value:`"text-tertiary"`}]},description:`Color of the label text\r
*`},backgroundColor:{required:!1,tsType:{name:`string`},description:`Color of the label text with custom value\r
*`}}}})),c,l,u,d,f,p;e((()=>{s(),c={title:`UI/labels/MyLabel`,component:i,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{size:{control:`inline-radio`,options:[`normal`,`h1`,`h2`,`h3`]},color:{control:`inline-radio`,options:[`text-primary`,`text-secondary`,`text-tertiary`]},backgroundColor:{control:`color`}}},l={args:{label:`Basic Label`}},u={args:{label:`All Caps Label`,allCaps:!0}},d={args:{label:`Secondary Label`,color:`text-secondary`}},f={args:{label:`BackgroundColor Label`,backgroundColor:`#fc0a0a`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Basic Label"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    allCaps: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    color: "text-secondary"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "BackgroundColor Label",
    backgroundColor: "#fc0a0a"
  }
}`,...f.parameters?.docs?.source}}},p=[`Basic`,`AllCaps`,`Secondary`,`BackgroundColor`]}))();export{u as AllCaps,f as BackgroundColor,l as Basic,d as Secondary,p as __namedExportsOrder,c as default};