import styled from "styled-components";
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Day = styled.h1`
  font-size: 30px;
  margin: 4px 4px;
`;

const YearMonth = styled.span`
  color: #9a9fa7;
`;

function DateIndicator() {
  const date: any = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getYear();
  const dateString = `${monthNames[month].slice(0, 3)} ${day}, ${year}`;
  return (
    <Container>
      <Day>{weekdays[date.getDay()]}</Day>
      <YearMonth>{dateString}</YearMonth>
    </Container>
  );
}

export default DateIndicator;
