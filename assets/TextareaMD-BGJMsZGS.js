import{c as o,j as e,a5 as z,a6 as g,a7 as T,a8 as C,a9 as H,e as _,aa as j,T as h,ab as I,ac as n,ad as m,ae as A,m as y,af as f,ag as E,A as S,ah as b}from"./index-MgPKllZv.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],B=o("eye-off",q);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],V=o("eye",D);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]],F=o("file-output",$);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],O=o("message-circle-question-mark",L),P="/assets/cat-Bd92EHA1.webp",R=({control:s,name:t,message:i,placeholder:l,className:p,hasMd:u,required:r,errorMessage:d,actions:a,...c})=>e.jsx(z,{name:t,rules:{required:d||r},control:s,defaultValue:"",render:({field:v,fieldState:w})=>{const{value:k,onChange:M,onBlur:N}=v,{error:x}=w;return e.jsxs("div",{className:"flex flex-col w-full gap-1 relative",children:[i&&e.jsx(g,{as:"label",children:i}),a&&e.jsx("div",{className:"flex flex-col gap-1 absolute right-0 p-2",children:a}),e.jsx("textarea",{...c,value:k||"",onChange:M,onBlur:N,placeholder:l,"data-slot":"textarea",className:T("border-brand-300 !bg-brand-400 text-text-secondary placeholder:text-text-muted focus-visible:ring-brand-200/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40","aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-md shadow-xs transition-[color,box-shadow]","outline-none overscroll-contain focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",x&&"!border-error ring-destructive/20",p)}),x?.message&&e.jsx(g,{type:"error",children:x?.message})]})}}),G=({control:s,name:t,className:i,...l})=>{const{field:{onChange:p,value:u}}=C({control:s,name:t}),[r,d]=H.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[e.jsx(R,{className:_("h-[240px]",i),control:s,name:t,actions:[e.jsx(j,{zIndex:m+2,contentClassname:"h-[fit-content] overflow-hidden",buttonTrigger:e.jsx(n,{size:"sm",children:e.jsx(F,{})}),children:e.jsxs("div",{children:[e.jsx(h,{as:"span",size:"xl",children:"Список услуг"}),e.jsx("br",{}),e.jsx("div",{className:"flex flex-col gap-2",children:Array.from({length:10}).map((a,c)=>e.jsxs("div",{className:"flex bg-brand-300 cursor-pointer hover:bg-brand-200 transition-colors rounded-sm p-2 justify-between gap-2 items-center",children:[e.jsxs(h,{children:[c+1,". Тута наша услуга"]}),e.jsx(h,{children:e.jsx(I,{size:16})})]}))})]})},1),e.jsx(n,{size:"sm",onClick:()=>d(a=>!a),children:r?e.jsx(V,{}):e.jsx(B,{})},2),e.jsx(A,{zIndex:m+2,buttonTrigger:e.jsx(n,{size:"sm",children:e.jsx(O,{})}),children:e.jsx("div",{className:"w-full h-full overflow-y-auto p-4",children:e.jsx(Q,{})})},3),e.jsxs(j,{zIndex:m+2,contentClassname:"h-[fit-content] overflow-hidden",buttonTrigger:e.jsx(n,{size:"sm",children:e.jsx(E,{})}),children:[e.jsx(y.img,{animate:{y:[400,0],opacity:[0,1],rotate:[0,0,360]},transition:{duration:2,times:[0,.8,1]},src:P}),e.jsx(f,{size:"xl",className:"absolute bottom-0 left-[180px]",initial:{opacity:0,y:0},animate:{opacity:1,y:-200},transition:{type:"spring",duration:.6,delay:2.2},children:"Ты лох"}),e.jsx(f,{size:"sm",className:"absolute bottom-0 left-[30px]",initial:{opacity:0,y:0},animate:{opacity:1,y:-160},transition:{type:"spring",duration:.6,delay:3},children:"А Сюда не смотри"})]},4)],...l}),e.jsx(S,{mode:"wait",children:r&&e.jsx(y.div,{className:"overflow-y-auto overscroll-contain border-1 rounded-md p-2 border-brand-200",layout:!0,transition:{duration:.3},initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:e.jsx(b,{className:"min-h-[300px] max-h-[500px]",children:u})})})]})},Q=()=>e.jsx(b,{children:`
# Markdown шпаргалка

## Заголовки
# H1  
## H2  
### H3  

\`\`\`md
# H1
## H2
### H3
\`\`\`

---

## Текст
**Жирный** → \`**текст**\`  
*Курсив* → \`*текст*\`  
~~Зачёркнутый~~ → \`~~текст~~\`  
\`Моноширинный\` → \`\` \`текст\` \`\`  

---

## Списки
- элемент  
- элемент  

\`\`\`md
- элемент
- элемент
\`\`\`

1. элемент  
2. элемент  

\`\`\`md
1. элемент
2. элемент
\`\`\`

---

## Ссылки
[Название](https://example.com)  

\`\`\`md
[Название](https://example.com)
\`\`\`

---

## Картинки
Обычная:  
![alt](https://cdna.artstation.com/p/assets/images/images/085/023/762/large/anato-finnstark-img-20230809-152145w34.jpg?1739801345)  

\`\`\`md
![alt](/path/to/image.png)
\`\`\`

С контролем размера:  
<img src="https://cdna.artstation.com/p/assets/images/images/085/023/762/large/anato-finnstark-img-20230809-152145w34.jpg?1739801345" width="58" height="56"/>  

\`\`\`md
<img src="/MarkdownToolboxSmall.png" width="58" height="56"/>
\`\`\`

---

## Цитаты
> Вот так пишется цитата  

\`\`\`md
> Вот так пишется цитата
\`\`\`

---

## Код
Однострочный → \`код\`  

\`\`\`md
\`код\`
\`\`\`

Многострочный:  
\`\`\`js
console.log("Пример");
\`\`\`

\`\`\`md
\`\`\`js
console.log("Пример");
\`\`\`
\`\`\`

---

## Горизонтальная линия
---

\`\`\`md
---
\`\`\`

---

## Таблицы
| Имя    | Класс | Уровень |
|--------|-------|---------|
| Артас  | Пал   | 10      |
| Джайна | Маг   | 12      |

\`\`\`md
| Имя    | Класс | Уровень |
|--------|-------|---------|
| Артас  | Пал   | 10      |
| Джайна | Маг   | 12      |
\`\`\`

---

## Чекбоксы (списки задач)
- [x] Сделано  
- [ ] Не сделано  

\`\`\`md
- [x] Сделано
- [ ] Не сделано
\`\`\`
      `});export{G as T};
