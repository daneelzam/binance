import React from 'react';
import style from './ClockSetting.module.css'

function ClockSetting({clock, setClocklList, subscribeToState}) {

    const handlerChange = (event) => {
        setClocklList((prevState)=>{
            prevState[prevState.indexOf(clock)].timezone = +event.target.value
            subscribeToState(prevState)
            return [...prevState]
        })
    }

    const handlerDelete = (event) => {
        event.preventDefault();
        setClocklList((prevState)=>{
            const newState = prevState.slice();
            newState.splice(newState.indexOf(clock), 1);
            subscribeToState(newState)
            return [...newState]
        })
    }
    return (
        <div>
            <label htmlFor='num'>Timezone</label>
            <input 
                onChange={handlerChange} 
                className={style.item} 
                type="number" 
                size="3" 
                name="num" 
                min="-12" 
                max="12" 
                value={clock.timezone}/>
            <button onClick={handlerDelete} className={style.item}>Delete</button>
        </div>
    );
}

export default ClockSetting;