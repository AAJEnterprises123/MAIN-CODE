import React from 'react'

const Dropdown = (props) => {
  return (
    <div className='heading-dropdown-box'>
        <label htmlFor='dropdown'>{props.label}</label>
        <select id='dropdown' name='dropdown'>
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