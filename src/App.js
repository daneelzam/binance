import React, { useState } from 'react';
import nextId from "react-id-generator";
import Clock from './components/Clock/Clock';
import './App.css'
import AddClockForm from './components/AddClockForm/AddClockForm';

function App() {
  
  const windowState = JSON.parse(window.localStorage.getItem('state'));
  let preloadedState = [];
  if (windowState) {
    preloadedState = [...windowState];
  } else {
    preloadedState = [{ id: nextId(), timezone: 0},{ id: nextId(), timezone: 3}];
  }
  const [clockList, setClockList] = useState(preloadedState);
  
  const subscribeToState = (state)=>{
    window.localStorage.setItem('state', JSON.stringify(state));
  }
  return (
    <>
    <div className='container-col'>
      <AddClockForm setClocklList={setClockList} subscribeToState={subscribeToState}/>
      <div className='container'>
      {clockList && clockList.map((clock) => <Clock key={clock.id} clockList={clockList} setClocklList={setClockList} clock={clock} subscribeToState={subscribeToState}/>)}
      </div>
    </div>
    </>
  );
}

export default App;