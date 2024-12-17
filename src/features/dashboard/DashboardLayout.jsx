import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
import React from "react";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStys";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

function DashboardLayout() {
  const { isLoading:isLoading1, bookings } = useRecentBookings();

  const {isLoading:isLoading3, cabins:cabins={}} = useCabins();

  const {
    stays,
    isLoading: isLoading2,
    confirmedStays,
    numDays,
  } = useRecentStays();

  if (isLoading1 || isLoading2 || isLoading3) <Spinner />;

  return <StyledDashboardLayout>
  <Stats
   bookings={bookings} 
   confirmedStays={confirmedStays}
   numDays={numDays}
   cabinCount={cabins.length}
    /> 
    <TodayActivity />
    <DurationChart confirmedStays={confirmedStays}/>
    <SalesChart bookings={bookings} numDays={numDays} />
 </StyledDashboardLayout>;
}

export default DashboardLayout;
