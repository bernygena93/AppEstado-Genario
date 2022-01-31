import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    height: 200,
    marginVertical: 15,
    elevation: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: '500',
    color: COLOR.beige,
    elevation: 5,
  },
  textWeight: {
    fontSize: 25,
    fontWeight: '500',
    color: COLOR.beige,
    elevation: 5,
  },
});
