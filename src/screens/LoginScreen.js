import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { setRole } from '../redux/roleSlice';

const LoginScreen = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    const trimmedMobile = mobile.trim();
    const trimmedPassword = password.trim().toLowerCase();

    if (trimmedMobile === '123' && trimmedPassword === 'vendor') {
      dispatch(setRole('vendor'));
      navigation.replace('Drawer');
    } else if (trimmedMobile === '456' && trimmedPassword === 'rider') {
      dispatch(setRole('rider'));
      navigation.replace('Drawer');
    } else {
      Alert.alert('Login Failed', 'Invalid Mobile Number or Password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>Logo</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Mobile Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E8B57',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#2E8B57',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});



