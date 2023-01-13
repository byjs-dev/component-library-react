import{R as p}from"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";function m(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=m(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function d(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r}const s=({variant:e="primary",theme:t,label:a,...r})=>p.createElement("button",{className:d("rounded focus:ring focus:ring-3 focus:ring-offset-1 focus:ring-blue-500",e==="primary"?"bg-indigo-800 text-white":e==="secondary"?"bg-white text-indigo-800 border-indigo-800 border-2":""),...r},a);try{s.displayName="Button",s.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"What variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"icon"'}]}},theme:{defaultValue:null,description:"What theme to use - overrides the global/outer theme",name:"theme",required:!1,type:{name:"enum",value:[{value:'"cat"'},{value:'"rental"'},{value:'"zeppelin"'},{value:'"neutral"'}]}},label:{defaultValue:null,description:"Button text/title",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const g={title:"Components/Button",component:s,tags:["autodocs"],argTypes:{variant:{control:"select"},theme:{control:"select"}}},n={args:{variant:"primary",label:"Button"}},o={args:{label:"Button"}},l={args:{label:"Button"}};var u;n.parameters={...n.parameters,storySource:{source:`{
  args: {
    variant: 'primary',
    label: 'Button'
  }
}`,...(u=n.parameters)==null?void 0:u.storySource}};var i;o.parameters={...o.parameters,storySource:{source:`{
  args: {
    label: 'Button'
  }
}`,...(i=o.parameters)==null?void 0:i.storySource}};var c;l.parameters={...l.parameters,storySource:{source:`{
  args: {
    label: 'Button'
  }
}`,...(c=l.parameters)==null?void 0:c.storySource}};const v=["Primary","Secondary","Large"];export{l as Large,n as Primary,o as Secondary,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories-19c05dfa.js.map
