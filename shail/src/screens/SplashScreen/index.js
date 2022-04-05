import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 3000);
  return (
    <View style={styles.parentView}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <Image
        source={require('../../common/assets/images/logo.jpeg')}
        style={styles.imageStyle}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={[styles.textStyle, {color: 'red', marginRight: '3%'}]}>
          Expiring
        </Text>
        <Text style={[styles.textStyle, {marginBottom: '20%'}]}>Things</Text>
      </View>
      <Text style={styles.footerTextStyle}>Please Wait . . .</Text>
    </View>
  );
};

export default SplashScreen;
