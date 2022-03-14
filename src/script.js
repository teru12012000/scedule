(()=>{

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
  const sinkiba=new Table({
    correct:[
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['✕','✕'],
              ['〇','〇'],//ここから
              ['〇','〇'],
              ['〇','〇'],
              ['〇','〇'],
              ['〇','〇'],
              ['✕','✕'],
              ['✕','〇'],
              ['〇','〇'],
              ['〇','〇'],
              ['〇','〇'],
              ['〇','〇'],
              ['✕','〇'],
              ['✕','✕'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-'],
              ['-','-']
            ],
    AM:'amsinkiba',
    PM:'pmsinkiba'
  });

})();
/*
色んなものを作ったとしてもインスタンスを変えるだけでちょちょいとできちゃう！
デザインや仕様が変わっても対応しやすい
*/