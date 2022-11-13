import { StyleSheet, TouchableHighlight, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const ButtonIcon = (props) => {
    const { children, style, onPress } = props;
    return (
        <TouchableHighlight style={style} activeOpacity={0.8} underlayColor={Colors.textGray3} onPress={onPress}>
            {children}
        </TouchableHighlight>
    );
};

export default ButtonIcon;

const styles = StyleSheet.create({});
