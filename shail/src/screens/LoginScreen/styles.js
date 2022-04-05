import {StyleSheet, Dimensions, Platform} from 'react-native';

export default StyleSheet.create({
  parentView: {
    height: Dimensions.get('window').height,
    paddingHorizontal: '5%',
    justifyContent: 'center',
  },
  imageView: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textInputContainerView: {
    justifyContent: 'space-evenly',
    height: '17%',
  },
  textInputView: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: '3%',
    paddingVertical: Platform.OS === 'android' ? 0 : '3%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  leftIconStyle: {
    marginRight: '2%',
    alignSelf: 'center',
  },
  textInputStyle: {
    fontSize: 18,
    flex: 1,
  },
  loginButtonView: {
    backgroundColor: 'black',
    width: '100%',
    borderRadius: 20,
    padding: '2%',
    height: '5%',
    justifyContent: 'center',
  },
  loginTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '3%',
  },
  signUpTextStyle: {color: 'red', fontWeight: '600'},
});
