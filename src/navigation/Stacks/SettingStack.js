import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Setting from '../../screens/Setting';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
    return (
        <Stack.Navigator initialRouteName="Setting">
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default SettingStack;

const styles = StyleSheet.create({});
