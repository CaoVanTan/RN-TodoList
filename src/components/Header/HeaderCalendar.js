import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const HeaderCalendar = (props) => {
    const { title, onPressMenu } = props;

    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text style={styles.date}>thg {title}</Text>
            </View>
            <View style={styles.containerRight}>
                <TouchableHighlight
                    style={{ paddingHorizontal: 12, paddingVertical: 8 }}
                    activeOpacity={0.7}
                    underlayColor={Colors.textGray3}
                    onPress={() => {}}
                >
                    <Text style={{ fontSize: 16 }}>Hôm nay</Text>
                </TouchableHighlight>
                <TouchableOpacity activeOpacity={0.6} style={{ paddingLeft: 8 }} onPress={onPressMenu}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HeaderCalendar;

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
    date: {
        fontSize: 18,
    },
    containerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
