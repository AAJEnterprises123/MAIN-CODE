import React, { useState, useEffect } from 'react';

const Livetimedate = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const updateDateTime = () => {
        setCurrentDateTime(new Date());
        };

        // Update time and date when the component mounts
        updateDateTime();

        // Listen for visibility change to freeze/unfreeze seconds
        const visibilityChangeHandler = () => {
        if (document.visibilityState === 'visible') {
            updateDateTime();
        }
        };

        document.addEventListener('visibilitychange', visibilityChangeHandler);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('visibilitychange', visibilityChangeHandler);
        };
    }, []);

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formattedDateTime = currentDateTime.toLocaleString(undefined, options);


  return (
    <div className="live-time-date-dropdown-addquery">
      <p id='date-time-heading-addquery'>{formattedDateTime}</p>
    </div>
  )
}

export default Livetimedate;
