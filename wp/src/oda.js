export let odaDeta=()=>{
  const y='〇';
  const n='-';

  let oda_deta={
    correct:[
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],//5
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],//10
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],//15
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,y],
              [y,y,y],//20
              [n,n,n],
              [n,n,y],
              [n,n,y],
              [n,n,n],
              [n,n,n],//25
              [n,n,y],
              [y,y,y],
              [n,n,n],
              [n,n,y],
              [n,n,y],
              [n,n,y],
            ],
    AM:'amoda',
    PM:'pmoda',
    night:'nightoda'
  };

  return oda_deta;
}

