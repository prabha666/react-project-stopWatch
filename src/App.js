

import {useState} from 'react'

var id=undefined;
export default function App() {
  const [watch,setWatch]=useState(0);
  const [started,setStarted]=useState(false); 
  
 const startWatch=()=>{
   id=setInterval(()=>{
  setWatch((x)=>x+1);
},1000)
setStarted(true)
}
const stopWatch=()=>{
  clearInterval(id);
  setStarted(false)
}
const resetWatch=()=>{
  setWatch(0)
  clearInterval(id);
  setStarted(false)
}


  return (
    <div className="App">
      <div className="xyz">
      <h1>Start Stop Watch</h1>
      <h2>{watch}</h2>
     <button id='btn1' disabled={started} onClick={startWatch}>Start</button>
     <button id='btn2' onClick={stopWatch}>Stop</button>
     <button id='btn3' onClick={resetWatch}>Reset</button>
    </div>
    </div>
  );
}

