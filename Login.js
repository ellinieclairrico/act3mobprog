// components/Login.js

import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const theme = useTheme();

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please fill in both fields');
    } else {
      Alert.alert('Success', `Logged in as ${username}`);
      // Here you would typically handle the login, e.g., call an API
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Login 
      </Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        mode="outlined"
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    color: '#800000', // Maroon color
  },
  superscript: {
    fontSize: 12, // Adjust the size for superscript
    lineHeight: 12, // Align it vertically with the base text
    position: 'relative',
    top: -10, // Move it up to create superscript effect
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#800000', // Maroon color for the button
  },
});

export default Login;
