import React, { useState } from 'react';
import './style.css';

export default function Form3() {
  const [result, setResult] = useState(null);
  const [error,setErr] = useState(false);
  function submit() {
    let acr = parseInt(document.getElementById('Abservation_cum_record').value) ;
    let m_lab = parseInt(document.getElementById('model_lab').value) ;
    if((!acr|| !m_lab ) && (acr!=0 && m_lab!=0) ) {
       document.getElementById('error').innerHTML='Enter All the Values'
       setErr(true);
    }
    else if(acr>75){
      document.getElementById('error').innerHTML='Maximum Marks for Abservation sum record is 75';
      setErr(true);
    }
    else if(m_lab>25){
      document.getElementById('error').innerHTML='Maximum Marks for Model lab is 25';
      setErr(true);
    }
    else{
      document.getElementById('error').innerHTML='Done';
      let totalMarks = ((acr+m_lab) / 100)*60;
      setErr(false);
      setResult(totalMarks.toFixed(1));
    }
    
  }
function reset(){
    let placeholder="Enter Your Marks";
    document.getElementById('Abservation_cum_record').value=placeholder ;
    document.getElementById('cat2').value=placeholder ;
    document.getElementById('model_ab').value=placeholder ;
    
}
  return (
    <div>
      <form>
         Abservation Cum Record:<input type="number" id='Abservation_cum_record' placeholder='Enter Your Marks' />
        Model Lab:<input type="number" id='model_lab' placeholder='Enter Your Marks' />
        <div className='output-box'>
        <button type="button" className='submit'  onClick={submit}>Submit</button>
        <button type="button" className='reset'  onClick={reset}>Reset</button>
        </div>
        <p id='result'>{result !== null && error!=true? `Your Internal Mark For this Subject is: ${result}`:''}</p>
        <p id='error'></p>
      </form>
    </div>
  );
}
