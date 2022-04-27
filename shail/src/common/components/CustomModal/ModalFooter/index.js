import React from 'react';
import {Button, View, TouchableOpacity, Text} from 'react-native';
import Constants from '../../../constants';
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
const ModalFooter = ({
  itemData,
  modalFor,
  itemNameLocal,
  expiryDateLocal,
  setItemData,
  setData,
}) => {
  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Item_Details', [], (tx, results) => {
        let len = results.rows.length;
        if (len >= 0) {
          let helperArray = [];
          for (let i = 0; i < len; i++) {
            helperArray.push(results.rows.item(i));
          }
          setData(helperArray);
        }
      });
    });
  };

  const deleteData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Item_Details WHERE id = ?',
        [itemData.id],
        (tx, results) => {
          var len = results.rowsAffected;
          if (len > 0) {
            getData();
          }
        },
      );
    });
  };

  const updateQuery = () => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE Item_Details SET itemName = ?, expiryDate = ? WHERE id = ?',
        [itemNameLocal, expiryDateLocal, itemData.id],

        (tx, results) => {
          var len = results.rowsAffected;
          console.log('Length: ', len);
          if (len > 0) {
            itemData.itemName = itemNameLocal;
            itemData.expiryDate = expiryDateLocal;
            console.log('ItemData: ', itemData);
            setItemData(itemData);
          }
        },
      );
    });
  };

  return (
    <>
      {modalFor == 'edit' ? (
        <Button
          title={Constants.EDIT_MODAL_BUTTON_TITLE}
          onPress={() => {
            updateQuery();
          }}
        />
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              updateQuery();
            }}>
            <View
              style={{
                backgroundColor: '#24a0ed',
                elevation: 4,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  alignSelf: 'center',
                  marginVertical: 8,
                }}>
                {Constants.EDIT_MODAL_BUTTON_TITLE.toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              deleteData();
            }}>
            <View
              style={{
                backgroundColor: 'red',
                elevation: 4,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  alignSelf: 'center',
                  marginVertical: 8,
                }}>
                {Constants.DELETE_MODAL_BUTTON_TITLE.toUpperCase()}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default ModalFooter;
