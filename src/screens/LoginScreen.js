// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//   const handleLogin = () => {
//     navigation.replace('Home'); // Navigate to DrawerNavigator
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Login Screen</Text>
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default LoginScreen;



import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setRole } from '../redux/roleSlice';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleVendorLogin = () => {
    dispatch(setRole('vendor'));
    navigation.replace('Home');
  };

  const handleRiderLogin = () => {
    dispatch(setRole('rider'));
    navigation.replace('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Login Screen</Text>
      <Button title="Login as Vendor" onPress={handleVendorLogin} />
      <Button title="Login as Rider" onPress={handleRiderLogin} />
    </View>
  );
};

export default LoginScreen;

