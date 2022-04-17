import { sinkibaDeta } from "./sinkiba.js"; 
import {aotobaDeta} from "./aoto.js";
import {simizuDeta} from "./simizu.js";
import {odaDeta} from "./oda.js";
const today= new Date();
const days=[
  "日",
  "月",
  "火",
  "水",
  "木",
  "金",
  "土"
];

const outputDate=(date)=>{
  let outputText="「"+date.getFullYear() +"年";
  outputText+=(date.getMonth()+1)+"月";
  outputText+=date.getDate()+"日　";
  outputText+=(days[date.getDay()])+"曜日です」";

  return outputText;
}

let $day=document.getElementById('date');
$day.textContent="今日は"+outputDate(today);


let sinkiba_deta=sinkibaDeta();
let aoto_deta=aotobaDeta();
let simizu_deta=simizuDeta();
let oda_deta=odaDeta();




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
  class Threetable{
    constructor(obj){
      let $AM=$doc.getElementsByClassName(obj.AM);
      let $PM=$doc.getElementsByClassName(obj.PM);
      let $night=$doc.getElementsByClassName(obj.night);
      const AMlen=$AM.length;
      for(let i=0;i<AMlen;i++)
      {
        $AM[i].textContent=obj.correct[i][0];
        $PM[i].textContent=obj.correct[i][1];
        $night[i].textContent=obj.correct[i][2];
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
  
  
  const sinkiba=new Threetable(sinkiba_deta);
  const aoto=new AotoTable(aoto_deta);
  const simizu=new ShimizuTable(simizu_deta);
  const oda=new Threetable(oda_deta);

