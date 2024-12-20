import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendar, HiOutlineChartBar } from 'react-icons/hi2';
import React from 'react';
import Stat from './Stat'
import { formatCurrency } from '../../utils/helpers';

function Stats({bookings={}, confirmedStays={}, numDays, cabinCount=0}) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = Array.isArray(bookings)
    ? bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
    : 0;
    
  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation = (Array.isArray(confirmedStays)
    ? confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) 
    : 0)/ (numDays * cabinCount);

  // num checked in night / all available nights (num days * num cabins)
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendar />}
        value={checkins}
      />
      <Stat
        title="Occupancy"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100)+'%'}
      />
    </>
  );
}

export default Stats
