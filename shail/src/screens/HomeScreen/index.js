import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AddButton from '../../common/components/AddButton';
import SQLite from 'react-native-sqlite-storage';
import {useIsFocused} from '@react-navigation/native';
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

const HomeScreen = () => {
  const [data, setData] = useState(null);
  const [daysRem, setDaysRem] = useState(0);
  const isFocused = useIsFocused();

  const deleteData = id => {
    console.log('Inside del data: ', id);
    db.transaction(tx => {
      console.log('inside transaction start');
      tx.executeSql(
        'DELETE FROM Item_Details WHERE id = ?',
        [id],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            console.log('ID deleted');
          }
        },
      );
      console.log('inside transaction end');
    });
  };

  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Item_Details', [], (tx, results) => {
        var len = results.rows.length;
        if (len > 0) {
          let helperArray = [];
          for (let i = 0; i < len; i++) {
            helperArray.push(results.rows.item(i));
          }
          setData(helperArray);
        }
      });
    });
  };
  const calculateDaysRemaining = item => {
    let timeDifference =
      new Date(item.expiryDate).getTime() - new Date().getTime();
    let differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    // setDaysRem(differenceInDays);
    return differenceInDays > 0 ? differenceInDays : 'Expired';
  };

  // const expiryDate = Date(item.expiryDate);
  // const splitedDate = expiryDate.split(' ');
  // const formatedDateDay = splitedDate.slice(0, 1).toString();
  // const formatedDate = splitedDate.slice(1, 4).toString();

  const convertDateToSpecificFormat = item => {
    const expiryDate = item.expiryDate;
    const splitedDate = expiryDate.split(' ');
    const formatedDate = splitedDate.slice(1, 4).toString();
    return formatedDate;
  };

  // const getDate = item => {
  //   let date = item.expiryDate;
  //   let dateFormated = date.getDate();
  //   return dateFormated;
  // };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onLongPress={() => {
          deleteData(item.id);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            marginBottom: 5,
            elevation: 10,
            marginHorizontal: 10,
            height: 'auto',
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Item Name: </Text>
            <Text> {item.itemName}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Expiry Date: </Text>
            <Text> {convertDateToSpecificFormat(item)}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>Days Remaining </Text>
            <Text style={daysRem <= 10 ? {color: 'red'} : {color: 'black'}}>
              {calculateDaysRemaining(item)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  });
  return (
    <View style={{marginTop: '10%'}}>
      <Text style={{marginBottom: '10%'}}>
        Hello Shail, Welcome to home screen get Data not working
      </Text>
      <FlatList
        data={data}
        style={{
          height: '80%',
        }}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                deleteData(item.id);
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  marginBottom: 5,
                  elevation: 10,
                  marginHorizontal: 10,
                  height: 'auto',
                  borderRadius: 10,
                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Item Name: </Text>
                  <Text> {item.itemName}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Expiry Date: </Text>
                  <Text> {convertDateToSpecificFormat(item)}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Days Remaining </Text>
                  <Text
                    style={daysRem <= 10 ? {color: 'red'} : {color: 'black'}}>
                    {calculateDaysRemaining(item)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
