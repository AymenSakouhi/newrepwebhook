var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/utilities/text/docs.mdx.js"]=function(e){function t(t){for(var a,o,c=t[0],i=t[1],s=t[2],m=0,u=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(d&&d(t);u.length;)u.shift()();return r.push.apply(r,s||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,c=1;c<l.length;c++){var i=l[c];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=l[0]))}return e}var a={},n={105:0},r=[];function o(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=a,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;return r.push([283,0]),l()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},283:function(e,t,l){"use strict";l.r(t),l.d(t,"getElement",(function(){return g})),l.d(t,"getContents",(function(){return f}));var a=l(0),n=l.n(a),r=l(4),o=l(1),c=l(2),i=l(37),s=function(e){return n.a.createElement("div",{className:e.className},"The quick brown fox jumps over the lazy dog.")},d=[{id:"body-default",label:"Body size - default",element:n.a.createElement(s,{className:"slds-text-body_regular"}),description:"This default helper sets regular body copy. You usually don&rsquo;t need this class since most components will inherit this globally from the `body` element. However, it exists if you still need to specifically set it."},{id:"body-small",label:"Body size - Small",element:n.a.createElement(s,{className:"slds-text-body_small"}),description:"This body-small text helper sets smaller, subtler body copy. It is typically used as supportive text."},{id:"heading-large",label:"Heading size - Large",element:n.a.createElement(s,{className:"slds-text-heading_large"})},{id:"heading-medium",label:"Heading size - Medium",element:n.a.createElement(s,{className:"slds-text-heading_medium"})},{id:"heading-small",label:"Heading size - Small",element:n.a.createElement(s,{className:"slds-text-heading_small"})},{id:"heading-title",label:"Title",element:n.a.createElement(s,{className:"slds-text-title"})},{id:"heading-title--caps",label:"Title uppercase",element:n.a.createElement(s,{className:"slds-text-title_caps"})},{id:"longform",label:"Longform",element:n.a.createElement("div",{className:"slds-text-longform"},n.a.createElement("p",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("p",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("h3",{className:"slds-text-heading_small"},"Heading"),n.a.createElement("ul",null,n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog.",n.a.createElement("ul",null,n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog.",n.a.createElement("ul",null,n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog.")))))),n.a.createElement("h3",{className:"slds-text-heading_small"},"Heading"),n.a.createElement("ol",null,n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog.",n.a.createElement("ol",null,n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog.",n.a.createElement("ol",null,n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog."),n.a.createElement("li",null,"The quick brown fox jumps over the lazy dog.")))))))},{id:"align-left",label:"Align left",element:n.a.createElement(s,{className:"slds-text-align_left"}),description:"These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally."},{id:"align-right",label:"Align right",element:n.a.createElement(s,{className:"slds-text-align_right"}),description:"These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally."},{id:"align-center",label:"Align center",element:n.a.createElement(s,{className:"slds-text-align_center"}),description:"These helpers align text to the left, right, or center. Note that this is not used for layout and is only for aligning text horizontally."},{id:"text-color-default",label:"Color - Default",element:n.a.createElement(s,{className:"slds-text-color_default"})},{id:"text-color-success",label:"Color - Success",element:n.a.createElement(s,{className:"slds-text-color_success"})},{id:"text-color-weak",label:"Color - Weak",element:n.a.createElement(s,{className:"slds-text-color_weak"})},{id:"text-color-error",label:"Color - Error",element:n.a.createElement(s,{className:"slds-text-color_error"})},{id:"text-color-destructive",label:"Color - Destructive Actions",element:n.a.createElement(s,{className:"slds-text-color_destructive"})},{id:"text-color-inverse",label:"Color - Inverse",element:n.a.createElement("div",{className:"demo-only",style:{padding:"0.5rem",background:"#16325c"}},n.a.createElement(s,{className:"slds-text-color_inverse"}))},{id:"text-color-inverse-weak",label:"Color - Inverse - Weak",element:n.a.createElement("div",{className:"demo-only",style:{padding:"0.5rem",background:"#16325c"}},n.a.createElement(s,{className:"slds-text-color_inverse-weak"}))},{id:"text-font-monospace",label:"Font - Monospace",element:n.a.createElement(s,{className:"slds-text-font_monospace"})}],m=r.c.code,u=r.c.h2,b=r.c.h3,h=r.c.p,g=function(){return Object(a.createElement)(r.b,{},Object(a.createElement)("div",{className:"doc lead"},"For consistent typography throughout the application, we created text helper classes for headings and body text."),u({id:"About-Text"},"About Text"),h({},"In our framework, all headings (",m({},"h1"),"–",m({},"h6"),") are reset to the base (body text) size, with margins and padding reset to zero. When building an enterprise application, the heading level may vary depending on the context of the component or page. Using the correct heading level is important for accessibility."),u({id:"Base"},"Base"),Object(a.createElement)(o.a,null,Object(c.f)(d,"body-default")),b({id:"Mobile"},"Mobile"),Object(a.createElement)(i.a,{patternSpecificText:"text helpers will have an increased text size"}),Object(a.createElement)(o.a,{frameOnly:!0},Object(c.f)(d,"body-default")),u({id:"Examples"},"Examples"),b({id:"Body-Size-Small"},"Body Size - Small"),Object(a.createElement)(o.a,null,Object(c.f)(d,"body-small")),Object(a.createElement)(i.b,{docsLink:"#Mobile",header:"Mobile context changes",elementName:"elements with the small body text-size helper class"}),Object(a.createElement)(o.a,{frameOnly:!0},Object(c.f)(d,"body-small")),b({id:"Heading-Size-Large"},"Heading Size - Large"),Object(a.createElement)(o.a,null,Object(c.f)(d,"heading-large")),Object(a.createElement)(i.b,{docsLink:"#Mobile",header:"Mobile context changes",elementName:"elements with the large heading text-size helper class"}),Object(a.createElement)(o.a,{frameOnly:!0},Object(c.f)(d,"heading-large")),b({id:"Heading-Size-Medium"},"Heading Size - Medium"),Object(a.createElement)(o.a,null,Object(c.f)(d,"heading-medium")),Object(a.createElement)(i.b,{docsLink:"#Mobile",header:"Mobile context changes",elementName:"elements with the medium heading text-size helper class"}),Object(a.createElement)(o.a,{frameOnly:!0},Object(c.f)(d,"heading-medium")),b({id:"Heading-Size-Small"},"Heading Size - Small"),Object(a.createElement)(o.a,null,Object(c.f)(d,"heading-small")),Object(a.createElement)(i.b,{docsLink:"#Mobile",header:"Mobile context changes",elementName:"elements with the small heading text-size helper class"}),Object(a.createElement)(o.a,{frameOnly:!0},Object(c.f)(d,"heading-small")),b({id:"Title"},"Title"),Object(a.createElement)(o.a,null,Object(c.f)(d,"heading-title")),b({id:"Title-Uppercase"},"Title Uppercase"),Object(a.createElement)(o.a,null,Object(c.f)(d,"heading-title--caps")),b({id:"Longform"},"Longform"),Object(a.createElement)(o.a,null,Object(c.f)(d,"longform")),b({id:"Align-Left"},"Align Left"),Object(a.createElement)(o.a,null,Object(c.f)(d,"align-left")),b({id:"Align-Right"},"Align Right"),Object(a.createElement)(o.a,null,Object(c.f)(d,"align-right")),b({id:"Align-Center"},"Align Center"),Object(a.createElement)(o.a,null,Object(c.f)(d,"align-center")),b({id:"Color-Default"},"Color - Default"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-color-default")),b({id:"Color-Success"},"Color - Success"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-color-success")),b({id:"Color-Weak"},"Color - Weak"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-color-weak")),b({id:"Color-Error"},"Color - Error"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-color-error")),b({id:"Color-Destructive-Actions"},"Color - Destructive Actions"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-color-destructive")),b({id:"Color-Inverse"},"Color - Inverse"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-color-inverse")),b({id:"Color-Inverse-Weak"},"Color - Inverse - Weak"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-color-inverse-weak")),b({id:"Font-Monospace"},"Font - Monospace"),Object(a.createElement)(o.a,null,Object(c.f)(d,"text-font-monospace")))},f=function(){return Object(r.a)(g())}}});