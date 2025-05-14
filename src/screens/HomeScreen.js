import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const role = useSelector((state) => state.role.value);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>
        {role === 'vendor' ? '🏠 Vendor Home' : '🏠 Rider Home'}
      </Text>
    </View>
  );
};

export default HomeScreen;


