import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {useIsFocused} from '@react-navigation/native';

import Item from '../../common/components/Item';
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
  const isFocused = useIsFocused();
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

  // const expiryDate = Date(item.expiryDate);
  // const splitedDate = expiryDate.split(' ');
  // const formatedDateDay = splitedDate.slice(0, 1).toString();
  // const formatedDate = splitedDate.slice(1, 4).toString();

  // const getDate = item => {
  //   let date = item.expiryDate;
  //   let dateFormated = date.getDate();
  //   return dateFormated;
  // };

  // const renderItem = ({item}) => {
  //   return (
  //     <TouchableOpacity
  //       onLongPress={() => {
  //         deleteData(item.id);
  //       }}>
  //       <View>
  //         <View
  //           style={{
  //             backgroundColor: 'white',
  //             marginBottom: 5,
  //             elevation: 10,
  //             marginHorizontal: 10,
  //             height: 'auto',
  //             borderRadius: 10,
  //             justifyContent: 'center',
  //             paddingHorizontal: 10,
  //           }}>
  //           <View style={{flexDirection: 'row'}}>
  //             <Text style={{fontWeight: 'bold'}}>Item Name: </Text>
  //             <Text> {item.itemName}</Text>
  //           </View>
  //           <View style={{flexDirection: 'row'}}>
  //             <Text style={{fontWeight: 'bold'}}>Expiry Date: </Text>
  //             <Text> {convertDateToSpecificFormat(item)}</Text>
  //           </View>
  //           <View style={{flexDirection: 'row'}}>
  //             <Text style={{fontWeight: 'bold'}}>Days Remaining </Text>
  //             <Text style={daysRem <= 10 ? {color: 'red'} : {color: 'black'}}>
  //               {calculateDaysRemaining(item)}
  //             </Text>
  //           </View>
  //         </View>

  //         <View>
  //           <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
  //             <Path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
  //           </Svg>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  });
  return (
    <View style={{marginTop: '10%'}}>
      <FlatList
        data={data}
        style={{
          height: '80%',
          overflow: 'visible',
        }}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Item item={item} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;
