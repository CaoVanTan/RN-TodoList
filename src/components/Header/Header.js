import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

const Header = (props) => {
    const { title } = props;

    return (
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.containerRight}></View>
        </View>
    );
};

export default Header;

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
    containerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
