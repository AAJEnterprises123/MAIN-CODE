import React, { useState } from 'react'
import Stars from './Stars';

const Feedback = () => {

  const [isBoxVisible , setisBoxVisible] = useState(false);
  const [content , setContent] = useState('');

  const togglebox = () => 
  {
    setisBoxVisible(!isBoxVisible);
  }

  const handleContentChange = (event) => 
  {
    setContent(event.target.value);
  }

  return (
    <div className='feedback-container'>
      <button className={`feedbackbutton ${isBoxVisible ? 'visible' : ''}`} onClick={togglebox}>
        <span className="feedback">
            <span>F</span>
            <span>E</span>
            <span>E</span>
            <span>D</span>
            <span>B</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
        </span>
      </button>

      <div className={`feedback-box ${isBoxVisible ? 'visible' : ''}`}>
        <div className='feedback-content'>
          <h2>Write Us A Review</h2>
          <p id='how-feedback'>How satisfied are you with our service/support today ?</p>
          <div className='starbox'>
            <Stars/>
          </div>
          <p>"Your Comment Is A Key To Our Success"</p>
          <div className='feedback-type-box'>
            <textarea id='text-feedback' placeholder='Enter Your Feedback' value={content} onChange={handleContentChange}/>
          </div>
          <button id='submit-button' onClick={() => alert('Thanks for your valuable Feedback.')}>Submit</button>
        </div>
      </div>

    </div>
  );
};

export default Feedback;