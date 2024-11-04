// components/PasswordRecovery.js

import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Text, Alert, ScrollView } from 'react-native';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
    } else {
      // Here you would typically handle the recovery logic, e.g., call an API
      Alert.alert('Success', `Recovery email sent to ${email}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Button title="Send Recovery Email" onPress={handleRecovery} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
});

export default PasswordRecovery;
