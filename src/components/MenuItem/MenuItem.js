import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const MenuItem = (props) => {
    const { title, children, style, onPress, textColor } = props;

    return (
        <TouchableHighlight activeOpacity={0.8} underlayColor={Colors.textGray3} onPress={onPress}>
            <View style={[styles.container, style]}>
                {children}
                <Text style={[styles.title, { color: textColor }]}>{title}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    title: {
        marginLeft: 8,
    },
});
