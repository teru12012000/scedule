export let edoDeta=()=>{
  const y='〇';
  const n='-';
  const s='☆'

  let edo_deta={
    correct:[
              [n,n,n],
              [n,n,y],
              [y,y,n],
              [n,n,n],
              [n,n,n],//5
              [y,y,y],
              [y,y,y],
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
              [n,n,n],//20
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],
              [n,n,n],//25
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

