(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6691:function(e,t,r){"use strict";r.d(t,{n:function(){return d}});var a,n,s=r(7294),l=function(){return(l=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function i(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}i(".styles-module_carousel-base__3keqD {\n	width: 100%;\n	box-sizing: border-box;\n	display: flex;\n	outline: none;\n	position: relative;\n}\n\n.styles-module_item-provider__YgMwz {\n	overflow: hidden;\n	width: 100%;\n	cursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n	-webkit-user-select: none;\n	        user-select: none;\n	-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n	height: 100%;\n	display: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n	z-index: 1;\n}\n"),(a=n||(n={}))[a.Right=-1]="Right",a[a.Left=1]="Left",function(){function e(e,t){this.arr=e,this.currentIndex=t}e.prototype.next=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e<t.length-1?e+1:0,this.current()},e.prototype.prev=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e>0&&e<t.length?e-1:t.length-1,this.current()},e.prototype.current=function(){return this.arr[this.currentIndex]}}(),i(".styles-module_carousel-navigation__1g_vs {\n	display: flex;\n	position: absolute;\n	bottom: 0;\n}\n");var o="styles-module_sliding__3T6T6";i(".styles-module_sliderBase__swkx1 {\n	width: 100%;\n	position: relative;\n}\n\n.styles-module_slider__o0fqa {\n	display: flex;\n	overflow-x: auto;\n	scrollbar-width: none; /* Firefox 64 */\n	-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n	/** WebKit */\n	display: none;\n}\n\n.styles-module_slider__o0fqa > * {\n	flex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n	pointer-events: none;\n}\n");var m={children:[],className:"",leftIcon:null,rightIcon:null,triggerClickOn:3},d=function(e){var t=l(l({},m),e),r=t.children,a=t.className,i=t.leftIcon,d=t.rightIcon,c=t.triggerClickOn,g=(0,s.useRef)(null),h=(0,s.useState)(!1),u=h[0],x=h[1],p=(0,s.useState)({startX:0,scrollLeft:0}),f=p[0],y=p[1],b=function(){var e=g.current;return{left:!!e&&e.scrollLeft>0,right:!!e&&e.scrollWidth>e.scrollLeft+e.offsetWidth}},w=(0,s.useState)(b()),v=w[0],j=w[1],N=function(e){j(b())},_=(0,s.useCallback)(function(e){null!==e&&(Object.defineProperty(g,"current",{value:e}),j(b()),e.addEventListener("scroll",N))},[g,r]),k=function(e){x(!1),j(b()),g.current.classList.remove(o)},I=function(e){C(500,function(e){for(var t,r=g.current,a=e===n.Left?r.scrollLeft+r.offsetWidth:r.scrollLeft,s=0,l=0,i=Array.from(r.children);l<i.length;l++){var o=i[l],m=(t=void 0,t=getComputedStyle(o),o.offsetWidth+(parseInt(t.marginLeft,10)||0)+(parseInt(t.marginRight,10)||0));if((s+=m)>=a){var d=e===n.Left?s-a:m;return(r.offsetWidth-d)*e}}return r.offsetWidth}(e),g.current.scrollLeft)},C=function(e,t,r){for(var a=0,n=0;a<=e;n++)window.setTimeout(T,a,n*t/100+r),a+=e/100},T=function(e){g.current.scrollLeft=e},L=function(e,t,r){return s.createElement("div",{"data-arrow":t,onClick:function(){return I(e)}},null!=r?r:s.createElement("button",null))};return s.createElement("div",{className:"styles-module_sliderBase__swkx1 "+a,"data-testid":"carousel"},v.left&&i&&L(n.Right,"left",i),v.right&&d&&L(n.Left,"right",d),s.createElement("div",{"data-testid":"sliderList",ref:_,onMouseDown:function(e){x(!0),y({startX:e.pageX-g.current.offsetLeft,scrollLeft:g.current.scrollLeft})},onMouseLeave:k,onMouseUp:k,onMouseMove:function(e){if(u){e.preventDefault();var t=e.pageX-g.current.offsetLeft-f.startX;Math.abs(t)>c&&g.current.classList.add(o),g.current.scrollLeft=f.scrollLeft-t}},className:"styles-module_slider__o0fqa"},r))}},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(85)}])},7834:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(5893),n=r(578);function s(e){let{name:t,position:r,description:s,imageLink:l}=e;return(0,a.jsxs)("div",{className:"my-4 ml-4 w-64 rounded-2xl bg-primary-400 p-5 md:my-8 md:ml-8 md:w-80 md:p-7",children:[(0,a.jsxs)("div",{className:"mb-5 flex items-start space-x-7",children:[(0,a.jsx)("div",{className:"w-10",children:l?(0,a.jsx)(n.Z,{useSkeleton:!0,color:"#D9D9D9",src:null!=l?l:"",width:"50",height:"50",alt:"Icon",imgClassName:"rounded-xl mt-2"}):(0,a.jsx)("div",{className:"h-[50px] w-[50px] rounded-full bg-[#D9D9D9]"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xl font-extrabold",children:t}),(0,a.jsx)("p",{children:r})]})]}),(0,a.jsx)("p",{children:s})]})}},4300:function(e,t,r){"use strict";var a=r(5893),n=r(7294),s=r(1474),l=r(4914);let i=n.forwardRef((e,t)=>{let{children:r,className:n,variant:i="primary",size:o="base",isDarkBg:m=!1,leftIcon:d,rightIcon:c,leftIconClassName:g,rightIconClassName:h,...u}=e;return(0,a.jsxs)(l.Z,{ref:t,...u,className:(0,s.Z)("inline-flex items-center rounded font-medium","focus:outline-none focus-visible:ring focus-visible:ring-primary-500","shadow-sm","transition-colors duration-75",["base"===o&&["px-3 py-1.5","text-sm md:text-base"],"sm"===o&&["px-2 py-1","text-xs md:text-sm"]],["primary"===i&&["bg-primary-500 text-white","border border-primary-600","hover:bg-primary-600 hover:text-white","active:bg-primary-700","disabled:bg-primary-700"],"outline"===i&&["text-primary-500","border border-primary-500","hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",m&&"hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"],"ghost"===i&&["text-primary-500","shadow-none","hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",m&&"hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"],"light"===i&&["bg-white text-gray-700","border border-gray-300","hover:bg-gray-100 hover:text-dark","active:bg-white/80 disabled:bg-gray-200"],"dark"===i&&["bg-gray-900 text-white","border border-gray-600","hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700"]],"disabled:cursor-not-allowed",n),children:[d&&(0,a.jsx)("div",{className:(0,s.Z)(["base"===o&&"mr-1","sm"===o&&"mr-1.5"]),children:(0,a.jsx)(d,{className:(0,s.Z)(["base"===o&&"md:text-md text-md","sm"===o&&"md:text-md text-sm"],g)})}),r,c&&(0,a.jsx)("div",{className:(0,s.Z)(["base"===o&&"ml-1","sm"===o&&"ml-1.5"]),children:(0,a.jsx)(c,{className:(0,s.Z)(["base"===o&&"text-md md:text-md","sm"===o&&"md:text-md text-sm"],h)})})]})});t.Z=i},85:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var a=r(5893),n=r(6691);r(7294);var s=r(7834),l=r(5044),i=r(5423),o=r(4300),m=r(578),d=r(878);function c(){return(0,a.jsxs)(l.Z,{useConstrainedBox:!1,children:[(0,a.jsx)(d.Z,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(i.Z,{useConstrainedBox:!1,className:"sm:bg-transparent lg:bg-[#F8F8FA]",children:(0,a.jsx)(i.Z,{children:(0,a.jsxs)("section",{className:"mx-6 my-6 flex flex-col md:mx-10 md:my-5 lg:mx-16 lg:my-10 lg:flex-row lg:justify-between xl:mx-24 xl:my-12",children:[(0,a.jsxs)("div",{className:"order-2 h-full lg:order-1 lg:m-auto lg:w-3/4",children:[(0,a.jsx)("p",{className:"mt-5 text-base text-primary-700 md:text-2xl md:text-primary-900 lg:mb-6 lg:mt-auto",children:"Introducing"}),(0,a.jsx)("h1",{className:"my-2 w-auto text-3xl font-extrabold leading-normal md:mb-6 md:text-6xl lg:w-[82%]",children:"Xellar Hardware Wallet"}),(0,a.jsx)("p",{className:"leading-2 mb-5 whitespace-normal text-base md:mb-8 md:text-2xl lg:my-12 lg:leading-normal xl:w-7/12",children:"The worlds most lightweight & secure hard wallet - connect to any wallet"}),(0,a.jsx)(o.Z,{variant:"dark",href:"/shop",className:"rounded-2xl px-14 py-4 font-bold",children:"Shop Now"})]}),(0,a.jsx)("div",{className:"order-1 rounded-2xl bg-[#EFF1F3]  bg-gradient-to-br from-[#0286DEC2] via-[#34A3EE91] to-[#DCEEFFBA] lg:order-2 lg:rounded-none ",children:(0,a.jsx)(m.Z,{imgClassName:"mx-auto my-auto p-5 md:w-2/3 lg:w-auto lg:py-10 xl:py-0 max-h-[500px] h-full w-full max-w-[1000px]",className:"h-full w-full   lg:mt-40 lg:mb-28 lg:ml-[0px] xl:ml-[-150px]",useSkeleton:!0,src:"/images/hero-image.png",width:"2000",height:"2000",alt:"Icon"})})]})})}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)("section",{className:"my-10 text-center md:my-20 md:mx-16 xl:mx-24",id:"products",children:[(0,a.jsx)("h1",{className:"mb-4 text-3xl font-[600] md:mb-6 md:text-5xl",children:"Products"}),(0,a.jsx)("p",{className:"mx-auto hidden text-xl md:mb-6 md:block lg:w-1/2",children:"Xellar is your next generation decentralised Bank. Download the decentralised crypto wallet for free and protect your crypto."}),(0,a.jsxs)("div",{className:"px-6 text-left md:text-center lg:my-32 lg:grid lg:grid-cols-3 lg:px-0",children:[(0,a.jsxs)("div",{className:"mb-12 md:mb-0",children:[(0,a.jsx)(m.Z,{imgClassName:"mx-auto py-2",className:"h-52 w-full rounded-xl bg-[#EFF1F3] md:bg-transparent",useSkeleton:!0,src:"/images/products-1.png",width:"160",height:"150",alt:"Icon"}),(0,a.jsx)("h2",{className:"mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8",children:"Crypto Wallet"}),(0,a.jsx)("p",{className:"text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal",children:"Use our crypto wallet without the need to purchase a hardwallet"})]}),(0,a.jsxs)("div",{className:"mb-12 md:mb-0 lg:mx-10",children:[(0,a.jsx)(m.Z,{imgClassName:"mx-auto px-3 md:px-16 lg:px-0 py-6",className:"w-full rounded-xl bg-[#EFF1F3] md:bg-transparent lg:h-52",useSkeleton:!0,src:"/images/products-2.png",width:"300",height:"500",alt:"Icon"}),(0,a.jsx)("h2",{className:"mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8",children:"Hardware"}),(0,a.jsx)("p",{className:"text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal",children:"Only if you want to protect your crypto with military grade security"})]}),(0,a.jsxs)("div",{className:"mb-12 md:mb-0",children:[(0,a.jsx)(m.Z,{imgClassName:"mx-auto py-4",className:"h-52 w-full rounded-xl bg-[#EFF1F3] md:bg-transparent",useSkeleton:!0,src:"/images/products-3.png",width:"125",height:"150",alt:"Icon"}),(0,a.jsx)("h2",{className:"mt-2 mb-2 text-2xl font-semibold md:text-4xl lg:mb-8",children:"Wealth Management"}),(0,a.jsx)("p",{className:"text-base font-normal leading-tight md:mx-auto md:my-4 md:w-2/3 md:text-xl md:leading-normal",children:"Don’t leave your crypto idle, gain interest or invest your portfolio to get real gains"})]})]})]})}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)("section",{className:"grid grid-cols-1 bg-gradient-to-b from-[#F8F8FA] to-[#F3F3F3] lg:grid-cols-2",children:[(0,a.jsx)(m.Z,{imgClassName:"xl:px-20 lg:px-14 mx-auto",className:"mx-auto mb-10 sm:w-full md:w-auto lg:mb-[-90px] lg:mt-[30px] xl:mb-[-120px] xl:mt-[50px]",useSkeleton:!0,src:"/images/image-1.png",width:"675",height:"565",alt:"Icon"}),(0,a.jsxs)("div",{className:"order-first my-10 px-6 md:my-16 md:px-14 lg:order-last lg:my-auto lg:px-0 xl:ml-10",children:[(0,a.jsx)("h1",{className:"mb-4 w-11/12 font-extrabold md:w-2/3 md:text-4xl md:leading-normal lg:my-6 lg:w-5/6 xl:text-5xl",children:"Next Generation Decentralised Bank"}),(0,a.jsx)("p",{className:"w-11/12 whitespace-pre-line font-normal leading-tight md:w-2/3 md:text-xl md:leading-normal lg:w-5/6 xl:w-2/3",children:"The worlds most lightweight & secure hard wallet - connect to any wallet"})]})]})}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)("section",{className:"my-14 md:my-24 lg:my-52 xl:my-72",children:[(0,a.jsxs)("div",{className:"mx-6 md:mx-16 md:text-center lg:my-16",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold leading-tight md:text-5xl md:font-semibold lg:text-[3.5rem]",children:"Trusted by over 500+ happy customers"}),(0,a.jsx)("p",{className:"my-4 mx-auto whitespace-normal text-sm leading-tight md:my-8 md:text-xl md:leading-normal lg:w-[760px]",children:"We’re proud to say that our customers love our product and the experience they have with our platform. Here are a few of their testimonials:"})]}),(0,a.jsx)(n.n,{children:[{name:"Matthew",companyName:"Crypto Inc.",jobTitle:"Senior Developer",review:"I have been using this cryptocurrency wallet for several months now and I am thoroughly impressed with its functionality and security. The user interface is intuitive and easy to navigate, and I appreciate the added layer of security measures that have been put in place.",image:"/images/person/gashashasa.png"},{name:"Kevin",companyName:"Swing",jobTitle:"Marketing Manager",review:"As someone who is not particularly tech-savvy, I was hesitant to start using a cryptocurrency wallet. However, this particular wallet made the process incredibly simple and straightforward. I now feel confident in my ability to manage my digital assets.",image:"/images/person/vcjjvc bjbjjukkutuktktutuk.png"},{name:"Alex Johnson",companyName:"CryptoTrader LLC",jobTitle:"CEO",review:"This wallet is an excellent option for both beginners and experienced cryptocurrency users. It provides a comprehensive range of features and tools that are designed to meet the needs of all types of investors.",image:"/images/person/zxzgzxgzxgzxgzg.png"},{name:"Samantha Lee",companyName:"Blockchain Ventures",jobTitle:"Investor Relations",review:"I have tried several cryptocurrency wallets in the past, but this one stands out as the best. It is highly secure and offers a wide range of digital assets to choose from, making it an ideal choice for anyone who wants to invest in the cryptocurrency market.",image:"/images/person/woman1.jpg.png"},{name:"Michael Chen",companyName:"XXXXX Ventures",jobTitle:"Cryptocurrency Analyst",review:"As someone who works in the cryptocurrency industry, I am constantly looking for new and innovative ways to manage my digital assets. This wallet offers a level of functionality and security that I have not found in any other wallet on the market.",image:"/images/person/sdaszxgxg.png"},{name:"Emily Davis",companyName:"Blockchain Solutions Inc.",jobTitle:"Chief Technology Officer",review:"This wallet is incredibly user-friendly and easy to use, which makes it a great option for beginners. It also offers a range of advanced features that are perfect for more experienced users.",image:"/images/person/fqeqgqgqeg.png"},{name:"David Kim",companyName:"CryptoX",jobTitle:"Customer Support Representative",review:"One of the things I appreciate most about this wallet is the excellent customer support. Whenever I have had a question or issue, the support team has been quick to respond and incredibly helpful.",image:"/images/person/avatar-gen119721b1951faad477d0cfd235dfa445.jpg.png"},{name:"Roger Jones",companyName:"Bitcoin Investments",jobTitle:"Portfolio Manager",review:"I have been using this wallet to manage my digital assets for several months now and have been extremely satisfied with its performance. It is highly secure and offers a range of features that make it easy to manage a diverse portfolio of cryptocurrencies.",image:"/images/person/avatar-gen79879468ac6f09505f97806aa6bc5017.jpg-1.png"},{name:"Petru Sidarta",companyName:"CryptoVault",jobTitle:"Operation Manager",review:"This wallet offers an excellent combination of security and functionality, which makes it an ideal choice for anyone who wants to invest in cryptocurrencies. The team behind the wallet is also highly responsive and dedicated to providing the best possible user experience.",image:"/images/person/mrykutlktjg.png"}].map(e=>(0,a.jsx)(s.Z,{name:e.name,position:"".concat(e.companyName," - ").concat(e.jobTitle),description:"“".concat(e.review,"”"),imageLink:e.image},e.name.toString()))})]})}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)("section",{className:"backgroundCard bg-primary-400 py-24 px-10 text-center shadow-lg",children:[(0,a.jsx)("h1",{className:"text-3xl font-extrabold md:text-4xl lg:text-5xl",children:"Control your Cryptocurrency"}),(0,a.jsx)("p",{className:"my-6 text-sm md:text-base lg:my-20 lg:text-lg",children:"There has never been a better time than right now."}),(0,a.jsx)(o.Z,{variant:"dark",href:"/shop",className:"rounded-2xl px-14 py-4 font-bold",children:"Shop Now"})]})})]})]})}}},function(e){e.O(0,[814,475,795,815,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);