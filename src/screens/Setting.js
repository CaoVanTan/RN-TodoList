import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';

const Setting = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />
            <Text>Setting</Text>
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});
