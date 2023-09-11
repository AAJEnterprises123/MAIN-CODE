import React from 'react'

const Dropdown = (props) => {
  return (
    <div className='heading-dropdown-box2'>
        <label id='dropdown-heading' htmlFor='dropdown'>{props.label}</label>
        <select id='dropdown-addquery' name='dropdown'>
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

export default Dropdown;