import {} from 'react';
import {View, Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StackNavScreen from '../StackNavScreen';
import BottomTabNavigator from '../TabScreen';

import TestScreen from '../TestScreen';
import DashBoardScreen from '../DashBoardScreen';
import DetailScreen from '../DetailViewScreen';
import HooksScreen from '../HooksScreen';
import NavigationTestScreen from '../../NavigationScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={() => (
          <Drawer.Navigator initialRouteName="Stack">
            <Drawer.Screen
              name="Stack"
              component={StackNavScreen}
              options={{title: 'Navigation Screen'}}
            />
            <Drawer.Screen
              name="Tab"
              component={BottomTabNavigator}
              options={{title: 'Tab Screen'}}
            />
          </Drawer.Navigator>
        )}
        options={{headerShown: false}}
      />

      <Stack.Screen name="Details Screen" component={DetailScreen} />
      <Stack.Screen name="Hooks Screen" component={HooksScreen} />
      <Stack.Screen name="Navigation" component={NavigationTestScreen} />
    </Stack.Navigator>
  );
};

export default DrawerScreen;
