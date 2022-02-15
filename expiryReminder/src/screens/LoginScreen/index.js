import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          height: '100%',
          marginHorizontal: '5%',
          backgroundColor: 'yellow',
          justifyContent: 'center',
        }}>
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
            backgroundColor: 'red',
          }}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 1,
              paddingHorizontal: '3%',
              paddingVertical: Platform.OS === 'android' ? 0 : '3%',
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <Icon
              name="mail"
              size={24}
              style={{
                marginRight: '2%',
                alignSelf: 'center',
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
              borderRadius: 20,
              paddingHorizontal: '3%',
              paddingVertical: Platform.OS === 'android' ? 0 : '3%',
              flexDirection: 'row',
            }}>
            <Icon
              name="lock-closed"
              size={24}
              style={{marginRight: '2%', alignSelf: 'center'}}
            />
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
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            marginTop: '2%',
            width: '100%',
            borderRadius: 20,
            padding: '2%',
            height: '22%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: 2,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text>Don't have an account ? </Text>
          <Text style={{color: 'red', fontWeight: '600'}}>Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
