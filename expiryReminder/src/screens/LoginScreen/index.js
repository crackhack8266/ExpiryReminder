import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={{height: '100%', marginHorizontal: '5%'}}>
        <Image
          source={require('images/logo.jpeg')}
          style={{
            width: '80%',
            height: '40%',
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />

        <View
          style={{
            justifyContent: 'space-evenly',
            height: '20%',
          }}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              padding: '3%',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Icon
              name="ios-person"
              size={24}
              style={{
                marginRight: '2%',
              }}
            />
            <TextInput
              autoCorrect={false}
              placeholder="Email"
              enablesReturnKeyAutomatically={true}
              clearButtonMode={true}
              style={{
                fontSize: 18,
                flex: 1,
              }}
            />
          </View>

          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              padding: '3%',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Icon name="lock-closed" size={24} style={{marginRight: '2%'}} />
            <TextInput
              autoCorrect={false}
              placeholder="Password"
              enablesReturnKeyAutomatically={true}
              secureTextEntry={true}
              clearButtonMode={true}
              style={{
                fontSize: 18,
                flex: 1,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
