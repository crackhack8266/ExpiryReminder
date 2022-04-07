import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  roundedStyles: {
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 50,
    elevation: 5,
    paddingVertical: 10,
  },

  leftSwipeText: {
    alignSelf: 'center',
    color: 'white',
  },
  leftSwipe: {
    backgroundColor: 'red',
    height: 57,
    width: 70,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  rightSwipeText: {
    alignSelf: 'center',
    color: 'white',
  },
  rightSwipe: {
    backgroundColor: 'green',
    height: 57,
    width: 70,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
