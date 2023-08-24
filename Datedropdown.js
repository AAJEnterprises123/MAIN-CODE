import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datedropdown = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className='date-dropdown-box'>
            <label htmlFor="calendar">{props.label}</label>
            <DatePicker
                id="calendar"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText={props.placeholder}
            />
        </div>
    );
};

export default Datedropdown