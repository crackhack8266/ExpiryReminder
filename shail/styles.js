import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  homeIcon: {
    width: 18.8,
    height: 20.3,
  },
  feedIcon: {
    width: 19.2,
    height: 19,
  },
  spaIcon: {
    width: 19.4,
    height: 19.7,
  },
  bottomProfileIcon: {
    width: 15.2,
    height: 21.3,
  },
  bottomProfileView: {
    width: 36,
    backgroundColor: '#000000',
    height: 3,
    position: 'absolute',
    top: 32,
  },
  commonView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: 'red',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 50,
    marginTop: 7,
  },
  innerModalView: {
    backgroundColor: '#ffffff',
    height: 'auto',
    width: '90%',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    position: 'absolute',
    zIndex: -1,
    paddingHorizontal: 10,
  },

  outerModalView: {
    backgroundColor: '#000000aa',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  parentView: {
    marginHorizontal: 10,
  },
});
