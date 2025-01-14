(()=>{var e={};e.id=995,e.ids=[995],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1575:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>d});var t=s(482),i=s(9108),n=s(2563),a=s.n(n),o=s(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(r,l);let d=["",{children:["careers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2779)),"F:\\Projects\\CoreInsightsAI_Website\\app\\careers\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,4763)),"F:\\Projects\\CoreInsightsAI_Website\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"]}],c=["F:\\Projects\\CoreInsightsAI_Website\\app\\careers\\page.tsx"],m="/careers/page",p={require:s,loadChunk:()=>Promise.resolve()},x=new t.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/careers/page",pathname:"/careers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2589:(e,r,s)=>{Promise.resolve().then(s.bind(s,3733))},3733:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>f});var t=s(5344),i=s(7993),n=s(708),a=s(5453),o=s(9709),l=s(6212),d=s(2549),c=s(3601),m=s(692),p=s(8767);let x=["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],u=o.Ry({name:o.Z_().min(2,"Name must be at least 2 characters"),email:o.Z_().email("Invalid email address"),phone:o.Z_().min(10,"Please enter a valid phone number"),position:o.Z_().min(2,"Please specify the position"),experience:o.Z_().min(1,"Please specify your years of experience"),message:o.Z_().min(10,"Cover letter must be at least 10 characters"),resume:o.PG().refine(e=>e?.length===1,"Resume is required").refine(e=>e?.[0]?.size<=5e6,"Max file size is 5MB").refine(e=>x.includes(e?.[0]?.type),"Only .pdf, .doc, and .docx formats are supported")});function f(){let{toast:e}=(0,m.pm)(),r=(0,n.cI)({resolver:(0,a.F)(u)});async function s(s){try{let r=new FormData;r.append("name",s.name),r.append("email",s.email),r.append("phone",s.phone),r.append("position",s.position),r.append("experience",s.experience),r.append("message",s.message),s.resume&&s.resume[0]&&r.append("resume",s.resume[0]),r.append("_captcha","false"),r.append("_template","box"),r.append("_autoresponse","Thank you for submitting your application. We will review it and get back to you soon."),(await fetch("https://formsubmit.co/support@coreinsightsai.com",{method:"POST",body:r})).ok?e({title:"Application submitted!",description:"We'll review your application and get back to you soon."}):e({title:"Error submitting application",description:"There was an error submitting your application. Please try again."})}catch(r){console.error("Error submitting the form:",r),e({title:"Error submitting application",description:"There was an error submitting your application. Please try again."})}r.reset()}return t.jsx("div",{className:"min-h-screen pt-20 pb-16",children:t.jsx("div",{className:"container mx-auto",children:(0,t.jsxs)(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"space-y-12",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[t.jsx("h1",{className:"text-4xl font-bold tracking-tighter sm:text-5xl",children:"Join Our Team"}),t.jsx("p",{className:"text-xl text-muted-foreground",children:"Help us shape the future of data analytics"})]}),(0,t.jsxs)("div",{className:"grid gap-12 lg:grid-cols-2",children:[t.jsx("div",{className:"space-y-6",children:(0,t.jsxs)("div",{className:"space-y-4",children:[t.jsx("h2",{className:"text-2xl font-bold",children:"Open Positions"}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-lg border p-4",children:[t.jsx("h3",{className:"text-lg font-semibold",children:"Senior Data Scientist"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Lead advanced analytics projects and mentor junior team members"})]}),(0,t.jsxs)("div",{className:"rounded-lg border p-4",children:[t.jsx("h3",{className:"text-lg font-semibold",children:"ML Engineer"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Build and deploy machine learning models at scale"})]})]})]})}),(0,t.jsxs)("div",{className:"space-y-6",children:[t.jsx("h2",{className:"text-2xl font-bold",children:"Apply Now"}),t.jsx(p.l0,{...r,children:(0,t.jsxs)("form",{onSubmit:r.handleSubmit(s),className:"space-y-6",children:[t.jsx(p.Wi,{control:r.control,name:"name",render:({field:e})=>(0,t.jsxs)(p.xJ,{children:[t.jsx(p.lX,{children:"Full Name"}),t.jsx(p.NI,{children:t.jsx(d.I,{placeholder:"John Doe",...e})}),t.jsx(p.zG,{})]})}),t.jsx(p.Wi,{control:r.control,name:"email",render:({field:e})=>(0,t.jsxs)(p.xJ,{children:[t.jsx(p.lX,{children:"Email"}),t.jsx(p.NI,{children:t.jsx(d.I,{placeholder:"john@example.com",...e})}),t.jsx(p.zG,{})]})}),t.jsx(p.Wi,{control:r.control,name:"phone",render:({field:e})=>(0,t.jsxs)(p.xJ,{children:[t.jsx(p.lX,{children:"Phone"}),t.jsx(p.NI,{children:t.jsx(d.I,{placeholder:"+1 (555) 000-0000",...e})}),t.jsx(p.zG,{})]})}),t.jsx(p.Wi,{control:r.control,name:"position",render:({field:e})=>(0,t.jsxs)(p.xJ,{children:[t.jsx(p.lX,{children:"Position"}),t.jsx(p.NI,{children:t.jsx(d.I,{placeholder:"Senior Data Scientist",...e})}),t.jsx(p.zG,{})]})}),t.jsx(p.Wi,{control:r.control,name:"experience",render:({field:e})=>(0,t.jsxs)(p.xJ,{children:[t.jsx(p.lX,{children:"Years of Experience"}),t.jsx(p.NI,{children:t.jsx(d.I,{type:"number",min:"0",...e})}),t.jsx(p.zG,{})]})}),t.jsx(p.Wi,{control:r.control,name:"message",render:({field:e})=>(0,t.jsxs)(p.xJ,{children:[t.jsx(p.lX,{children:"Cover Letter"}),t.jsx(p.NI,{children:t.jsx(c.g,{placeholder:"Tell us about yourself and why you'd be a great fit...",className:"min-h-[150px]",...e})}),t.jsx(p.zG,{})]})}),t.jsx(p.Wi,{control:r.control,name:"resume",render:({field:e})=>(0,t.jsxs)(p.xJ,{children:[t.jsx(p.lX,{children:"Resume"}),t.jsx(p.NI,{children:t.jsx(d.I,{type:"file",accept:".pdf,.doc,.docx",onChange:r=>{let s=r.target.files;s&&e.onChange(s)}})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Max file size: 5MB. Accepted formats: PDF, DOC, DOCX"}),t.jsx(p.zG,{})]})}),t.jsx(l.z,{type:"submit",size:"lg",className:"w-full",children:"Submit Application"})]})})]})]})]})})})}},8767:(e,r,s)=>{"use strict";s.d(r,{l0:()=>m,NI:()=>j,Wi:()=>x,xJ:()=>h,lX:()=>g,zG:()=>b});var t=s(5344),i=s(3729),n=s(2751),a=s(708),o=s(1626),l=s(4217);let d=(0,s(8720).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=i.forwardRef(({className:e,...r},s)=>t.jsx(l.f,{ref:s,className:(0,o.cn)(d(),e),...r}));c.displayName=l.f.displayName;let m=a.RV,p=i.createContext({}),x=({...e})=>t.jsx(p.Provider,{value:{name:e.name},children:t.jsx(a.Qr,{...e})}),u=()=>{let e=i.useContext(p),r=i.useContext(f),{getFieldState:s,formState:t}=(0,a.Gc)(),n=s(e.name,t);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...n}},f=i.createContext({}),h=i.forwardRef(({className:e,...r},s)=>{let n=i.useId();return t.jsx(f.Provider,{value:{id:n},children:t.jsx("div",{ref:s,className:(0,o.cn)("space-y-2",e),...r})})});h.displayName="FormItem";let g=i.forwardRef(({className:e,...r},s)=>{let{error:i,formItemId:n}=u();return t.jsx(c,{ref:s,className:(0,o.cn)(i&&"text-destructive",e),htmlFor:n,...r})});g.displayName="FormLabel";let j=i.forwardRef(({...e},r)=>{let{error:s,formItemId:i,formDescriptionId:a,formMessageId:o}=u();return t.jsx(n.g7,{ref:r,id:i,"aria-describedby":s?`${a} ${o}`:`${a}`,"aria-invalid":!!s,...e})});j.displayName="FormControl",i.forwardRef(({className:e,...r},s)=>{let{formDescriptionId:i}=u();return t.jsx("p",{ref:s,id:i,className:(0,o.cn)("text-sm text-muted-foreground",e),...r})}).displayName="FormDescription";let b=i.forwardRef(({className:e,children:r,...s},i)=>{let{error:n,formMessageId:a}=u(),l=n?String(n?.message):r;return l?t.jsx("p",{ref:i,id:a,className:(0,o.cn)("text-sm font-medium text-destructive",e),...s,children:l}):null});b.displayName="FormMessage"},2549:(e,r,s)=>{"use strict";s.d(r,{I:()=>a});var t=s(5344),i=s(3729),n=s(1626);let a=i.forwardRef(({className:e,type:r,...s},i)=>t.jsx("input",{type:r,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:i,...s}));a.displayName="Input"},3601:(e,r,s)=>{"use strict";s.d(r,{g:()=>a});var t=s(5344),i=s(3729),n=s(1626);let a=i.forwardRef(({className:e,...r},s)=>t.jsx("textarea",{className:(0,n.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...r}));a.displayName="Textarea"},2779:(e,r,s)=>{"use strict";s.r(r),s.d(r,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let t=(0,s(6843).createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\app\careers\page.tsx`),{__esModule:i,$$typeof:n}=t,a=t.default}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[46,617,939],()=>s(1575));module.exports=t})();