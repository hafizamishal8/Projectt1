import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = route.name === 'HomeTab'
          ? (focused ? 'home' : 'home-outline')
          : (focused ? 'person' : 'person-outline');
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#00b894',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
    <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ title: 'Profile' }} />
  </Tab.Navigator>
);

export default BottomTabs;

