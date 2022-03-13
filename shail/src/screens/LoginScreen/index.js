import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        paddingHorizontal: '5%',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <Image
        source={require('../../common/assets/images/logo.jpeg')}
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
      <View
        style={{
          backgroundColor: 'black',
          width: '100%',
          borderRadius: 20,
          padding: '2%',
          height: '5%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
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
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '3%',
        }}>
        <Text>Don't have an account ? </Text>
        <Text style={{color: 'red', fontWeight: '600'}}>Sign Up</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
