import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const HeaderDrawer = (props) => {
    const { title } = props;

    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <TouchableOpacity activeOpacity={0.6} style={{ paddingRight: 16 }}>
                    <Ionicons name="menu" size={28} color={Colors.black} />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.containerRight}>
                <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 8 }}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderDrawer;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 12,
        backgroundColor: Colors.background,
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
    },
});
