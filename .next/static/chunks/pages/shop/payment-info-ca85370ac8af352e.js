(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{8071:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/payment-info",function(){return l(8134)}])},8134:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return y}});var a=l(5893),n=l(9335),t=l(8262),r=l(5021),d=l(6154),i=l(5675),o=l.n(i),c=l(1664),m=l.n(c),x=l(1163),u=l(7294),p=l(5678),h=l(9809),b=l(2727),f=l(878),j=l(282),N=l(3060);function g(e){var s;let{customer:l,children:d}=e,i=(0,x.useRouter)(),c=(0,r.CM)(),[f]=u.useState(19.99),[g,y]=u.useState(!1),[w,v]=u.useState(0),[C,_]=u.useState(!1),[S,k]=u.useState({name:"",address:""}),F=()=>{if(!(null==c?void 0:c.cardFields))throw Error("Unable to find any child components in the <PayPalHostedFieldsProvider />");let e=Object.values(c.cardFields.getState().fields).some(e=>!e.isValid)||!S.name||!S.address;if(e){console.log("Form invalid"),p.Am.error("Form invalid",{position:p.Am.POSITION.BOTTOM_LEFT,autoClose:3e3});return}y(!0),_(!0),c.cardFields.submit(S).then(e=>{fetch("/api/payment-paypal/".concat(e.orderId),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(e=>e.json()).then(e=>{p.Am.success("Payment Successful!",{position:p.Am.POSITION.BOTTOM_LEFT,autoClose:3e3}),window.localStorage.removeItem("amount"),window.localStorage.removeItem("customer_info"),i.push("/shop")}).catch(e=>{console.log(e),p.Am.error(e,{position:p.Am.POSITION.BOTTOM_LEFT,autoClose:3e3})}).finally(()=>{y(!1),_(!1)})}).catch(e=>{console.log(e),y(!1),_(!1)})},B=e=>{S[e.target.id]=e.target.value,k({...S})};return u.useEffect(()=>{v(Number(window.localStorage.getItem("amount"))>0?Number(window.localStorage.getItem("amount")):1)},[]),(0,a.jsxs)("div",{className:"flex h-screen justify-between",children:[(0,a.jsxs)("div",{className:"flex w-full flex-col justify-between px-5 py-5 md:px-10 lg:h-screen lg:w-1/2 xl:px-24",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"my-2 flex justify-between md:my-5",children:[(0,a.jsxs)(m(),{href:"/",className:"flex items-center gap-1 md:gap-2",children:[(0,a.jsx)(j.Z,{height:"auto",className:"w-[80px] md:w-auto",width:140}),(null==i?void 0:null===(s=i.pathname)||void 0===s?void 0:s.split("/")[1])==="shop"?(0,a.jsx)("h1",{className:"text-xl font-semibold md:mb-1 md:text-4xl lg:hidden",children:"Shop"}):""]}),(0,a.jsxs)("div",{className:"flex items-center justify-end gap-1 md:gap-4",children:[(0,a.jsxs)("p",{className:"text-sm font-medium md:text-xl",children:["$",2==w?36.99:3==w?"50.00":(f*w).toFixed(2)," ","(",w," item)"]}),(0,a.jsx)(m(),{href:"/shop",children:(0,a.jsx)(N.Z,{height:"auto",width:35,className:"w-[25px] md:w-auto"})})]})]}),(0,a.jsxs)("div",{className:"mt-7 mb-5 flex justify-between gap-2 md:gap-5 lg:hidden",children:[(0,a.jsx)(h.Z,{label:"Cart",containerClassName:"w-full",labelClassName:"text-xs md:text-sm mb-3",barClassName:"h-2 rounded-full bg-black"}),(0,a.jsx)(h.Z,{label:"Customer info",containerClassName:"w-full",labelClassName:"text-xs md:text-sm mb-3",barClassName:"h-2 rounded-full bg-black"}),(0,a.jsx)(h.Z,{label:"Payment info",containerClassName:"w-full",labelClassName:"text-xs md:text-sm mb-3",barClassName:"h-2 rounded-full bg-black"})]}),(0,a.jsxs)("div",{className:"rounded-xl bg-[#EFF1F3] px-4 py-3 md:px-7 md:py-5 lg:hidden",children:[(0,a.jsx)("h1",{children:"Cart"}),(0,a.jsxs)("div",{className:"my-5 flex justify-between border-y border-black py-3",children:[(0,a.jsxs)("div",{className:"flex gap-3",children:[(0,a.jsxs)("p",{children:[w,"x"]}),(0,a.jsx)("p",{children:"Xellar Hardware"})]}),(0,a.jsxs)("p",{children:["$",2==w?36.99:3==w?"50.00":(f*w).toFixed(2)]})]}),(0,a.jsxs)("div",{className:"ml-auto w-32 md:w-40",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("p",{children:"Subtotal"}),(0,a.jsxs)("p",{children:["$",2==w?36.99:3==w?"50.00":(f*w).toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("p",{children:"Shipping"}),(0,a.jsx)("p",{children:"..."})]}),(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)("p",{children:"Total"}),(0,a.jsxs)("p",{children:["$",2==w?36.99:3==w?"50.00":(f*w).toFixed(2)]})]})]})]}),(0,a.jsxs)(n.Card,{color:"transparent",shadow:!1,className:"mt-4 md:mt-10 lg:mt-12",children:[(0,a.jsx)(n.Typography,{variant:"h4",color:"black",className:"mb-4 font-extrabold md:mb-8",children:"Payment Info"}),(0,a.jsxs)("form",{className:"mb-2 text-black",children:[(0,a.jsxs)("div",{className:"mb-4 flex flex-col gap-3 xl:gap-4",children:[(0,a.jsx)(b.UN,{label:"Payment Method",id:"method",list:["Paypal"]}),(0,a.jsx)(b.II,{type:"text",label:"Name",id:"name",onChange:B,inputClassname:"focus:!ring-0 focus:!ring-transparent focus:!transition-none focus:!outline-0"}),(0,a.jsxs)("div",{className:"grid grid-cols-10 gap-3",children:[(0,a.jsxs)("div",{className:"col-span-10 flex w-full flex-col md:col-span-6",children:[(0,a.jsxs)("label",{htmlFor:"card-number",className:"mb-3 font-medium",children:["Credit Card Number ",(0,a.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,a.jsx)(r.y_,{id:"card-number",className:"box-border h-11 rounded-xl border border-[#BBB9B9] p-1 duration-300 ease-in-out",hostedFieldType:"number",options:{selector:"#card-number"}})]}),(0,a.jsxs)("div",{className:"col-span-5 flex w-full flex-col md:col-span-2",children:[(0,a.jsxs)("label",{htmlFor:"card-number",className:"mb-3 font-medium",children:["CVV ",(0,a.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,a.jsx)(r.y_,{id:"cvv",className:"box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out",hostedFieldType:"cvv",options:{selector:"#cvv",maskInput:!0}})]}),(0,a.jsxs)("div",{className:"col-span-5 flex w-full flex-col md:col-span-2",children:[(0,a.jsxs)("label",{htmlFor:"card-number",className:"mb-3 font-medium",children:["Expiry ",(0,a.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,a.jsx)(r.y_,{id:"expiration-date",className:"box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out",hostedFieldType:"expirationDate",options:{selector:"#expiration-date"}})]})]}),(0,a.jsx)(b.gx,{label:"Address",id:"address",rows:4,onChange:B,inputClassname:"focus:!ring-0 focus:!ring-transparent focus:!transition-none focus:!outline-0"}),(0,a.jsx)(b.Y8,{label:"Shipping",id:"shipping",value:["Instant","Next Day","Standard Delivery"],description:["Rp.11,000 - Rp.13,000","Rp.11,000 - Rp.13,000","Rp.11,000 - Rp.13,000"]}),(0,a.jsxs)("div",{className:"flex justify-end gap-5",children:[(0,a.jsx)(o(),{src:"/images/paypal.png",alt:"paypal",height:50,width:100,className:"h-14 w-auto"}),(0,a.jsx)(o(),{src:"/images/visa.png",alt:"visa",height:50,width:100,className:"h-14 w-auto"}),(0,a.jsx)(o(),{src:"/images/mastercard.png",alt:"mastercard",height:50,width:100,className:"h-14 w-auto"})]})]}),(0,a.jsx)("div",{className:"w-full text-end lg:hidden",children:(0,a.jsx)(n.Button,{id:"pay",className:"my-4 mr-0 w-40 rounded-2xl bg-black text-base capitalize md:w-64 md:text-lg lg:w-full",onClick:F,disabled:C,children:"Pay"})})]})]})]}),(0,a.jsxs)("div",{className:"hidden justify-between gap-5 lg:flex",children:[(0,a.jsx)(h.Z,{label:"Cart",containerClassName:"w-full",labelClassName:"text-sm mb-3",barClassName:"h-2 rounded-full bg-black"}),(0,a.jsx)(h.Z,{label:"Customer info",containerClassName:"w-full",labelClassName:"text-sm mb-3",barClassName:"h-2 rounded-full bg-black"}),(0,a.jsx)(h.Z,{label:"Payment info",containerClassName:"w-full",labelClassName:"text-sm mb-3",barClassName:"h-2 rounded-full bg-black"})]})]}),(0,a.jsxs)("div",{className:"relative hidden h-screen p-5 lg:block lg:w-1/2",children:[(0,a.jsxs)("div",{className:"absolute inset-0 box-border flex h-full w-full flex-col items-end justify-between bg-white bg-opacity-90 py-16 px-16",children:[(0,a.jsx)("h1",{children:"Cart"}),(0,a.jsxs)("div",{className:"flex w-full flex-col items-end gap-8",children:[(0,a.jsxs)("div",{className:"flex w-full justify-between border-y border-black py-3 xl:w-5/6",children:[(0,a.jsx)("p",{children:"Xellar Hardware"}),(0,a.jsxs)("p",{children:["x",w]})]}),(0,a.jsxs)("div",{className:"flex w-40 flex-col gap-4",children:[(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsx)("p",{children:"Subtotal"}),(0,a.jsxs)("p",{children:["$",2==w?36.99:3==w?"50.00":(f*w).toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsx)("p",{children:"Shipping"}),(0,a.jsx)("p",{children:"$4.00"})]}),(0,a.jsxs)("div",{className:"flex w-full justify-between",children:[(0,a.jsx)("p",{children:"Total"}),(0,a.jsxs)("p",{children:["$",2==w?36.99:3==w?"50.00":(f*w).toFixed(2)]})]})]}),(0,a.jsx)("button",{className:"w-40 rounded-2xl bg-black py-5 font-bold text-white",onClick:()=>{var e;return null===(e=document.getElementById("pay"))||void 0===e?void 0:e.click()},disabled:C,children:"Pay"})]})]}),(0,a.jsx)("div",{className:'h-full rounded-3xl bg-[url("/images/hero-payment.png")] bg-cover'})]}),(0,a.jsx)(t.Z,{open:g,PaperProps:{style:{backgroundColor:"transparent",boxShadow:"none",padding:"3em"}},children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status"})})})]})}function y(){let e=(0,x.useRouter)(),[s,l]=u.useState(""),[n,i]=u.useState({first_name:"",last_name:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",email_address:"",amount:1}),o=async()=>{try{await d.Z.get("/api/payment-paypal").then(e=>{var s;return l(null==e?void 0:null===(s=e.data)||void 0===s?void 0:s.clientToken)})}catch(e){l("")}};return u.useEffect(()=>{let l=window.localStorage.getItem("customer_info");if(s||o(),l){let e=JSON.parse(l);Object.entries(e).map(e=>{n[e[0]]=e[1],i({...n})})}else e.push("/shop/customer-info");n.amount=Number(window.localStorage.getItem("amount"))>0?Number(window.localStorage.getItem("amount")):1,i({...n})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.Z,{}),(0,a.jsx)("main",{children:s?(0,a.jsx)(r.Vv,{options:{"client-id":"AbJFoVEZ12lTSssI2gl4tEdnCCyMqb_mHlO01770P8UtjpRGtBvAkMvGOuHj5qwkZSd_7kuan8REeKk-","data-client-token":s,components:"hosted-fields"},children:(0,a.jsx)(r.e8,{styles:{".valid":{color:"#28a745"},".invalid":{color:"#dc3545"}},createOrder:function(){return fetch("/api/payment-paypal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(e=>e.json()).then(e=>e.id).catch(e=>{console.log(e)})},children:(0,a.jsx)(g,{customer:n,children:(0,a.jsxs)("div",{className:"grid grid-cols-10 gap-3",children:[(0,a.jsxs)("div",{className:"col-span-10 flex w-full flex-col md:col-span-6",children:[(0,a.jsxs)("label",{htmlFor:"card-number",className:"mb-3 font-medium",children:["Credit Card Number ",(0,a.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,a.jsx)(r.y_,{id:"card-number",className:"box-border h-11 rounded-xl border border-[#BBB9B9] p-1 duration-300 ease-in-out",hostedFieldType:"number",options:{selector:"#card-number"}})]}),(0,a.jsxs)("div",{className:"col-span-5 flex w-full flex-col md:col-span-2",children:[(0,a.jsxs)("label",{htmlFor:"card-number",className:"mb-3 font-medium",children:["CVV ",(0,a.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,a.jsx)(r.y_,{id:"cvv",className:"box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out",hostedFieldType:"cvv",options:{selector:"#cvv",maskInput:!0}})]}),(0,a.jsxs)("div",{className:"col-span-5 flex w-full flex-col md:col-span-2",children:[(0,a.jsxs)("label",{htmlFor:"card-number",className:"mb-3 font-medium",children:["Expiry ",(0,a.jsx)("span",{className:"text-red-700",children:"*"})]}),(0,a.jsx)(r.y_,{id:"expiration-date",className:"box-border h-11 rounded-xl border border-[#BBB9B9] px-4 py-1 duration-300 ease-in-out",hostedFieldType:"expirationDate",options:{selector:"#expiration-date"}})]})]})})})}):(0,a.jsx)(t.Z,{open:!0,PaperProps:{style:{backgroundColor:"transparent",boxShadow:"none",padding:"3em"}},children:(0,a.jsx)("div",{className:"flex items-center justify-center",children:(0,a.jsx)("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status"})})})})]})}}},function(e){e.O(0,[434,814,475,353,534,991,774,888,179],function(){return e(e.s=8071)}),_N_E=e.O()}]);