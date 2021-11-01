/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Welcome } from './Welcome.js';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BasicForm } from './BasicForm.js';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to BasicForm"
        onPress={() => navigation.navigate('BasicForm')}
      />
      <Welcome />
    </View>
  );
}


function BasicFormScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BasicForm Screen</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
      <BasicForm />
    </View>
  );
}

const Stack = createNativeStackNavigator();

class Main extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BasicForm" component={BasicFormScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

export default Main;
