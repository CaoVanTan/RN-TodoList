import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors';

const Calendar = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />
            <Text>Calendar</Text>
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
});
