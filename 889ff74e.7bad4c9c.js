(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{169:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return a})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return s}));var n=l(1),r=l(9),b=(l(0),l(209)),c={id:"structures",title:"Structures"},a={id:"modules/blocks/structures",title:"Structures",description:"Structures are sets of blocks that can be dynamically copied into the world in response to match events.",source:"@site/docs/modules/blocks/structures.mdx",permalink:"/docs/modules/blocks/structures",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/blocks/structures.mdx",sidebar:"Modules",previous:{title:"Renewables",permalink:"/docs/modules/blocks/renewables"}},i=[],u={rightToc:i};function s(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Structures are sets of blocks that can be dynamically copied into the world in response to match events.\nThe original structure is built into the map by the mapmaker, and defined in XML with regions.\nWhen the match loads, the original structures are cleared from the world and saved."),Object(b.b)("p",null,"Structures are brought to life by something called a ",Object(b.b)("em",{parentName:"p"},"dynamic"),". This is an XML construct that causes a structure to appear at a specified location in reaction to a given ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/modules/filters"}),"filter")," Whenever the filter is in a passing state (when it has a value of ",Object(b.b)("inlineCode",{parentName:"p"},"ALLOW")," or ",Object(b.b)("inlineCode",{parentName:"p"},"ABSTAIN"),") the structure will appear. When the filter is not passing, (when its value is ",Object(b.b)("inlineCode",{parentName:"p"},"DENY"),") the structure will disappear."),Object(b.b)("p",null,"Structures are a very powerful feature that can be used to implement an endless variety of custom game mechanics."),Object(b.b)("div",{className:"alert alert--warning",style:{marginBottom:"30px"}},"Currently, only"," ",Object(b.b)("a",{href:"/modules/filters#objectiveFilter"},"objective filters"),", time filters, and ",Object(b.b)("a",{href:"/modules/filters#flagFilter"},"flag filters")," can be used with dynamic structures, as well as"," ",Object(b.b)("a",{href:"/modules/filters#filterModifiers"},"filter modifiers."),Object(b.b)("br",null),"Other filter types may be supported in the future."),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Element"),Object(b.b)("th",null,"Description"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<structures> </structures>")),Object(b.b)("td",null,"Element containing all structures and dynamics")),Object(b.b)("tr",null,Object(b.b)("th",null,"Sub-elements"),Object(b.b)("th",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<structure>")),Object(b.b)("td",null,"Defines a block structure that is part of the map")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<dynamic>")),Object(b.b)("td",null,"Causes a structure to be placed/removed at some location in reaction to a filter"))))),Object(b.b)("h5",{id:"structure-attributes"},"Structure Attributes"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Attribute"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value"),Object(b.b)("th",null,"Default"))),Object(b.b)("tbody",null,Object(b.b)("tr",{id:"structureId"},Object(b.b)("td",null,Object(b.b)("label",null,"id")),Object(b.b)("td",null,"Unique identifier used to reference the structure from other places in the XML."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"String")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"region")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be an attribute or sub-element."},"Property"),Object(b.b)("span",{className:"badge badge--danger"},"Required"),"A single region containing the structure."),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/regions"},"Cuboid Region")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"origin")),Object(b.b)("td",null,"A location used as the reference point when specifying destination points for the structure."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"X,Y,Z")),Object(b.b)("td",null,"Low corner of ",Object(b.b)("label",null,"region")," bounding box.")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"air")),Object(b.b)("td",null,"Whether air blocks should be considered part of the structure. If true, empty blocks in the structure's region will be copied along with it, clearing any blocks at the destination. If false, air blocks are not copied and the structure is mixed in with blocks at the destination."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"clear")),Object(b.b)("td",null,"Whether to clear the original structure when the match loads. If true, the structure's region will be filled with air, and players will never see it. If false, the original structure is not modified."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"true"))))),Object(b.b)("h5",{id:"dynamic-attributes"},"Dynamic Attributes"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Attribute"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value"),Object(b.b)("th",null,"Default"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"id")),Object(b.b)("td",null,"Unique identifier used to reference the dynamic from other places in the XML."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"String")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"structure")),Object(b.b)("td",null,Object(b.b)("label",null,"id"),"of the structure to place."),Object(b.b)("td",null,Object(b.b)("a",{href:"#structureId"},"Structure ID")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"filter")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Conditions under which the structure is placed.",Object(b.b)("br",null),Object(b.b)("em",null,"Only",Object(b.b)("label",null,"<objective>"),",",Object(b.b)("label",null,"<time>"),", and flag-related filters are currently supported.")),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/filters"},"Filter")),Object(b.b)("td",null,Object(b.b)("label",null,"<always/>"),Object(b.b)("br",null),"(structure is permanently placed)")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"trigger")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Dynamic conditions under which the structure is placed."),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/filters"},"Dynamic Filter")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"location")),Object(b.b)("td",null,"Location to place the structure at. The structure's",Object(b.b)("label",null,"origin"),"will be at this point.",Object(b.b)("br",null),Object(b.b)("em",null,"This is an alternative to",Object(b.b)("label",null,"offset"))),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"X,Y,Z")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"offset")),Object(b.b)("td",null,"Relative position to place the structure at. The structure will be translated by this amount from it's original location.",Object(b.b)("br",null),Object(b.b)("em",null,"This is an alternative to",Object(b.b)("label",null,"location"))),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"X,Y,Z")),Object(b.b)("td",null,"0,0,0",Object(b.b)("br",null),"(structure placed at its original location)"))))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Examples")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<structures>\n    \x3c!-- Define a 25x2x7 cuboid structure called blue-bridge --\x3e\n    \x3c!-- The original structure is high in the sky around 0,0 --\x3e\n    <structure id="blue-bridge" air="false">\n        <region>\n            <cuboid min="0,192,0" size="25,2,7"/>\n        </region>\n    </structure>\n\n    \x3c!-- Define a cylindrical structure called tower, using a close fitting cuboid --\x3e\n    \x3c!-- The original structure is built in an area outside the map, around 400,400 --\x3e\n    <structure id="tower" origin="400,64,400">\n        <region>\n            <cuboid min="397,64,397" size="6,12,6"/>\n        </region>\n    </structure>\n\n    \x3c!-- Make blue-bridge appear whenever Blue Team owns the control-point called "hill" --\x3e\n    \x3c!-- The bridge will appear 128 blocks directly below it\'s original location --\x3e\n    <dynamic structure="blue-bridge" offset="0,-128,0">\n        <filter>\n            <objective team="blue-team">hill</objective>\n        </filter>\n    </dynamic>\n\n    \x3c!-- Start the match with a tower at 36,64,0 --\x3e\n    \x3c!-- After 5 minutes, move the tower to -36,64,0 --\x3e\n    \x3c!-- After 10 minutes, remove the tower --\x3e\n    <dynamic structure="tower" location="36,64,0">\n        <filter>\n            <not>\n                <time>5m</time>\n            </not>\n        </filter>\n    </dynamic>\n\n    <dynamic structure="tower" location="-36,64,0">\n        <filter>\n            <all>\n                <time>5m</time>\n                <not>\n                    <time>10m</time>\n                </not>\n            </all>\n        </filter>\n    </dynamic>\n</structures>\n')))}s.isMDXComponent=!0},209:function(e,t,l){"use strict";l.d(t,"a",(function(){return o})),l.d(t,"b",(function(){return j}));var n=l(0),r=l.n(n);function b(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){b(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a({},t,{},e)),l},o=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=s(l),O=n,j=o["".concat(c,".").concat(O)]||o[O]||d[O]||b;return l?r.a.createElement(j,a({ref:t},u,{components:l})):r.a.createElement(j,a({ref:t},u))}));function j(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=l.length,c=new Array(b);c[0]=O;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<b;u++)c[u]=l[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"}}]);