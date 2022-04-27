import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import SQLite from 'react-native-sqlite-storage';
import Constants from '../../../constants';
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
const ModalBody = ({
  navigation,
  itemData,
  visible,
  setVisible,
  setItemData,
  modalFor,
  itemNameLocal,
  expiryDateLocal,
  setItemNameLocal,
  setExpiryDateLocal,
}) => {
  const [pickerVisible, setPickerVisible] = useState(false);

  const calculateMinMaxDate = () => {
    let minDate = new Date().getFullYear;
    return minDate;
  };

  const changeSelectedDate = (event, selectedDate) => {
    setPickerVisible(false);
    const currentDate = selectedDate || expiryDateLocal;

    if (selectedDate.getTime() > new Date().getTime()) {
      return setExpiryDateLocal(currentDate);
    } else {
      Alert.alert(
        'Selected Date Is Not Valid',
        'You cannot select a past date, Please select future date ',
      );
    }
  };
  const checkMyDate = () => {
    return <Text>{expiryDateLocal.toDateString()}</Text>;
  };

  return (
    <ScrollView>
      <View style={{marginBottom: '5%', marginTop: '2%'}}>
        <TextInput
          onChangeText={setItemNameLocal}
          value={itemNameLocal}
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
        <TouchableOpacity onPress={() => setPickerVisible(true)}>
          {checkMyDate()}
        </TouchableOpacity>
      </View>

      {pickerVisible && (
        <DateTimePicker
          testID="updateDateTimePicker"
          value={expiryDateLocal}
          minimumDate={calculateMinMaxDate()}
          maximumDate={new Date(2050, 0, 1)}
          mode={'date'}
          is24Hour={false}
          display="calendar"
          onChange={changeSelectedDate}
        />
      )}

      {/* <Text>
        fhsdukfhsdhfsdkfjsldfsfsdflsdkfjdslkjfa static
        getDerivedStateFromProps(nextProps, prevState) static
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfjstatic
        getDerivedStateFromProps(nextProps, prevState) fsfsdfskfj
      </Text> */}
    </ScrollView>
  );
};

export default ModalBody;
