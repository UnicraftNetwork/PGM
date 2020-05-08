(window.webpackJsonp=window.webpackJsonp||[]).push([[54,8],{193:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),l=a(211),o=a.n(l),i=a(221),s=a(213),u=a(210),m=a(212),d=a(194),h=a.n(d),f=[{title:c.a.createElement(c.a.Fragment,null,"Easy to Use"),imageUrl:"img/ok-hand.png",description:c.a.createElement(c.a.Fragment,null,"Unlike the original release, PGM 1.8 is much easier to use. It has no backend, website or API to make hosting more cost-effective.")},{title:c.a.createElement(c.a.Fragment,null,"Open Source"),imageUrl:"img/open-hands.png",description:c.a.createElement(c.a.Fragment,null,"Not only is PGM easy to use, but contributing requires no dependency installation. The plugin is designed with reliability, stability and performance in mind, all made possible thanks to our wonderful contributors.")},{title:c.a.createElement(c.a.Fragment,null,"Active Community"),imageUrl:"img/handshake.png",description:c.a.createElement(c.a.Fragment,null,"Be part of a community of over 20 contributors and help keep the project alive! Our ",c.a.createElement("a",{href:"https://discord.gg/CvJGbrV"},"Discord server")," is the best place to discuss bug fixes and implementations in real time.")}];function v(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(m.a)(t);return c.a.createElement("div",{className:o()("col col--4",h.a.feature)},r&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:h.a.featureImage,src:r,alt:a})),c.a.createElement("h3",null,a),c.a.createElement("p",null,n))}t.default=function(){var e=Object(u.a)().siteConfig,t=void 0===e?{}:e;return c.a.createElement(i.a,{title:"Home"},c.a.createElement("header",{className:o()("hero",h.a.banner)},c.a.createElement("div",{className:o()(h.a.bannerOverlay)}),c.a.createElement("video",{video:!0,playsinline:"playsinline",autoplay:"autoplay",muted:"muted",loop:"loop",poster:"img/fallback.jpg"},c.a.createElement("source",{src:"video/video.mp4",type:"video/mp4"})),c.a.createElement("div",{className:o()("container",h.a.bannerContainer)},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6"},c.a.createElement("h1",{className:o()("hero__title",h.a.bannerTitle)},"The original, redefined."),c.a.createElement("p",{className:"hero__subtitle",style:{color:"#FFF"}},t.tagline),c.a.createElement("div",{className:h.a.Ctas},c.a.createElement(s.a,{className:o()("button button--outline button--primary button--lg",h.a.getStarted),to:Object(m.a)("docs/guides/migrate")},"Get Started"),c.a.createElement("span",{className:h.a.GitHubButtonWrapper},c.a.createElement("iframe",{className:h.a.GitHubButton,src:"https://ghbtns.com/github-btn.html?user=Electroid&repo=PGM&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"})))),c.a.createElement("div",{className:"col col--6"},c.a.createElement("img",{src:"img/shield.png",alt:"PGM logo",width:"350px",className:o()(h.a.floating)}))))),c.a.createElement("main",{className:"eskere"},f&&f.length&&c.a.createElement("section",{className:h.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},f.map((function(e,t){return c.a.createElement(v,Object(n.a)({key:t},e))})))))))}},215:function(e,t,a){"use strict";var n=a(0),r=a(217);t.a=function(){return Object(n.useContext)(r.a)}},217:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},218:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},219:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},220:function(e,t,a){"use strict";var n=a(210),r=a(215),c=a(212),l=a(214);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,o=(a=void 0===a?{}:a).logo,i=void 0===o?{}:o,s=Object(r.a)().isDarkTheme,u=i.href||t,m={};i.target?m={target:i.target}:Object(l.a)(u)||(m={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:m,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},221:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(232),l=a(214),o=a(210),i=a(212),s="",u="dark",m=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],l=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),l(s)}),[]),m=Object(n.useCallback)((function(){c(u),l(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:m}},d=a(217);var h=function(e){var t=m(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(d.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},f=(a(52),a(216),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign(Object.assign({},a),{},((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var b=function(e){var t=f(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},g=a(131),p=a.n(g);var E=function(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,c=a.id,l=a.content,i=a.backgroundColor,s=a.textColor,u=Object(n.useState)(!0),m=u[0],d=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=c!==e;localStorage.setItem("docusaurus.announcement.id",c),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&d(!1)}),[]),!l||m?null:r.a.createElement("div",{className:p.a.announcementBar,style:{backgroundColor:i,color:s},role:"banner"},r.a.createElement("div",{className:p.a.announcementBarContent,dangerouslySetInnerHTML:{__html:l}}),r.a.createElement("button",{type:"button",className:p.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),d(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},k=a(222),_=a(229);a(135);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,m=a.url,d=e.children,f=e.title,v=e.noFooter,g=e.description,p=e.image,O=e.keywords,y=e.permalink,N=e.version,j=f?f+" | "+s:s,C=p||u,w=m+Object(i.a)(C);Object(l.a)(C)||(w=C);var T=Object(i.a)(n);return r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),n&&r.a.createElement("link",{rel:"shortcut icon",href:T}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),N&&r.a.createElement("meta",{name:"docsearch:version",content:N}),O&&O.length&&r.a.createElement("meta",{name:"keywords",content:O.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:w}),C&&r.a.createElement("meta",{property:"twitter:image",content:w}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),y&&r.a.createElement("meta",{property:"og:url",content:m+y}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(E,null),r.a.createElement(k.a,null),r.a.createElement("div",{className:"main-wrapper"},d),!v&&r.a.createElement(_.a,null)))}},222:function(e,t,a){"use strict";var n=a(1),r=(a(216),a(52),a(9)),c=a(0),l=a.n(c),o=a(211),i=a.n(o),s=a(213),u=a(210),m=a(212),d=a(231),h=a(224),f=a(215),v=a(230),b=a(219),g=a(220),p=a(133),E=a.n(p);function k(e){var t=e.activeBasePath,a=e.to,c=e.href,o=e.label,i=e.activeClassName,u=void 0===i?"navbar__link--active":i,d=Object(r.a)(e,["activeBasePath","to","href","label","activeClassName"]),h=Object(m.a)(a),f=Object(m.a)(t);return l.a.createElement(s.a,Object(n.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:c}:Object.assign({isNavLink:!0,activeClassName:u,to:h},t?{isActive:function(e,t){return t.pathname.startsWith(f)}}:null),d),o)}function _(e){var t=e.items,a=e.position,c=e.className,o=Object(r.a)(e,["items","position","className"]),s=function(e,t){return void 0===t&&(t=!1),i()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?l.a.createElement("div",{className:i()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},l.a.createElement(k,Object(n.a)({className:s(c)},o,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),o.label),l.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,c=Object(r.a)(e,["className"]);return l.a.createElement("li",{key:t},l.a.createElement(k,Object(n.a)({activeClassName:"dropdown__link--active",className:s(a,!0)},c)))})))):l.a.createElement(k,Object(n.a)({className:s(c)},o))}function O(e){var t=e.items,a=e.className,c=Object(r.a)(e,["items","className"]),o=function(e,t){return void 0===t&&(t=!1),i()("menu__link",{"menu__link--sublist":t},e)};return t?l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(k,Object(n.a)({className:o(a,!0)},c),c.label),l.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,i=Object(r.a)(e,["className"]);return l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(k,Object(n.a)({activeClassName:"menu__link--active",className:o(a)},i,{onClick:c.onClick})))})))):l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(k,Object(n.a)({className:o(a)},c)))}t.a=function(){var e,t,a=Object(u.a)(),r=a.siteConfig.themeConfig,o=r.navbar,m=(o=void 0===o?{}:o).title,p=o.links,k=void 0===p?[]:p,y=o.hideOnScroll,N=void 0!==y&&y,j=r.disableDarkMode,C=void 0!==j&&j,w=a.isClient,T=Object(c.useState)(!1),S=T[0],M=T[1],L=Object(c.useState)(!1),x=L[0],D=L[1],P=Object(f.a)(),I=P.isDarkTheme,B=P.setLightTheme,F=P.setDarkTheme,G=Object(v.a)(N),X=G.navbarRef,U=G.isNavbarVisible,H=Object(g.a)(),A=H.logoLink,R=H.logoLinkProps,Y=H.logoImageUrl,V=H.logoAlt;Object(b.a)(S);var W=Object(c.useCallback)((function(){M(!0)}),[M]),J=Object(c.useCallback)((function(){M(!1)}),[M]),K=Object(c.useCallback)((function(e){return e.target.checked?F():B()}),[B,F]);return l.a.createElement("nav",{ref:X,className:i()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":S},e[E.a.navbarHideable]=N,e[E.a.navbarHidden]=!U,e[E.a.orange]=E.a.orange,e))},l.a.createElement("div",{className:"navbar__inner container"},l.a.createElement("div",{className:"navbar__items"},null!=k&&0!==k.length&&l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:W,onKeyDown:W},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:A},R),null!=Y&&l.a.createElement("img",{key:w,className:"navbar__logo",src:Y,alt:V}),null!=m&&l.a.createElement("strong",{className:i()("navbar__title",(t={},t[E.a.hideLogoText]=x,t))},m)),k.filter((function(e){return"left"===e.position})).map((function(e,t){return l.a.createElement(_,Object(n.a)({},e,{key:t}))}))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},k.filter((function(e){return"right"===e.position})).map((function(e,t){return l.a.createElement(_,Object(n.a)({},e,{key:t}))})),!C&&l.a.createElement(h.a,{className:E.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:I,onChange:K}),l.a.createElement(d.a,{handleSearchBarToggle:D,isSearchBarExpanded:x}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:J}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:J,to:A},R),null!=Y&&l.a.createElement("img",{key:w,className:"navbar__logo",src:Y,alt:V}),null!=m&&l.a.createElement("strong",{className:"navbar__title"},m)),!C&&S&&l.a.createElement(h.a,{"aria-label":"Dark mode toggle in sidebar",checked:I,onChange:K})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},k.map((function(e,t){return l.a.createElement(O,Object(n.a)({},e,{onClick:J,key:t}))})))))))}},224:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(225),o=a.n(l),i=a(210),s=a(211),u=a.n(s),m=a(132),d=a.n(m),h=function(){return c.a.createElement("span",{className:u()(d.a.toggle,d.a.moon)})},f=function(){return c.a.createElement("span",{className:u()(d.a.toggle,d.a.sun)})};t.a=function(e){var t=Object(i.a)().isClient;return c.a.createElement(o.a,Object(n.a)({disabled:!t,icons:{checked:c.a.createElement(h,null),unchecked:c.a.createElement(f,null)}},e))}},225:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=d(c),o=d(a(211)),i=d(a(16)),s=d(a(226)),u=d(a(227)),m=a(228);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,m.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,m.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,m.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},226:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},227:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},228:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},229:function(e,t,a){"use strict";var n=a(1),r=a(9),c=a(0),l=a.n(c),o=a(211),i=a.n(o),s=a(213),u=a(210),m=a(212),d=a(134),h=a.n(d);function f(e){var t=e.to,a=e.href,c=e.label,o=Object(r.a)(e,["to","href","label"]),i=Object(m.a)(t);return l.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},o),c)}var v=function(e){var t=e.url,a=e.alt;return l.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(u.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,c=n.links,o=void 0===c?[]:c,s=n.logo,d=void 0===s?{}:s,b=Object(m.a)(d.src);return a?l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},o&&o.length>0&&l.a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return l.a.createElement("div",{key:t,className:i()("col footer__col",h.a.footerCol)},null!=e.title?l.a.createElement("h4",{className:i()("footer__title",h.a.footerTitle)},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(f,e))}))):null)}))),(d||r)&&l.a.createElement("div",{className:"text--center"},d&&d.src&&l.a.createElement("div",{className:"margin-bottom--sm"},d.href?l.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},l.a.createElement(v,{alt:d.alt,url:b})):l.a.createElement(v,{alt:d.alt,url:b})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))):null}},230:function(e,t,a){"use strict";var n=a(0),r=a(218);var c=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},l=a(30),o=a.n(l),i=function(){return{scrollX:o.a.canUseDOM?window.pageXOffset:0,scrollY:o.a.canUseDOM?window.pageYOffset:0}},s=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(i()),r=a[0],c=a[1],l=function(){var t=i();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r};t.a=function(e){var t=Object(n.useState)(!0),a=t[0],l=t[1],o=Object(n.useState)(!1),i=o[0],u=o[1],m=Object(n.useState)(0),d=m[0],h=m[1],f=Object(n.useState)(0),v=f[0],b=f[1],g=Object(n.useCallback)((function(e){null!==e&&b(e.getBoundingClientRect().height)}),[]),p=Object(r.b)(),E=c(p.hash),k=E[0],_=E[1];return s((function(t){var a=t.scrollY;if(e&&(0===a&&l(!0),!(a<v))){if(i)return u(!1),l(!1),void h(a);var n=document.documentElement.scrollHeight-v,r=window.innerHeight;d&&a>=d?l(!1):a+r<n&&l(!0),h(a)}}),[d,v]),Object(n.useEffect)((function(){e&&(l(!0),_(p.hash))}),[p]),Object(n.useEffect)((function(){e&&k&&u(!0)}),[k]),{navbarRef:g,isNavbarVisible:a}}},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){return null}}}]);