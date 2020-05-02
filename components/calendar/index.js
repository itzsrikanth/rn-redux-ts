import React from 'react';
import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import style from './styles/index';
import theme from '../../theme.style';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';
import a from './styles';
/**
 * If we have "wednes" instead of "wed" or "wednesday", we will be able
 * to use it in any form by either taking first 3 characters or appending
 * the characters "day".
 */
const days = ['sun', 'mon', 'tues', 'wednes', 'thurs', 'fri', 'sat'];

const Container = styled.View`
  flex-flow: row nowrap;
`;

const Tick = styled.View`
  width: ${wp('12.5%')}px;
  height: ${hp('7.8125%')}px;
  border-radius: 5px;
  border-color: ${theme.PRIMARY_COLOR};
  border-width: 1px;
  border-style: solid;
  color: ${theme.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
`;

const TickCommon = styled.Text`
  color: ${theme.PRIMARY_COLOR};
  font-size: ${theme.FONT_SIZE_MEDIUM}px;
  text-transform: uppercase;
`;

const TickNumber = styled(TickCommon)`
  font-weight: bold;
  margin-bottom: 3.5px;
`;

const TickText = styled(TickCommon)`
  font-size: ${theme.FONT_SIZE_XS}px;
`;

const Calendar = (props) => {
  const dates = [];
  const currDate = new Date();
  for (var i = 3; i > 0; i--) {
    dates.push(subDays(currDate, i));
  }
  dates.push(currDate);
  for (var i = 3; i > 0; i--) {
    dates.push(addDays(currDate, i));
  }
  console.log('Containers', a);
  return (
    <>
      <Container>
        {dates.map((value, idx) => (
          <Tick key={idx}>
            <TickNumber>{value.getDate()}</TickNumber>
            <TickText>{days[value.getDay()].substr(0, 3)}</TickText>
          </Tick>
        ))}
      </Container>
    </>
  );
};

export default Calendar;
