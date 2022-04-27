import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Svg, {Path} from 'react-native-svg';
import SQLite from 'react-native-sqlite-storage';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CustomModal from '../CustomModal';
import PushNotification from 'react-native-push-notification';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
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
const Itemt = ({item, setData, index}) => {
  const [visible, setVisible] = useState(false);
  const [itemData, setItemData] = useState(item);
  const [modalFor, setModalFor] = useState('');
  // const handleNotification = () => {
  //   PushNotification.localNotification({
  //     channelId: 'test-Channel',
  //     title: 'You Clicked on ' + item.itemName,
  //     message: item.expiryDate,
  //     id: index,
  //   });

  //   PushNotification.localNotificationSchedule({
  //     channelId: 'test-Channel',
  //     title: 'you clicked on ' + item.itemName + ' 10 seconds ago',
  //     message: item.expiryDate,
  //     date: new Date(Date.now() + 20 * 1000),
  //     allowWhileIdle: true,
  //   });
  // };

  const abc = data => {
    setItemData(data);
    setVisible(false);
  };

  const calculateDaysRemaining = item => {
    let timeDifference =
      new Date(item.expiryDate).getTime() - new Date().getTime();
    let differenceInDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return differenceInDays > 0 ? differenceInDays : 'Expired';
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

  const leftSwipe = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          deleteData(item.id);
        }}>
        <View style={styles.leftSwipe}>
          <Text style={styles.leftSwipeText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
  const rightSwipe = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalFor = 'edit';
          setVisible(true);
        }}>
        <View style={styles.rightSwipe}>
          <Text style={styles.rightSwipeText}>Edit</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Swipeable renderLeftActions={leftSwipe} renderRightActions={rightSwipe}>
        <TouchableOpacity
          onPress={() => {
            // handleNotification();
            setModalFor('item_details');
            setVisible(true);
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Item Name: </Text>
                  <Text> {itemData.itemName}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Expiry Date: </Text>
                  <Text> {new Date(itemData.expiryDate).toDateString()}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Days Remaining </Text>
                  <Text style={11 <= 10 ? {color: 'red'} : {color: 'black'}}>
                    {calculateDaysRemaining(itemData)}
                  </Text>
                </View>
              </View>
              <Menu>
                <MenuTrigger>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 512"
                    width="20"
                    height="20"
                    fill="black">
                    <Path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
                  </Svg>
                </MenuTrigger>
                <MenuOptions
                  optionsContainerStyle={{width: 100, paddingHorizontal: 3}}>
                  <MenuOption
                    onSelect={() => {
                      setModalFor('edit');
                      setVisible(true);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Edit</Text>
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width={15}
                      height={15}
                      fill={'black'}>
                      <Path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
                    </Svg>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => deleteData(item.id)}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'red'}}>Delete</Text>
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width={15}
                      height={15}
                      fill={'black'}>
                      <Path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
                    </Svg>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
      <CustomModal
        visible={visible}
        setVisible={setVisible}
        itemData={itemData}
        setItemData={abc}
        modalFor={modalFor}
        setData={setData}
      />
    </>
  );
};

export default Itemt;
