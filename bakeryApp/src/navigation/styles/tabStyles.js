import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/colors';

export const styles = StyleSheet.create({
  tabBar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 75,
    borderRadius: 20,
    elevation: 1,
    borderWidth: 1,
    borderTopWidth: 1,
    borderColor: COLOR.lightPink,
    borderTopColor: COLOR.lightPink,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carts: {
    position: 'absolute',
    top: 10,
    left: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: COLOR.gray,
    borderRadius: 20,
  },
});
