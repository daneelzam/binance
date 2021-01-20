import React, { useState } from 'react';
import nextId from "react-id-generator";
import style from './AddClockForm.module.css'


function AddClockForm({setClocklList, subscribeToState}) {
    const [inputState, setInputState] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault()
        setClocklList((prevState)=>{
            const newState = [...prevState, {id: nextId(), timezone: inputState}]
            subscribeToState(newState)
            return newState
        });
    }
    return (
        <form onSubmit={handleSubmit} className={style.addClockForm}>
            <input 
                className={style.item} 
                type="number" 
                size="3" 
                name="timezone" 
                min="-12" 
                max="12" 
                onChange={({target})=>setInputState(target.value)}
                value={inputState}/>
            <button className={style.item}>Add</button>
        </form>
    );
}

export default AddClockForm;