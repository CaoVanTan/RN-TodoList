import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const Button = (props) => {
    const { containerStyle, style, type, title, titleStyle, children, onPress } = props;

    return (
        <View style={containerStyle}>
            <TouchableOpacity
                style={[styles.container, style, type == 'disabled' && { opacity: 0.3 }]}
                activeOpacity={0.6}
                onPress={onPress}
                disabled={type == 'disabled' ? true : false}
            >
                {children}
                {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
        textTransform: 'uppercase',
    },
});
