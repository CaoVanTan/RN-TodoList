import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const Button = (props) => {
    const { style, type, onPress } = props;

    return (
        <View style={[styles.container, style]}>
            {type === 'round' ? (
                <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                    <MaterialIcons name="add" size={32} color={Colors.white} />
                </TouchableOpacity>
            ) : null}
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {},
});
