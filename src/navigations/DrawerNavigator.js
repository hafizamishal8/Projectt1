import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import CounterScreen from '../screens/CounterScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="MainTabs" component={BottomTabs} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Counter" component={CounterScreen} />

  </Drawer.Navigator>
);

export default DrawerNavigator;
