import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calendar from '../../screens/Calendar';

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
    return (
        <Stack.Navigator initialRouteName="Calendar">
            <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default CalendarStack;

const styles = StyleSheet.create({});
