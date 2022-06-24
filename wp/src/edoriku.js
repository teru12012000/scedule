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
              [y,s,n],
              [y,y,y],
              [n,n,y],//10
              [n,n,n],
              [n,n,n],
              [y,y,y],
              [n,n,y],
              [y,s,n],//15
              [y,y,y],
              [y,y,y],
              [n,n,y],
              [n,n,y],
              [y,y,y],//20
              [y,y,y],
              [y,y,y],
              [y,y,y],
              [y,y,n],
              [n,n,n],//25
              [n,n,s],
              [y,y,y],
              [y,y,y],
              [y,y,y],
              [y,y,y],
              [n,n,n],
            ],
    AM:'amedo',
    PM:'pmedo',
    night:'eveedo'
  };

  return edo_deta;
}

