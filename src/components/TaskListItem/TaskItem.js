import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

import Colors from '../../constants/Colors';

const MenuItem = (props) => {
    const { data, style, status, onPress, onLongPress } = props;
    const [isChecked, setChecked] = useState(data && data.completed);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;

    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={Colors.textGray2}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <View style={[styles.container, style]}>
                <View style={styles.containerLeft}>
                    <Checkbox
                        style={status == 'finished' ? styles.checkboxDisable : styles.checkbox}
                        value={isChecked}
                        onValueChange={() => setChecked(!isChecked)}
                        color={status == 'finished' ? Colors.textGray2 : null}
                    />

                    <Text style={status == 'finished' ? styles.titleDisable : styles.title}>{data.title}</Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={status == 'finished' ? styles.timeDisable : styles.time}>
                        {data && data.date == today ? 'Hôm nay' : data.date}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: Colors.white,
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    checkbox: {
        borderColor: Colors.textGray1,
        width: 18,
        height: 18,
    },
    checkboxDisable: {
        borderColor: Colors.textGray2,
        width: 18,
        height: 18,
    },
    title: {
        fontSize: 15,
        color: Colors.text,
        marginLeft: 12,
    },
    titleDisable: {
        fontSize: 15,
        color: Colors.textGray2,
        marginLeft: 12,
    },
    containerRight: {
        justifyContent: 'center',
    },
    time: {
        color: Colors.primary,
        fontSize: 12,
    },
    timeDisable: {
        color: Colors.textGray2,
        fontSize: 12,
    },
});
