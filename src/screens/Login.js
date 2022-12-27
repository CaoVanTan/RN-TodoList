import { StyleSheet, StatusBar, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';
import Button from '../components/Button/Button';

const Login = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

            <HeaderBack onPress={() => navigation.goBack()} />

            <View style={styles.wrapper}>
                <View style={styles.wrapperSlider}>
                    <Image source={require('../../assets/backgrounds/slider.png')} style={styles.imageSlider} />
                    <Text style={styles.title}>Đặt lời nhắc và số lần lặp lại cho các công việc</Text>
                </View>

                <View style={styles.wrapperButton}>
                    <Button
                        title="Đăng nhập bằng email"
                        style={styles.button}
                        titleStyle={styles.titleButton}
                        onPress={() => navigation.navigate('LoginEmail')}
                    >
                        <Image
                            source={require('../../assets/images/contact.png')}
                            style={[styles.imageButton, { tintColor: Colors.primary }]}
                        />
                    </Button>

                    <Button
                        title="Đăng nhập bằng Google"
                        style={styles.button}
                        titleStyle={styles.titleButton}
                        onPress={() => {}}
                    >
                        <Image source={require('../../assets/images/search.png')} style={styles.imageButton} />
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: '30%',
    },
    wrapperSlider: {
        alignItems: 'center',
    },
    imageSlider: {
        width: 270,
        height: 270,
    },
    title: {
        fontSize: 15,
    },
    button: {
        backgroundColor: Colors.lightGray,
        marginHorizontal: 36,
        marginVertical: 8,
        paddingVertical: 12,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageButton: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    titleButton: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.black,
        textTransform: 'none',
    },
});
