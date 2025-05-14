import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import AccessDeniedScreen from '../screens/AccessDeniedScreen';

import BookingHistoryScreen from '../screens/BookingHistoryScreen';
import WalletScreen from '../screens/WalletScreen';
import ContactUsScreen from '../screens/ContactUsScreen';

const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace('Login')} style={{ marginLeft: 20 }}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  const role = useSelector((state) => state.role.value);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      {role === 'vendor' ? (
        <>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </>
      ) : role === 'rider' ? (
        <>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Booking History" component={BookingHistoryScreen} />
          <Drawer.Screen name="Wallet" component={WalletScreen} />
          <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        </>
      ) : (
        <Drawer.Screen name="Access Denied" component={AccessDeniedScreen} />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

