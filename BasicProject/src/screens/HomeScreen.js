import React from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { LOGO} from '../assets/image/index';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        margin: 10,
        padding: 12,
        borderRadius: 50,
    },
    button_text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
    image_container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    buttons_container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 100,
    },
    logo: {
        width: 412,
        height: 210,
    },

});

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.image_container}>
                <Image
                    style={styles.logo}
                    source={LOGO}
                />
            </View>
            <View style={styles.buttons_container}>
                <Pressable
                    onPress={() => navigation.navigate('Login')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#ddd'
                                : '#1b3c42'
                        },
                        styles.button
                    ]}
                >
                    <Text style={styles.button_text}>Login</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('Register')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#ddd'
                                : '#1b3c42'
                        },
                        styles.button
                    ]}
                >
                    <Text style={styles.button_text}>Register</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
export default HomeScreen;