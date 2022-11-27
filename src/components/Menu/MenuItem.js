import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { useState } from 'react';

import Colors from '../../constants/Colors';

const MenuItem = (props) => {
    const { data, title, icon, children, style, titleColor, titleSize, onPress } = props;
    const [isChecked, setChecked] = useState(data && data.status);

    return (
        <TouchableHighlight activeOpacity={0.8} underlayColor={Colors.textGray2} onPress={onPress}>
            <View style={[styles.container, style]}>
                <View style={styles.containerLeft}>
                    {icon}
                    <Text style={[{ color: titleColor, fontSize: titleSize }, styles.title]}>
                        {title ? title : data.title}
                    </Text>
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
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: Colors.white,
    },
    containerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 16,
        color: Colors.text,
        marginLeft: 12,
    },
    containerRight: {
        justifyContent: 'center',
    },
});
