import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l}from"./assets/vendor-2b44ac2e.js";document.querySelector("#datetime-picker");const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(c){console.log(c[0])}};l("#datetime-picker",m);const s=document.querySelector("[data-start]");s.addEventListener("click",()=>{const i=Date.now()+26298e5;setInterval(()=>{const a=Date.now(),n=i-a;let t,e,o,r;t=Math.floor(n/(1e3*60*60*24)),e=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),o=Math.floor(n%(1e3*60*60)/(1e3*60)),r=Math.floor(n%(1e3*60)/1e3),r<10?r=`0${r}`:r=`${r}`,o<10?o=`0${o}`:o=`${o}`,e<10?e=`0${e}`:e=`${e}`,t<10?t=`0${t}`:t=`${t}`,console.log(`${t}:${e}:${o}:${r}`)},1e3)});
//# sourceMappingURL=commonHelpers.js.map