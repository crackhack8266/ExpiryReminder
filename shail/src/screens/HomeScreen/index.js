import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Itemt from '../../common/components/Item';
import PushNotification from 'react-native-push-notification';

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

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [itemId, setItemId] = useState();

  // const createChannels = () => {
  //   PushNotification.createChannel({
  //     channelId: 'test-Channel',
  //     channelName: 'Test Channel',
  //   });
  // };

  const getData = async () => {
    try {
      await db.transaction(tx => {
        tx.executeSql('SELECT * FROM Item_Details', [], (tx, results) => {
          let len = results.rows.length;
          if (len > 0) {
            let helperArray = [];
            for (let i = 0; i < len; i++) {
              helperArray.push(results.rows.item(i));
            }
            setData(helperArray);
          }
        });
      });
    } catch (e) {
      console.log('error occured at getData : ', e);
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      getData();
    });
    // createChannels();
  }, []);
  return (
    <View style={{marginTop: '10%'}}>
      <FlatList
        data={data}
        style={{
          height: '80%',
        }}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return <Itemt item={item} setData={setData} index={index} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
