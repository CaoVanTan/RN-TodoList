import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Button = (props) => {
    const { style, type, onPress, children, title } = props;

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                {title ? <Text style={styles.title}>{title}</Text> : null}
                {children}
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
        textTransform: 'uppercase',
    },
});
