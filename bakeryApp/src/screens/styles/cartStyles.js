import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    elevation: 1,
    bottom: 110,
    width: '90%',
    height: 95,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: COLOR.beige,
  },
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLOR.greenishGray,
    fontSize: 24,
    fontWeight: '600',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.gray,
    width: '100%',
    height: 35,
    elevation: 2,
    borderRadius: 10,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
