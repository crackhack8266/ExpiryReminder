import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SQLite from 'react-native-sqlite-storage';

import styles from './styles';

const db = SQLite.openDatabase(
  {
    name: 'items',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usersList, setUsersList] = useState('');
  useEffect(() => {
    createTable();
    getData();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT,Username TEXT UNIQUE, Email TEXT, Password TEXT);',
      );
    });
  };

  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT Email, Password FROM Users', [], (tx, results) => {
        var len = results.rows.length;

        if (len > 0) {
          let helperArray = [];
          for (let i = 0; i < len; i++) {
            console.log(results.rows.item(i));
            helperArray.push(results.rows.item(i));
          }
          setUsersList(helperArray);
        }
      });
    });
  };

  const verifyLogin = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT Email, Password FROM Users WHERE Email = ? ',
        [email],
        (tx, results) => {
          var len = results.rows.length;
          console.log(results.rows);
          if (len > 0) {
            let enteredPassword;
            for (let i = 0; i < len; i++) {
              console.log(results.rows.item(i));
              enteredPassword = results.rows.item(i).Password;
              console.log('enteredPassword: ', enteredPassword);
              console.log('password: ', password);
              if (enteredPassword == password) {
                navigation.navigate('HomeScreen');
              } else {
                console.log('Password is wrong');
              }
            }
            setUsersList(helperArray);
          } else {
            console.log('email does not exist');
          }
        },
      );
    });
  };

  return (
    <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.parentView}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
        <Image
          source={require('../../common/assets/images/logo.jpeg')}
          style={styles.imageView}
        />

        <View style={styles.loginButtonView}>
          <TouchableOpacity>
            <Text style={styles.loginTextStyle} onPress={verifyLogin}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerView}>
          <Text>Don't have an account ? </Text>
          <Text
            style={styles.signUpTextStyle}
            onPress={() => navigation.navigate('SignupScreen')}>
            Sign Up
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
