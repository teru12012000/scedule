export let edoDeta=()=>{
  const y='〇';
  const n='-';
  const s='☆'

  let edo_deta={
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
              [n,n,n],
              [n,n,y],//20
              [n,n,y],
              [n,n,y],
              [y,y,y],
              [y,s,n],
              [y,y,y],//25
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],
            ],
    AM:'amedo',
    PM:'pmedo',
    night:'eveedo'
  };

  return edo_deta;
}

