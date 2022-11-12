import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Setting from '../screens/Setting';
// import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    );
};

export default RootNavigator;

const styles = StyleSheet.create({});
