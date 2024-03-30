import React, { useState } from 'react';
import './style.css';

export default function Form2() {
  const [result, setResult] = useState(null);
  const [error,setErr] = useState(false);
  function submit() {
    let cat1 = parseInt(document.getElementById('cat1').value) ;
    let cat2 = parseInt(document.getElementById('cat2').value) ;
    let lab = parseInt(document.getElementById('lab').value) ;
    if((!cat1 || !cat2 || !lab) && (cat1!=0 && cat2!=0 && lab!=0) ) {
       document.getElementById('error').innerHTML='Enter All the Values'
       setErr(true);
    }
    else if(cat1>50 || cat2>50){
      document.getElementById('error').innerHTML='Maximum Marks for Cat is 50';
      setErr(true);
    }
    else if(lab>30){
      document.getElementById('error').innerHTML='Maximum Marks for Model lab is 30';
      setErr(true);
    }
    else{
      document.getElementById('error').innerHTML='Done'
      let totalMarks = (((cat1 +cat2) / 100) * 20) + lab;
      setErr(false);
      setResult(totalMarks.toFixed(1));

    }
    
  }
  function reset(){
    let placeholder="Enter Your Marks";
    document.getElementById('cat1').value=placeholder ;
    document.getElementById('cat2').value=placeholder ;
    document.getElementById('lab').value=placeholder ;
    
  }

  return (
    <div>
      <form>
        Cat 1:<input type="number" id='cat1' placeholder='Enter Your Marks' />
        Cat 2:<input type="number" id='cat2' placeholder='Enter Your Marks' />
        Model Lab:<input type="number" id='lab' placeholder='Enter Your Marks' />
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
