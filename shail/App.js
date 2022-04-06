import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'screens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ListScreen from './src/screens/ListScreen';
import AddScreen from './src/screens/AddScreen';
import Svg, {Path} from 'react-native-svg';
import styles from './styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',

        tabBarShowLabel: false,
        tabBarStyle: {paddingTop: 4, height: 60},
        tabBarItemStyle: {
          paddingBottom: 10,
        },
      }}
      initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Item List',
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Icon
                name={'home'}
                size={24}
                style={{
                  marginRight: '2%',
                  alignSelf: 'center',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Icon
                name={'home'}
                size={24}
                style={{
                  marginRight: '2%',
                  alignSelf: 'center',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={AddScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.addButton}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                viewBox="0 0 448 512">
                <Path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
              </Svg>
            </View>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate('AddScreen');
          },
        })}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Icon
                name={'home'}
                size={24}
                style={{
                  marginRight: '2%',
                  alignSelf: 'center',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Icon
                name={'home'}
                size={24}
                style={{
                  marginRight: '2%',
                  alignSelf: 'center',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomTabNavigator"
          screenOptions={{headerShown: false}}
          presentation="modal">
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AddScreen"
            component={AddScreen}
            options={{animationEnabled: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
