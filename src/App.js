import { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const deg = 6;
  const hr = useRef(null);
  const mn = useRef(null);
  const sc = useRef(null);  

  useEffect(()=>{
    setInterval(() => {
      console.log(hr.current);
      console.log(mn.current);
      console.log(sc.current); 
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg; 
      hr.current.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
      mn.current.style.transform = `rotateZ(${mm}deg)`;
      sc.current.style.transform = `rotateZ(${ss}deg)`;
    }, 1000);
  })
  
  return (
    <div className="clock">
    <div className="hour">
        <div className="hr" ref={hr} id="hr"></div>
    </div>
    <div className="min">
        <div className="mn" ref={mn} id="mn"></div>
    </div>
    <div className="sec">
        <div className="sc" ref={sc} id="sc"></div>
    </div>
</div>
  );
}

export default App;
