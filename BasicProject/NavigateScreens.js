import React, { Component } from 'react';
import { Button, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './Register.js';
import { Login } from './Login.js';
import { LOGO } from './src/image/index.js';


function HomeScreen({ navigation }) {
    return (
        <View>
            <Image
                style={{ width: 150, height: 100, marginLeft: 112, }}
                source={LOGO}
            />
            <Button
                title="Register"
                color="#1b3c42"
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title="Login"
                color="#1b3c42"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    );
}


function RegisterScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Register />
        </View>
    );
}

function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Home',
                            headerStyle: styles.headerStyle,
                            headerTintColor: styles.headerTintColor,
                            headerTitleStyle: styles.headerTitleStyle,
                            headerTitleAlign: styles.headerTitleAlign,
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{
                            title: 'Registration',
                            headerStyle: styles.headerStyle,
                            headerTintColor: styles.headerTintColor,
                            headerTitleStyle: styles.headerTitleStyle,
                            headerTitleAlign: styles.headerTitleAlign,
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            title: 'Login',
                            headerStyle: styles.headerStyle,
                            headerTintColor: styles.headerTintColor,
                            headerTitleStyle: styles.headerTitleStyle,
                            headerTitleAlign: styles.headerTitleAlign,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}

const styles = {
    headerStyle: {
        backgroundColor: '#ffffff',
    },
    headerTintColor: '#1b3c42',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};