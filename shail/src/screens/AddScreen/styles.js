import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  headerDivider: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#e0e2e5',
    width: 35,
    marginTop: 11.3,
    alignSelf: 'center',
  },
  textRowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {flex: 1},
  textStyle: {
    marginTop: 15.8,
    fontFamily: 'ProximaNova-Bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#1c1c1c',
    alignSelf: 'center',
    marginLeft: 20,
  },
  svgView: {
    alignSelf: 'flex-end',
  },
  parentSvgView: {flexDirection: 'column'},
  horizontalDivider: {
    width: '100%',
    backgroundColor: '#f2efef',
    marginTop: '5%',
    height: 1,
  },
});
