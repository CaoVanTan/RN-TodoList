import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import RadioGroup from 'react-native-radio-buttons-group';

import Colors from '../../constants/Colors';

const MenuIcon = (props) => {
    const { data, style, type, title, icon, titleColor, titleSize, onPress } = props;
    const [isChecked, setChecked] = useState(data && data.status);

    return (
        <TouchableHighlight activeOpacity={0.8} underlayColor={Colors.textGray3} onPress={onPress}>
            <View style={[styles.container, style]}>
                <View style={styles.containerLeft}>
                    {type == 'checkbox' && (
                        <Checkbox
                            style={styles.checkbox}
                            value={isChecked}
                            onValueChange={setChecked}
                            color={Colors.textGray2}
                        />
                    )}
                    {icon && icon}
                    <Text style={[styles.title, { color: titleColor, fontSize: titleSize }]}>
                        {data ? data.title : title}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default MenuIcon;

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
    checkbox: {
        borderColor: Colors.textGray1,
        width: 18,
        height: 18,
    },
    title: {
        marginLeft: 8,
    },
});
