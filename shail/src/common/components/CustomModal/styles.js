import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  innerModalView: {
    backgroundColor: 'white',
    height: '50%',
    minHeight: 400,
    overflow: 'scroll',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  outerModalView: {
    backgroundColor: '#000000aa',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalDivider: {
    width: '100%',
    backgroundColor: '#f2efef',
    marginTop: 17.7,
    height: 1,
  },
});
