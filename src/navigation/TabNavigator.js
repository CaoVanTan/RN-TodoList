import { StyleSheet, Image, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import Setting from '../screens/Setting';
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: Colors.background,
                    borderTopWidth: 0,
                    // elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 8,
                },
                tabBarIconStyle: {
                    marginTop: 8,
                },
                tabBarIcon: ({ focused }) => {
                    let iconName;
                    let colorIcon = focused ? Colors.tabIconSelected : Colors.tabIconDefault;
                    if (route.name === 'Home') {
                        iconName = require('../../assets/tab-icons/checklist.png');
                    } else if (route.name === 'Calendar') {
                        iconName = require('../../assets/tab-icons/calendar.png');
                    } else if (route.name === 'Setting') {
                        iconName = require('../../assets/tab-icons/setting.png');
                    }
                    return <Image source={iconName} style={{ width: 24, height: 24 }} tintColor={colorIcon} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Nhiệm vụ' }} />
            <Tab.Screen name="Calendar" component={Calendar} options={{ tabBarLabel: 'Lịch' }} />
            <Tab.Screen name="Setting" component={Setting} options={{ tabBarLabel: 'Cài đặt' }} />
        </Tab.Navigator>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({});
