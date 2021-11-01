import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LOGO } from './src/image/index.js';

export const Register = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View >
      <Image
        style={styles.logo}
        source={LOGO}
      />
      <View style={styles.container}>
        <TextInput
          placeholder="Full name" />
        <TextInput
          placeholder="Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm password"
        />
        <Button title="Create Account" />
        <Text>Already got an account?<Button title="Login" /></Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 700,
    width: 350,
    paddingTop: 50,
  },
  logo: {
    width: 150,
    height: 100,
    marginLeft: 112,
    marginTop: 112,
  },
});