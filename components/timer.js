import React from 'react';
import DateCountdown from 'react-date-countdown-timer';

const Timer = () =>
    <DateCountdown dateTo='June 19, 2019 23:35:00 GMT+05:30' callback={()=>alert('Big Day 🎉🎊')}  />

export default Timer;