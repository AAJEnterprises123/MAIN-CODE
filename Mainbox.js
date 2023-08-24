import React from 'react'

const Mainbox = (props) => {
  return (
    <div className="main-box">
        <div className='headingbox'>
            <p id='main-box-heading'>{props.heading}</p>
        </div>
        <div className='numberbox'>
            <p id='main-box-number'>{props.number}</p>
        </div>
    </div>
  );
};
export default Mainbox;