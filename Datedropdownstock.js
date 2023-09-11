import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datedropdownstock = (props) => {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className='date-calendar-box2'>
            <label id='date-calendar-heading-stock' htmlFor="date-calendar-dropdown-box2">{props.label}</label>
            <div className='date-calendar-dropdown-stock-box1'>       
                <DatePicker
                    className='date-calendar-dropdown-stock-box2'
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MM/dd/yyyy"
                    placeholderText={props.placeholder}
                />
            </div>
        </div>
    );
};

export default Datedropdownstock