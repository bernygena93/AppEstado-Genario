import {StyleSheet} from 'react-native';
import {COLOR} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 12,
    margin: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 4,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'OpenSansBold',
    marginBottom: 18,
    textAlign: 'center',
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    fontFamily: 'OpenSansBold',
    color: COLOR.green,
  },
  promptButton: {
    fontSize: 16,
    fontFamily: 'OpenSansBold',
    color: COLOR.pink,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    paddingVertical: 10,
    backgroundColor: COLOR.lightPink,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
