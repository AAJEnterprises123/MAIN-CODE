import React from 'react'

const Checkboxdropdown = (props) => {
  return (
    <div className='heading-dropdown-box2'>
        <div className='checkbox-heading-box'>
            <input type="checkbox"/>
            <label id='checkbox-dropdown-heading' htmlFor='dropdown'>{props.label}</label>
        </div>
        <select id='checkbox-dropdown' name='dropdown'>
            <option value="" disabled selected>
                Select
            </option>
            {props.options.map((option , index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Checkboxdropdown