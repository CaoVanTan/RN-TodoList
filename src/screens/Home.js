import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';
import HeaderDrawer from '../components/Header/HeaderDrawer';
import Button from '../components/Button/Button';

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />
            <HeaderDrawer title="Hôm nay" />
            <Button style={styles.button} type="round" />
            <View style={styles.wrapper}>
                <Text>Home</Text>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 16,
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        backgroundColor: Colors.primary,
        borderRadius: 56,
    },
    wrapper: {},
});
