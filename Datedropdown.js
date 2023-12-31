import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datedropdown = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className='date-calendar-box2'>
            <label id='date-calendar-heading' htmlFor="date-calendar-dropdown-box2">{props.label}</label>
            <div className='date-calendar-dropdown-box1'>       
                <DatePicker
                    className='date-calendar-dropdown-box2'
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MM/dd/yyyy"
                    placeholderText={props.placeholder}
                />
            </div>
        </div>
    );
};

export default Datedropdown