import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const MenuItem = (props) => {
    const { title, children, style, onPress, textColor, icon } = props;

    return (
        <TouchableHighlight activeOpacity={0.8} underlayColor={Colors.textGray3} onPress={onPress}>
            <View style={[styles.container, style]}>
                <View style={styles.containerLeft}>
                    {icon}
                    <Text style={[styles.title, { color: textColor }]}>{title}</Text>
                </View>
                {children}
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
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    containerLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        marginLeft: 8,
    },
});
