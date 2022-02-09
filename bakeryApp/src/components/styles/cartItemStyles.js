import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: 410,
    height: 75,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLOR.beige,
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
    fontWeight: '500',
  },
  textData: {
    fontSize: 18,
    fontWeight: '400',
  },
});
