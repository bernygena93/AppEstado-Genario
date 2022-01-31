import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: COLOR.beige,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 55,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    elevation: 5,
    borderColor: COLOR.greenishGray,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
});
