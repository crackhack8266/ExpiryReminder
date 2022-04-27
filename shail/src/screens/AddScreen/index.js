import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import styles from './styles';
//import CustomModal from '../../common/components/CustomModal';
import DateTimePicker from '@react-native-community/datetimepicker';
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
const AddScreen = ({navigation}) => {
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState('date');
  const [isDisplayDate, setShow] = useState(false);
  const [itemName, setItemName] = useState('');
  const [visible, setIsVisible] = useState(true);
  console.log('navigation in addscreen:', navigation);

  const throwError = () => {
    return Alert.alert(
      'Expiry Date should be a date in future not in past or present.',
    );
  };
  const changeSelectedDate = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || mydate;
    if (selectedDate.getTime() > new Date().getTime()) {
      return setDate(currentDate);
    } else {
      throwError();
    }
  };

  const checkMyDate = () => {
    let currDate = new Date().toDateString();
    if (mydate.toDateString() != currDate) {
      return <Text>{mydate.toDateString()}</Text>;
    } else {
      return <Text>Select Date</Text>;
    }
  };

  const calculateDaysRemaining = () => {
    let timeDifference = mydate.getTime() - new Date().getTime();
    let differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return differenceInDays;
  };
  const calculateMinMaxDate = () => {
    let minDate = new Date().getFullYear;
    return minDate;
  };

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Item_Details ' +
          '(id INTEGER PRIMARY KEY AUTOINCREMENT,itemName TEXT, expiryDate TEXT);',
      );
    });
  };

  const insertQuery = async (itemName, expiryDate) => {
    console.log('insertQuery Executed:');

    if (
      itemName.length == 0 ||
      expiryDate.toDateString() == new Date().toDateString()
    ) {
      Alert.alert('Warning!', 'Please write your data.');
    } else {
      try {
        await db.transaction(tx => {
          // await tx.executeSql(
          //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
          // );

          tx.executeSql(
            'INSERT INTO Item_Details (itemName, expiryDate) VALUES (?,?)',
            [itemName, expiryDate],
            (tx, results) => {
              console.log('insert result :', results, tx);
              console.log('navigated to homescreen');
              navigation.navigate('HomeScreen');
              console.log('navigated to homescreen');
            },
          );
        });
      } catch (error) {
        Alert.alert('Error', 'Please try again later.');
      }
    }
  };
  useEffect(() => {
    createTable();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Modal animationType="fade" visible={visible} transparent={true}>
        <View style={styles.outerModalView}>
          <View style={styles.innerModalView}>
            <View style={{}}>
              <View style={styles.headerDivider}></View>
              <View style={styles.textRowView}>
                <View style={styles.textView}>
                  <Text style={styles.textStyle}>Add Item</Text>
                </View>
                <View style={styles.parentSvgView}>
                  <View style={styles.svgView}>
                    <TouchableOpacity
                      onPress={() => {
                        setIsVisible(false);
                        navigation.navigate('ListScreen');
                      }}>
                      <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        width={25}
                        height={25}
                        fill={'black'}>
                        <Path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.horizontalDivider}></View>
            </View>

            <View>
              <View style={{marginBottom: '5%', marginTop: '2%'}}>
                <TextInput
                  onChangeText={setItemName}
                  placeholder={'Item Name'}
                  style={{
                    paddingLeft: 10,
                    height: 40,
                    borderBottomWidth: 1,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
              </View>
              <View
                style={{
                  marginBottom: '5%',
                  height: 40,
                  borderBottomWidth: 1,
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  paddingLeft: 10,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={() => setShow(true)}>
                  {checkMyDate()}
                </TouchableOpacity>
              </View>

              {isDisplayDate && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={mydate}
                  minimumDate={calculateMinMaxDate()}
                  maximumDate={new Date(2050, 0, 1)}
                  mode={displaymode}
                  is24Hour={false}
                  display="calendar"
                  onChange={changeSelectedDate}
                />
              )}
              <View
                style={{
                  height: 40,
                  marginBottom: '5%',
                  paddingLeft: 10,
                  flexDirection: 'row',
                }}>
                <Text style={{}}>days remaining for expiry:</Text>
                <Text
                  style={{
                    color: calculateDaysRemaining() <= 10 ? 'red' : 'black',
                    marginLeft: 7,
                  }}>
                  {calculateDaysRemaining()}
                </Text>
              </View>

              <View style={{marginBottom: '5%'}}>
                <Button
                  title="Save"
                  onPress={() => {
                    insertQuery(itemName, mydate);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddScreen;
