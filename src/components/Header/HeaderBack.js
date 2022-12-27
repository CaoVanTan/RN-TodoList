import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

export default function HeaderBack(props) {
    const { title, children, onPress } = props;

    return (
        <View style={styles.wrapper}>
            <View style={styles.headerTitle}>
                <TouchableOpacity style={styles.menu} activeOpacity={0.8} onPress={onPress}>
                    <Ionicons name="arrow-back" size={24} color={Colors.textGray1} />
                </TouchableOpacity>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
                <View style={styles.actions}>{children}</View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        width: '100%',
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 24,
    },
    menu: {},
    menuIcon: {
        width: 28,
        height: 28,
    },
    title: {},
    titleText: {
        textAlign: 'center',
        fontSize: 20,
    },
    actions: {
        alignItems: 'flex-end',
        width: 28,
    },
});
