import { sinkibaDeta } from "./sinkiba.js"; 
import {aotobaDeta} from "./aoto.js";
import {simizuDeta} from "./simizu.js";
let sinkiba_deta=sinkibaDeta();
let aoto_deta=aotobaDeta();
let simizu_deta=simizuDeta();
class Accordion{
    //初期化
    constructor(obj){

      
      const $elm=document.querySelector(obj.hookName);
      const $trigger=$elm.getElementsByTagName(obj.tagName); 
      const triggerLen=$trigger.length;
      for(let i=0;i<triggerLen;i++)
      {
        $trigger[i].addEventListener('click',(e)=>this.clickHandler(e));//thisはクラスそのものを参照する
      }
    }
    //クリックしたら実行される処理
    clickHandler=(e)=>{
      e.preventDefault();
      const $target =e.currentTarget;
      const $content=$target.nextElementSibling;//これの次の要素とってくるよん
      if($content.style.display=='block'){
        $content.style.display='none';
      }
      else{
        $content.style.display='block';
      }
    }
  }
  const fuckingAccordion=new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
  });

  const $doc=document;
  class Table{
    constructor(obj){
      let $AM=$doc.getElementsByClassName(obj.AM);
      let $PM=$doc.getElementsByClassName(obj.PM);
      const AMlen=$AM.length;
      const PMlen=$PM.length;
      for(let i=0;i<AMlen;i++)
      {
        $AM[i].textContent=obj.correct[i][0];
        $PM[i].textContent=obj.correct[i][1];
      }
    }
  }
  class AotoTable{
    constructor(obj){
      let $one=$doc.getElementsByClassName(obj.one);
      let $two=$doc.getElementsByClassName(obj.two);
      let $three=$doc.getElementsByClassName(obj.three);
      let $four=$doc.getElementsByClassName(obj.four);
      let $five=$doc.getElementsByClassName(obj.five);
      const len=31;
      for(let i=0;i<len;i++)
      {
        $one[i].textContent=obj.correct[i][0];
        $two[i].textContent=obj.correct[i][1];
        $three[i].textContent=obj.correct[i][2];
        $four[i].textContent=obj.correct[i][3];
        $five[i].textContent=obj.correct[i][4];
      }
    }
  }
  class ShimizuTable{
    constructor(obj){
      let $one=$doc.getElementsByClassName(obj.one);
      const len=31;
      for(let i=0;i<len;i++)
      {
        $one[i].textContent=obj.correct[i];
      }
    }
  }
  const sinkiba=new Table(sinkiba_deta);
  const aoto=new AotoTable(aoto_deta);
  const simizu=new ShimizuTable(simizu_deta);


