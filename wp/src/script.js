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
  const sinkiba=new Table(sinkiba_deta);
  const aoto=new Table(aoto_deta);
  const simizu=new Table(simizu_deta);


