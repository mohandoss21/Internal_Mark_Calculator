import React, { useState } from 'react';
import './style.css';

export default function Form1() {
  const [result, setResult] = useState(null);
  const [error,setErr] = useState(false);
  function submit() {
    let cat1 = parseInt(document.getElementById('cat1').value) ;
    let cat2 = parseInt(document.getElementById('cat2').value) ;
    let a1 = parseInt(document.getElementById('a1').value) ;
    let a2 = parseInt(document.getElementById('a2').value) ;
    if((!cat1 || !cat2 || !a1 || !a2) && (cat1!=0 && cat2!=0 && a1!=0 && a2!=0) ) {
       document.getElementById('error').innerHTML='Enter All the Values'
       setErr(true);
    }
    else if(cat1>60 || cat2>60){
      document.getElementById('error').innerHTML='Maximum Marks for Cat is 60';
      setErr(true);
    }
    else if(a1>40 || a2>40){
      document.getElementById('error').innerHTML='Maximum Marks for Assignment is 40'
      setErr(true);
    }
    else{
      document.getElementById('error').innerHTML='Done'
      let totalMarks = (((cat1 + a1) + (cat2 + a2)) / 200) * 40;
      setErr(false);
      setResult(totalMarks.toFixed(1));

    }
    
  }

  return (
    <div>
      <form>
        Cat 1:<input type="number" id='cat1' placeholder='enter your marks' />
        Assignment 1:<input type="number" id='a1' placeholder='enter your marks' />
        Cat 2:<input type="number" id='cat2' placeholder='enter your marks' />
        Assignment 2:<input type="number" id='a2' placeholder='enter your marks' />
        <button type="button" className='submit'  onClick={submit}>Submit</button>
        <p id='result'>{result !== null && error!=true? `Your Internal Mark For this Subject is: ${result}`:''}</p>
        <p id='error'></p>
      </form>
    </div>
  );
}
