import React, { Component } from 'react';
import { Button, View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './Register.js';
import { Login } from './Login.js';
import { LOGO } from './src/image/index.js';

const Stack = createNativeStackNavigator();
const Separator = () => (
    <View style={styles.separator} />
);
const ButtonSeparator = () => (
    <View style={styles.buttonSeparator} />
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 412,
        height: 210,
    },
    separator: {
        marginVertical: 100,
    },
    buttonSeparator: {
        marginVertical: 8,
    }
});

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
                <Separator />
                <View style={{ alignItems: 'center' }}>
                    <Button
                        title="Login"
                        color="#1b3c42"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <ButtonSeparator />
                    <Button
                        title="Register"
                        color="#1b3c42"
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
            </View>
        </SafeAreaView>
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

export class NavigateScreens extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Home',
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{
                            title: 'Registration',
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            title: 'Login',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}
