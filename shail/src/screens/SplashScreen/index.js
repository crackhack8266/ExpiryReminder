import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('LoginScreen');
  }, 3000);
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '2%',
      }}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <Image
        source={require('../../common/assets/images/logo.jpeg')}
        style={{
          width: '100%',
          height: '50%',
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 45,
            textAlign: 'center',
            color: 'red',
            marginRight: '3%',
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 8,
          }}>
          Expiring
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Bold',
            fontSize: 45,
            textAlign: 'center',
            marginBottom: '20%',
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 8,
          }}>
          Things
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: 25,
          textAlign: 'center',
        }}>
        Please Wait . . .
      </Text>
    </View>
  );
};

export default SplashScreen;
