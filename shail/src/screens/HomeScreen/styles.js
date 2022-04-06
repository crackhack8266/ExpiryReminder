import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  innerModalView: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    paddingHorizontal: 10,
  },

  outerModalView: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
