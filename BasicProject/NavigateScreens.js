import React, { Component } from 'react';
import { Welcome } from './Welcome.js';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './Register.js';
import { Login } from './Login.js';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Register"
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Welcome />
        </View>
    );
}


function RegisterScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Register Screen</Text>
            <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate('Home')}
            />
            <Register />
        </View>
    );
}

function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate('Home')}
            />
            <Login />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export class NavigateScreens extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}
