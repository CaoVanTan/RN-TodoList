import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

import Colors from '../../constants/Colors';

const HeaderUserName = (props) => {
    const { style, avatar, title, onPress } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image style={styles.avatar} source={avatar || require('../../../assets/images/user.png')} />
                {title ? (
                    <Text style={styles.title}>{title}</Text>
                ) : (
                    <Text style={styles.title}>Đăng nhập hoặc Đăng ký</Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default HeaderUserName;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 60,
        paddingHorizontal: 4,
        backgroundColor: Colors.background,
    },
    avatar: {
        width: 72,
        height: 72,
        marginRight: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
