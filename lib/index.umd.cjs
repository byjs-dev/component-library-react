(function(o,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],i):(o=typeof globalThis<"u"?globalThis:o||self,i(o.ComponentLibraryReact={},o.React))})(this,function(o,i){"use strict";const g="",c="";function u(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=u(e[n]))&&(t&&(t+=" "),t+=r);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function f(){for(var e,n,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(n=u(e))&&(t&&(t+=" "),t+=n);return t}const s=Object.freeze(Object.defineProperty({__proto__:null,Button:({variant:e="primary",theme:n,label:r,...t})=>i.createElement("button",{style:{fontFamily:"Roboto"},className:f("focus:ring-3 rounded border-none px-4 py-2 text-lg font-medium focus:ring focus:ring-blue-500 focus:ring-offset-1",e==="primary"?"bg-indigo-800 text-white hover:bg-neutral-900":e==="secondary"?"bg-white text-indigo-800 ring-2 ring-inset ring-indigo-800 hover:bg-neutral-900 hover:text-white":e==="tertiary"?"bg-white text-indigo-800 hover:bg-gray-200":""),...t},r)},Symbol.toStringTag,{value:"Module"}));o.Button=s,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map