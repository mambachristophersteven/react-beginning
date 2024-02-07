import React from 'react'
import Weekday from '../Weekday/Weekday';
import Weekend from '../Weekend/Weekend';

const WorkerText = () => {
    const day = new Date().getDay();
    console.log(day);
  return (
    <div>
        {
            day >= 1 && day <= 5
            ? <Weekday />
            : <Weekend />
        }

    </div>
  )
}

export default WorkerText