import {StyleSheet} from 'react-native';
import theme from '../../../theme.style';

const style = StyleSheet.create({
  tick: {
    width: 40,
    height: 50,
    borderRadius: 5,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default style;
