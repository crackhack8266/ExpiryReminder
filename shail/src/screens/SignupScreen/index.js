import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import SQLite from 'react-native-sqlite-storage';

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
const SignupScreen = ({navigation}) => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();

  useEffect(() => {
    createTable();
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT UNIQUE, email TEXT, password TEXT);',
      );
    });
  };
  // const dropTable = () => {
  //   db.transaction(tx => {
  //     tx.executeSql('DROP TABLE Users ', (tx, results) => {
  //       var len = results.rows.length;
  //       console.log(results.rows);
  //       if (len > 0) {
  //         console.log('Table is deleted');
  //       } else {
  //         console.log('error deleting table');
  //       }
  //     });
  //   });
  // };

  const setData = (userName, email, password, confirmPass) => {
    console.log('setData Executed:');
    if (
      userName.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      confirmPass.length == 0
    ) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        if (password !== confirmPass)
          return Alert.alert('password and confirm password does not match');
        db.transaction(tx => {
          // await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
          // );
          tx.executeSql(
            'INSERT INTO Users (Username, Email, Password) VALUES (?,?,?)',
            [userName, email, password],
          );
        });
        navigation.navigate('HomeScreen');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.parentView}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />

        <Image
          source={require('../../common/assets/images/logo.jpeg')}
          style={styles.imageStyle}
        />

        <View style={styles.loginButtonView}>
          <TouchableOpacity>
            <Text
              style={styles.loginTextStyle}
              onPress={() => setData(userName, email, password, confirmPass)}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerView}>
          <Text>Already have an account ? </Text>
          <Text
            style={styles.signUpTextStyle}
            onPress={() => navigation.navigate('LoginScreen')}>
            Login
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignupScreen;
