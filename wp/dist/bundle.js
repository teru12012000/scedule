(()=>{"use strict";const e=new Date,t=["日","月","火","水","木","金","土"];document.getElementById("date").textContent="今日は"+(e=>{let o="「"+e.getFullYear()+"年";return o+=e.getMonth()+1+"月",o+=e.getDate()+"日　",o+=t[e.getDay()]+"曜日です」",o})(e);let o=(()=>{const e="〇",t="-";return{correct:[[e,e,e],[e,e,e],[e,e,e],[e,e,e],[e,e,e],[e,e,e],[t,t,t],[e,e,e],[e,e,e],[e,e,e],[t,t,t],[t,t,t],[t,t,t],[e,e,e],[e,e,e],[e,e,e],[e,e,e],[t,t,t],[t,t,t],[e,e,e],[e,e,e],[e,e,e],[e,e,e],[e,e,e],[e,t,e],[t,t,t],[t,t,t],[t,t,t],[e,e,e],[e,e,e],[t,t,t]],AM:"amsinkiba",PM:"pmsinkiba",night:"nightsinkiba"}})(),n=(()=>{const e="◎",t="〇",o="-";return{correct:[[e,e,e,e,e],[t,t,t,t,t],[e,e,e,e,e],[t,t,t,t,t],[t,t,o,o,t],[o,o,e,e,e],[o,o,o,t,t],[e,e,e,e,e],[t,t,t,t,t],[e,e,e,e,e],[t,t,t,t,t],[t,t,o,o,t],[e,e,e,e,e],[t,t,t,t,t],[e,e,e,e,e],[t,t,t,t,t],[e,e,e,e,e],[o,o,o,o,o],[o,o,o,o,t],[e,e,e,e,e],[t,e,e,t,t],[o,o,o,o,o],[t,t,t,t,t],[e,e,e,e,e],[o,o,o,o,t],[o,o,o,o,t],[e,e,e,e,e],[o,o,o,t,t],[e,e,e,e,e],[t,t,t,t,t],[o,o,o,o,o]],one:"oneaoto",two:"twoaoto",three:"threeaoto",four:"fouraoto",five:"fiveaoto"}})(),l=(()=>{const e="〇",t="-";return{correct:[[t],[t],[t],[e],[e],[e],[t],[t],[t],[e],[e],[e],[t],[t],[t],[e],[e],[e],[e],[e],[t],[t],[e],[e],[e],[e],[t],[t],[e],[e],[t]],one:"simizu"}})(),r=(()=>{const e="〇",t="-";return{correct:[[e,e,e],[t,t,t],[t,t,e],[t,t,e],[e,e,e],[t,t,t],[t,t,e],[e,e,e],[t,t,t],[t,t,e],[t,t,e],[t,t,t],[t,t,t],[t,t,e],[e,e,e],[t,t,t],[t,t,e],[e,e,e],[t,t,t],[t,t,t],[t,t,e],[e,e,e],[t,t,t],[t,t,e],[t,t,e],[t,t,t],[t,t,t],[t,t,e],[e,e,e],[t,t,t],[t,t,t]],AM:"amoda",PM:"pmoda",night:"nightoda"}})(),a=(()=>{const e="〇",t="-";return{correct:[[t,t,t],[t,t,e],[e,e,t],[t,t,t],[t,t,t],[e,e,e],[e,e,e],[e,"☆",t],[e,e,e],[t,t,e],[t,t,t],[t,t,t],[e,e,e],[t,t,e],[e,"☆",t],[e,e,e],[e,e,e],[t,t,e],[t,t,e],[e,e,e],[e,e,e],[e,e,e],[e,e,e],[e,e,t],[t,t,t],[t,t,"☆"],[e,e,e],[e,e,e],[e,e,e],[e,e,e],[t,t,t]],AM:"amedo",PM:"pmedo",night:"eveedo"}})();new class{constructor(e){const t=document.querySelector(e.hookName).getElementsByTagName(e.tagName),o=t.length;for(let e=0;e<o;e++)t[e].addEventListener("click",(e=>this.clickHandler(e)))}clickHandler=e=>{e.preventDefault();const t=e.currentTarget.nextElementSibling;"block"==t.style.display?t.style.display="none":t.style.display="block"}}({hookName:"#js-faq",tagName:"p"});const s=document;class c{constructor(t){let o=s.getElementsByClassName(t.AM),n=s.getElementsByClassName(t.PM),l=s.getElementsByClassName(t.night);const r=o.length;for(let e=0;e<r;e++)o[e].textContent=t.correct[e][0],n[e].textContent=t.correct[e][1],l[e].textContent=t.correct[e][2];o[e.getDate()-1].style.backgroundColor="yellow",n[e.getDate()-1].style.backgroundColor="yellow",l[e.getDate()-1].style.backgroundColor="yellow"}}new c(o),new class{constructor(t){let o=s.getElementsByClassName(t.one),n=s.getElementsByClassName(t.two),l=s.getElementsByClassName(t.three),r=s.getElementsByClassName(t.four),a=s.getElementsByClassName(t.five);for(let e=0;e<31;e++)o[e].textContent=t.correct[e][0],n[e].textContent=t.correct[e][1],l[e].textContent=t.correct[e][2],r[e].textContent=t.correct[e][3],a[e].textContent=t.correct[e][4];o[e.getDate()-1].style.backgroundColor="yellow",n[e.getDate()-1].style.backgroundColor="yellow",l[e.getDate()-1].style.backgroundColor="yellow",r[e.getDate()-1].style.backgroundColor="yellow",a[e.getDate()-1].style.backgroundColor="yellow"}}(n),new class{constructor(t){let o=s.getElementsByClassName(t.one);for(let e=0;e<31;e++)o[e].textContent=t.correct[e];o[e.getDate()-1].style.backgroundColor="yellow"}}(l),new c(r),new c(a)})();