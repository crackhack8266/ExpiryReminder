import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parentView: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '2%',
  },
  imageStyle: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  textStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 45,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 8,
  },
  footerTextStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 25,
    textAlign: 'center',
  },
});
