import './App.css';
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function App() {
  const [days, setDays]= useState("00");
  const [hours, setHours]= useState("00");
  const [minutes, setMinutes]= useState("00");
  const [seconds, setSeconds]= useState("00");
  const [inputDate0, setInputDate0]=useState("00")
  const [inputDate, setInputDate]= useState("1 january 2024");
  const [currDate, setCurrDate]= useState(inputDate);

  function fnc(){
    const changeDate = new Date(inputDate);
    const currDate= new Date();
    const totalSeconds=(changeDate-currDate)/1000;

    setDays( Math.floor(totalSeconds/3600/24))
    setHours( Math.floor(totalSeconds/3600) % 24)
    setMinutes( Math.floor(totalSeconds / 60)% 60)
    setSeconds( Math.floor(totalSeconds % 60))
    if(inputDate==Date.now){
      clearInterval()
    }
  }

  useEffect(()=>{
    const interval= setInterval(()=>fnc(),1000);
    return ()=>{
      clearInterval(interval)
    }
  })

  const onChangeHandler=(e)=>{
    setInputDate0(e.target.value)
  }

  const onClickHandler=()=>{
    setInputDate(inputDate0)
    setCurrDate(inputDate)
  }

  const onClickHandler2=()=>{
    setInputDate(Date.now)
  }
  return (
    <div className="App">
    <h1 className='text-white fw-bold p-5'>Countdown Timer</h1>
      <div className='container'>
        <div className='bdr d-flex justify-content-around my-5'>
          <div className='my-5'>
              <p><h1 className=' cd fw-bold'> {days<0  ? "00":days} </h1> Day</p>
          </div>
          <div className='my-5'>
              <p><h1 className=' cd fw-bold'>{hours<0 ? "00":hours} </h1> Hr</p>
          </div>
          <div className='my-5'>
            <p><h1 className=' cd fw-bold'> {minutes< 0 ? "00": minutes} </h1> Min</p>
          </div>
          <div className='my-5'>
            <p><h1 className='cd fw-bold'> {seconds<0  ? "00": seconds} </h1> Sec</p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-around my-5'>
        <div> 
          <input placeholder='1 january 2024' className='first' onChange={onChangeHandler}></input>
          <p className=''>Type your Date here.</p>
        </div>
      </div>
      <Button onClick={onClickHandler} className='' variant="primary">Start Timer</Button>
      <Button onClick={onClickHandler2} className='ms-5 ' variant="primary">Stop Timer</Button>
      <div className='my-5'></div>
    </div>
  );
}

export default App;
