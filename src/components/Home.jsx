import React, { useState } from 'react';
import './style.css';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
function Home() {
  const [selectedForm, setSelectedForm] = useState(null);

  const formClick = (formName) => {
    setSelectedForm(formName);
  };

  return (
    <div>
      <nav>
        <h1>Internal Mark Prediction</h1>
      </nav>
      <div className='button-box'>
        <button className='b1' onClick={() => formClick('Form1')}>Theory</button>
        <button className='b2'  onClick={() => formClick('Form2')}>Theory Cum Practical</button>
        <button className='b3'  onClick={() => formClick('Form3')}>Pratical</button>
      </div>
      <div className='selected-form' id='form_show'>
        {selectedForm === 'Form1' && <Form1 />}
        {selectedForm === 'Form2' && <Form2 />}
        {selectedForm === 'Form3' && <Form3 />}
      </div>
    </div>
  );
}

export default Home;
