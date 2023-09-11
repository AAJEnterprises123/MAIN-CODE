import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datefromto = (props) => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
            <div className='datefromto-dropdown-dipatched-box1'>       
                <DatePicker
                    className='datefromto-dropdown-dipatched-box2'
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MM/dd/yyyy"
                    placeholderText={props.placeholder}
                />
            </div>
    );
}

export default Datefromto