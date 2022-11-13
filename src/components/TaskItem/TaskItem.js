import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import Colors from '../../constants/Colors';

const TaskItem = (props) => {
    const { data, style, type } = props;
    const [isChecked, setChecked] = useState(data.status);

    return (
        <TouchableHighlight
            activeOpacity={0.7}
            underlayColor={Colors.textGray3}
            onPress={() => console.log('Clicked!')}
        >
            <View style={[styles.container, style]}>
                <View style={styles.containerLeft}>
                    <Checkbox
                        style={type === 'finished' ? styles.checkboxDisable : styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={type === 'finished' ? Colors.textGray2 : null}
                    />
                    <Text style={type === 'finished' ? styles.titleDisable : styles.title}>{data.title}</Text>
                </View>
                <View style={styles.containerRight}>
                    <Text style={type === 'finished' ? styles.timeDisable : styles.time}>{data.time}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default TaskItem;

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
        marginRight: 12,
    },
    checkboxDisable: {
        borderColor: Colors.textGray2,
        width: 18,
        height: 18,
        marginRight: 12,
    },
    title: {
        fontSize: 16,
        color: Colors.text,
    },
    titleDisable: {
        fontSize: 16,
        color: Colors.textGray2,
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
