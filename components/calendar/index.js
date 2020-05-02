import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import style from './styles/index';
import theme from '../../theme.style';

const tickCommon = {
  color: theme.PRIMARY_COLOR,
  fontSize: theme.FONT_SIZE_MEDIUM,
  textTransform: 'uppercase',
  fontFamily: theme.FONT_FAMILY,
};

const styles = StyleSheet.create({
  tick: {
    width: 40,
    height: 50,
    borderRadius: 5,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
    borderStyle: 'solid',
    color: theme.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickNumber: {
    ...tickCommon,
    fontWeight: 'bold',
    marginBottom: 3.5,
  },
  tickText: {
    ...tickCommon,
    fontSize: theme.FONT_SIZE_XS,
  },
});

const Calendar = (props) => {
  return (
    <>
      <View style={styles.tick}>
        <Text style={styles.tickNumber}>{new Date().getDate()}</Text>
        <Text style={styles.tickText}>mon</Text>
      </View>
    </>
  );
};

export default Calendar;
