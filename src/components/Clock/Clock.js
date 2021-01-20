import React, { useEffect, useRef } from 'react';
import ClockSetting from '../ClockSetting/ClockSetting';
import style from './Clock.module.css'

function Clock({clock, clockList, setClocklList, subscribeToState}) {
    const deg = 6;
    const hr = useRef(null);
    const mn = useRef(null);
    const sc = useRef(null);  
    useEffect(()=>{
        const stopInd = {}
        stopInd[clock.id]= setInterval(() => {
            let day = new Date();
            let newHr = day.getUTCHours();
            if (clock.timezone) {
                newHr += clock.timezone
            }
            day.setHours(newHr);
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg; 
            hr.current.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
            mn.current.style.transform = `rotateZ(${mm}deg)`;
            sc.current.style.transform = `rotateZ(${ss}deg)`;
        }, 1000);
        
        return () => clearInterval(stopInd[clock.id]);
    }, [clockList, clock.timezone, clock.id])
    return (
        <div className={style.clockContainer}>
        <ClockSetting key={clock.id} clock={clock} setClocklList={setClocklList} subscribeToState={subscribeToState}/>
        <div className={style.clock}>
            <div className={style.hour}>
                <div className={style.hr} ref={hr}></div>
            </div>
            <div className={style.min}>
                <div className={style.mn} ref={mn}></div>
            </div>
            <div className={style.sec}>
                <div className={style.sc} ref={sc}></div>
            </div>
        </div>
        </div>
    );
}

export default Clock;