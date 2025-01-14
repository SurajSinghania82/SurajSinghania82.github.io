exports.id=939,exports.ids=[939],exports.modules={4808:(e,t,s)=>{Promise.resolve().then(s.bind(s,2838)),Promise.resolve().then(s.bind(s,9297)),Promise.resolve().then(s.bind(s,5882)),Promise.resolve().then(s.bind(s,3263)),Promise.resolve().then(s.t.bind(s,1476,23))},9422:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},2838:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Navbar:()=>p});var r=s(5344),a=s(3729),i=s(6506),o=s(7993),n=s(9119),l=s(4513),d=s(8200),c=s(8714),u=s(7180),m=s(6256),x=s(6212);function h(){let{theme:e,setTheme:t}=(0,m.F)(),[s,i]=a.useState(!1);return(a.useEffect(()=>{i(!0)},[]),s)?(0,r.jsxs)(x.z,{variant:"ghost",size:"icon",onClick:()=>t("dark"===e?"light":"dark"),children:[r.jsx(c.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),r.jsx(u.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),r.jsx("span",{className:"sr-only",children:"Toggle theme"})]}):null}let f=[{href:"/#services",label:"Services"},{href:"/#industries",label:"Industries"},{href:"/#about",label:"About"},{href:"/careers",label:"Careers"},{href:"/#contact",label:"Contact"}];function p(){let[e,t]=(0,a.useState)(!1),[s,c]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY>20;s!==e&&c(e)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[s]),r.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none",children:(0,r.jsxs)(o.E.nav,{initial:{y:-100},animate:{y:0},transition:{type:"spring",stiffness:100,damping:20},className:`mt-4 rounded-full pointer-events-auto ${s?"bg-background/50 backdrop-blur-lg shadow-lg":"bg-background/30 backdrop-blur-md"}`,children:[(0,r.jsxs)("div",{className:"px-6 py-3",children:[(0,r.jsxs)("div",{className:"hidden md:flex items-center space-x-8",children:[r.jsx(i.default,{href:"/",className:"flex items-center",children:r.jsx(o.E.span,{initial:{opacity:0},animate:{opacity:1},className:"text-lg font-bold",children:"CoreInsightsAI"})}),f.map((e,t)=>r.jsx(o.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:r.jsx(i.default,{href:e.href,className:"nav-link text-sm font-medium transition-colors hover:text-primary relative px-2 py-1",children:e.label})},e.href)),r.jsx(o.E.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.1*f.length},children:r.jsx(h,{})})]}),(0,r.jsxs)("div",{className:"md:hidden flex items-center justify-between",children:[r.jsx(i.default,{href:"/",className:"flex items-center",children:r.jsx("span",{className:"text-lg font-bold",children:"CoreInsightsAI"})}),(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[r.jsx(h,{}),r.jsx("button",{onClick:()=>t(!e),className:"p-2 hover:bg-background/80 rounded-full transition-colors",children:e?r.jsx(l.Z,{className:"h-5 w-5"}):r.jsx(d.Z,{className:"h-5 w-5"})})]})]})]}),r.jsx(n.M,{children:e&&r.jsx(o.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg glass-effect",children:r.jsx("div",{className:"py-4 px-6 space-y-4",children:f.map((e,s)=>r.jsx(o.E.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*s},children:r.jsx(i.default,{href:e.href,className:"block py-2 text-sm font-medium transition-colors hover:text-primary",onClick:()=>t(!1),children:e.label})},e.href))})})})]})})}},9297:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ThemeProvider:()=>o});var r=s(5344),a=s(3729),i=s(6256);function o({children:e,...t}){let[s,o]=a.useState(!1);return(a.useEffect(()=>{o(!0)},[]),s)?r.jsx(i.f,{...t,children:e}):null}},6212:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var r=s(5344),a=s(3729),i=s(2751),o=s(8720),n=s(1626);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 button-glow",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:scale-105",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:scale-105",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:scale-105",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-[calc(var(--radius)-2px)] px-3 text-xs",lg:"h-12 rounded-[var(--radius)] px-8 text-base",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:s,asChild:a=!1,...o},d)=>{let c=a?i.g7:"button";return r.jsx(c,{className:(0,n.cn)(l({variant:t,size:s,className:e})),ref:d,...o})});d.displayName="Button"},5882:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Toaster:()=>o});var r=s(5344),a=s(6256),i=s(4755);let o=({...e})=>{let{theme:t="system"}=(0,a.F)();return r.jsx(i.x7,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})}},3263:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Toaster:()=>g});var r=s(5344),a=s(692),i=s(3729),o=s(3884),n=s(8720),l=s(4513),d=s(1626);let c=o.zt,u=i.forwardRef(({className:e,...t},s)=>r.jsx(o.l_,{ref:s,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));u.displayName=o.l_.displayName;let m=(0,n.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),x=i.forwardRef(({className:e,variant:t,...s},a)=>r.jsx(o.fC,{ref:a,className:(0,d.cn)(m({variant:t}),e),...s}));x.displayName=o.fC.displayName,i.forwardRef(({className:e,...t},s)=>r.jsx(o.aU,{ref:s,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=o.aU.displayName;let h=i.forwardRef(({className:e,...t},s)=>r.jsx(o.x8,{ref:s,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:r.jsx(l.Z,{className:"h-4 w-4"})}));h.displayName=o.x8.displayName;let f=i.forwardRef(({className:e,...t},s)=>r.jsx(o.Dx,{ref:s,className:(0,d.cn)("text-sm font-semibold",e),...t}));f.displayName=o.Dx.displayName;let p=i.forwardRef(({className:e,...t},s)=>r.jsx(o.dk,{ref:s,className:(0,d.cn)("text-sm opacity-90",e),...t}));function g(){let{toasts:e}=(0,a.pm)();return(0,r.jsxs)(c,{children:[e.map(function({id:e,title:t,description:s,action:a,...i}){return(0,r.jsxs)(x,{...i,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[t&&r.jsx(f,{children:t}),s&&r.jsx(p,{children:s})]}),a,r.jsx(h,{})]},e)}),r.jsx(u,{})]})}p.displayName=o.dk.displayName},692:(e,t,s)=>{"use strict";s.d(t,{pm:()=>m});var r=s(3729);let a=0,i=new Map,o=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},n=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?o(s):e.toasts.forEach(e=>{o(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},l=[],d={toasts:[]};function c(e){d=n(d,e),l.forEach(e=>{e(d)})}function u({...e}){let t=(a=(a+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>c({type:"DISMISS_TOAST",toastId:t});return c({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||s()}}}),{id:t,dismiss:s,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:t}})}}function m(){let[e,t]=r.useState(d);return r.useEffect(()=>(l.push(t),()=>{let e=l.indexOf(t);e>-1&&l.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},1626:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var r=s(6815),a=s(9377);function i(...e){return(0,a.m6)((0,r.W)(e))}},4763:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>P,metadata:()=>A});var r=s(5036),a=s(6909),i=s.n(a);s(7272);var o=s(6843);let n=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\theme-provider.tsx`),{__esModule:l,$$typeof:d}=n;n.default;let c=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\theme-provider.tsx#ThemeProvider`),u=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\navbar.tsx`),{__esModule:m,$$typeof:x}=u;u.default;let h=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\navbar.tsx#Navbar`);var f=s(6274),p=s(6789);function g(){return(0,r.jsxs)("footer",{className:"border-t bg-background",children:[r.jsx("div",{className:"container mx-auto py-8 md:py-12",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-4",children:[(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"text-lg font-semibold",children:"CoreInsightsAI"}),r.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:"Empowering your business with data-driven solutions."})]}),(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Quick Links"}),(0,r.jsxs)("ul",{className:"mt-4 space-y-2",children:[r.jsx("li",{children:r.jsx(f.default,{href:"/#services",className:"text-sm text-muted-foreground hover:text-primary",children:"Services"})}),r.jsx("li",{children:r.jsx(f.default,{href:"/#industries",className:"text-sm text-muted-foreground hover:text-primary",children:"Industries"})}),r.jsx("li",{children:r.jsx(f.default,{href:"/careers",className:"text-sm text-muted-foreground hover:text-primary",children:"Careers"})})]})]}),(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Contact"}),r.jsx("ul",{className:"mt-4 space-y-2",children:r.jsx("li",{className:"text-sm text-muted-foreground",children:"support@coreinsightsai.com"})})]}),(0,r.jsxs)("div",{children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Follow Us"}),r.jsx("div",{className:"mt-4 flex space-x-4",children:r.jsx(f.default,{href:"https://www.linkedin.com/company/coreinsightsai",target:"blank",className:"text-muted-foreground hover:text-primary",children:r.jsx(p.Z,{className:"h-5 w-5"})})})]})]})}),r.jsx("div",{className:"border-t py-8 text-center",children:(0,r.jsxs)("p",{className:"text-sm text-muted-foreground",children:["\xa9 ",new Date().getFullYear()," CoreInsightsAI. All rights reserved."]})})]})}let v=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\ui\toaster.tsx`),{__esModule:b,$$typeof:y}=v;v.default;let j=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\ui\toaster.tsx#Toaster`),N=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\ui\sonner.tsx`),{__esModule:w,$$typeof:I}=N;N.default;let S=(0,o.createProxy)(String.raw`F:\Projects\CoreInsightsAI_Website\components\ui\sonner.tsx#Toaster`),A={title:"CoreInsightsAI - Data Analytics & Consulting",description:"Empowering your business with data-driven solutions. Advanced analytics, machine learning, and AI consulting services.",keywords:["data analytics","consulting","machine learning","AI","business intelligence"]};function P({children:e}){return r.jsx("html",{lang:"en",suppressHydrationWarning:!0,children:r.jsx("body",{className:`${i().variable} font-sans antialiased`,children:(0,r.jsxs)(c,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:[(0,r.jsxs)("div",{className:"relative flex min-h-screen flex-col",children:[r.jsx(h,{}),r.jsx("main",{className:"flex-1",children:e}),r.jsx(g,{})]}),r.jsx(j,{}),r.jsx(S,{richColors:!0})]})})})}},7272:()=>{}};