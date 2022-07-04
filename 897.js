(self.webpackChunkREACT_portfolio=self.webpackChunkREACT_portfolio||[]).push([[897],{5897:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>T});var t=n(7294),i=n(6974),l=n(3379),a=n.n(l),o=n(7795),c=n.n(o),s=n(569),m=n.n(s),d=n(3565),p=n.n(d),u=n(9216),g=n.n(u),h=n(4589),v=n.n(h),f=n(449),w={};w.styleTagTransform=v(),w.setAttributes=p(),w.insert=m().bind(null,"head"),w.domAPI=c(),w.insertStyleElement=g(),a()(f.Z,w),f.Z&&f.Z.locals&&f.Z.locals;const b=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 476.213 476.213",version:"1.1",viewBox:"0 0 476.213 476.213",xmlSpace:"preserve"},t.createElement("path",{d:"M345.606 107.5L324.394 128.713 418.787 223.107 0 223.107 0 253.107 418.787 253.107 324.394 347.5 345.606 368.713 476.213 238.106z"}))},x=n(3700),E=e=>t.createElement("div",{className:"project-item",id:"item-Preview"},t.createElement("div",{class:"iframe-loading"},t.createElement("iframe",{className:"project-preview",title:e.title+"Project Preview",src:e.preview},t.createElement("div",{className:"loader"}))),t.createElement("div",{className:"project-links"}," ",t.createElement("a",{href:e.github},t.createElement("img",{src:x}))," ",t.createElement("div",{id:"codeIcon"}," ",t.createElement("a",{href:e.preview},t.createElement(b,null)," "))," ")),j=e=>{const r=n(394)("./"+e.img);return t.createElement("div",{className:"project-item",id:"item-Preview",style:{gridColumn:"1 /  2"}},t.createElement("img",{className:"sImg",src:r}))},y=e=>{const r=[];for(let i=0;i<e.techArr.length;i++){const l=(0,t.lazy)((()=>n(1598)(`./${e.techArr[i].toLowerCase()}-Icon.js`)));r.push(t.createElement(t.Suspense,{fallback:t.createElement("div",null,"Loading...")},t.createElement(l,null)))}return r},C=e=>e.listArr.map((e=>t.createElement("li",null,e))),N=n(553),T=e=>{let r=(0,i.UO)();const n=Object.values(N.Projects).filter((e=>e.Name===r.projectId));if(0===n.length)return t.createElement(i.Fg,{to:"notFound"});const l=n[0];let a=null,o=null;return"Personal"===l.Type?a=t.createElement(E,{title:l.Name,preview:l.Preview,github:l.Github}):(a=t.createElement(j,{img:l.Preview}),o="sText"),t.createElement("div",{className:"projectPageGrid"},t.createElement("div",{style:e.modeStyle,className:"project-item",id:"item-Title"}," ",t.createElement("h1",null,l.Name)),a,t.createElement("div",{style:e.modeStyle,className:"project-item",id:o},t.createElement("p",{className:"infoText"},l.Heading,t.createElement("ul",{className:"objectives-List"},t.createElement(C,{listArr:l.List})),t.createElement("p",{style:{textAlign:"left",padding:"10px"}}," ",l.Description)," ")),t.createElement("div",{style:e.modeStyle,className:"project-item",id:"item-Tech"},"  ",t.createElement("b",null,"Built With")," ",t.createElement("div",{id:"logoSvgs"}," ",t.createElement(y,{techArr:l.TechUsed})," "),"  "),t.createElement("div",{style:e.modeStyle,className:"project-item",id:"cDate"}," ",t.createElement("b",null,"Date Created")," ",l.DateCreated),t.createElement("div",{style:e.modeStyle,className:"project-item",id:"cDate"}," ",t.createElement("b",null,"Status"),"  ",l.Status))}},449:(e,r,n)=>{"use strict";n.d(r,{Z:()=>m});var t=n(3645),i=n.n(t),l=n(1667),a=n.n(l),o=n(452),c=i()((function(e){return e[1]})),s=a()(o);c.push([e.id,"\r\n\r\n.projectPageGrid {\r\n    margin: 0 auto;\r\n    height: 100%;\r\n    display: grid;\r\n    background-color: rgba(182, 182, 182, 0.216);\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: auto;\r\n    grid-gap: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.project-item {\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: #444;\r\n    transition: all .1s ease-in;\r\n    border-radius: 16px;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-family: monospace;\r\n}\r\n.project-preview{\r\n    border-style: none;\r\n    border-radius: 16px;\r\n    height: 70vh;\r\n    min-width: 100%;\r\n}\r\n.project-links img,#codeIcon{\r\n    max-width: 35px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.project-links img{\r\n    float: right;\r\n    padding-right: 10px;\r\n}\r\n\r\n.project-links #codeIcon{\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n.iframe-loading{\r\n    background: url("+s+")center center no-repeat;\r\n}\r\n.sImg{\r\n    max-width: 100%;\r\n    margin: 0 auto;\r\n    border-radius: 16px;\r\n}\r\n.infoText{\r\n    border-radius: 16px;\r\n    font-size: 18px;\r\n}\r\n #item-Tech svg{\r\n    height: 9vh;\r\n    width: 9vh;\r\n    \r\n }\r\n #logoSvgs{\r\n    grid-template-columns: repeat(3, 1fr)\r\n }\r\n #cDate{\r\n    display: flex;\r\n    justify-content: center;\r\n }\r\n .objectives-List li{\r\n    list-style:circle;\r\n    float: none;\r\n    list-style-position: inside;\r\n    text-align: left;\r\n }\r\n\r\n .objectives-List{\r\n\r\n    margin-top: 10px;\r\n    overflow: visible;\r\n    padding: 0.5rem;\r\n }\r\n\r\n@media only screen and (min-width: 833px) {\r\n    #item-Title{\r\n        grid-column: 1 / span 3;\r\n    }\r\n    #item-Preview{\r\n        grid-column: 1 / span 2;\r\n        \r\n    }\r\n     #sText{\r\n        grid-column: 2 /  4;\r\n     }\r\n  }\r\n\r\n  @media only screen and (max-width: 1200px) {\r\n    .project-preview{\r\n        max-height: 55vh;\r\n    }\r\n    #item-Tech svg{\r\n        height: 6vh;\r\n        width: 6vh;\r\n        \r\n     }\r\n  }\r\n\r\n\r\n@media only screen and (max-width: 833px) {\r\n    .projectPageGrid {\r\n        grid-template-columns: 1fr;\r\n     }\r\n     .project-preview{\r\n        max-height: 55vh;\r\n    }\r\n    #item-Title h1{\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    #item-Tech svg{\r\n        height: 8.5vh;\r\n        width: 8.5vh;\r\n        \r\n     }\r\n  }",""]);const m=c},1667:e=>{"use strict";e.exports=function(e,r){return r||(r={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},1598:(e,r,n)=>{var t={"./css-Icon.js":[3670,670],"./d3js-Icon.js":[1720,720],"./html-Icon.js":[3833,833],"./java-Icon.js":[2187,187],"./js-Icon.js":[3014,14],"./react-Icon.js":[8754,754],"./sql-Icon.js":[5691,691]};function i(e){if(!n.o(t,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=t[e],i=r[0];return n.e(r[1]).then((()=>n(i)))}i.keys=()=>Object.keys(t),i.id=1598,e.exports=i},3700:(e,r,n)=>{"use strict";e.exports=n.p+"b039b2d83982c8256af3.png"},5558:(e,r,n)=>{"use strict";e.exports=n.p+"2c0b3d17597d506011d6.png"},394:(e,r,n)=>{var t={"./CalcCover.webp":9784,"./ChoroCover.webp":6156,"./DrumCover.webp":9754,"./FlappyCover.webp":2094,"./GitHub-Mark-64px.png":3700,"./GitHub-Mark-Light-64px.png":5558,"./PathCover.webp":4546,"./PathShow.webp":8254,"./PomoCover.webp":381,"./QuoteCover.webp":2766,"./SlideCover.webp":4573,"./Spinner.webp":452,"./TwinCover.webp":1651};function i(e){var r=l(e);return n(r)}function l(e){if(!n.o(t,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t[e]}i.keys=function(){return Object.keys(t)},i.resolve=l,e.exports=i,i.id=394}}]);