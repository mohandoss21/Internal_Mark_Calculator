import React, { useState } from 'react';
import './style.css';
import Form1 from './Form1';
import Form2 from './Form2';

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
      </div>
      <div className='selected-form'>
        {selectedForm === 'Form1' && <Form1 />}
        {selectedForm === 'Form2' && <Form2 />}
      </div>
    </div>
  );
}

export default Home;
