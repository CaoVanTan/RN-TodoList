import { StyleSheet, Text, View, StatusBar, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';
import Button from '../components/Button/Button';

const LoginPassword = () => {
    const navigation = useNavigation();
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [mode, setMode] = useState('signIn');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(false);

    const handleSignIn = () => {
        // if (email === "" || password === "") {
        //     Alert.alert("Thông báo", "Bạn phải nhập email và mật khẩu!");
        // } else {
        //     if (email === "minhtan006237@gmail.com" && password === "cvtan") {
        navigation.navigate('HomeDrawer');
        setEmail('');
        setPassword('');
        //     } else {
        //         Alert.alert(
        //             "Thông báo",
        //             "Email hoặc mật khẩu không chính xác!"
        //         );
        //     }
        // }
    };

    const handleSignUp = () => {
        if (email === '' || password === '') {
            Alert.alert('Thông báo', 'Bạn phải nhập email và mật khẩu!');
        } else {
            setMode('signIn');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

            <HeaderBack onPress={() => navigation.goBack()} />

            <View style={styles.wrapper}>
                <Text style={styles.title}>Enter a password</Text>

                <View style={styles.inputWrapper}>
                    <View style={styles.wrapperInput}>
                        <TextInput
                            style={styles.input}
                            cursorColor={Colors.primary}
                            autoCapitalize="none"
                            secureTextEntry={isShowPassword}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                        />

                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => setIsShowPassword(!isShowPassword)}
                            style={styles.iconShowHide}
                        >
                            {!isShowPassword ? (
                                <Ionicons name="eye-outline" size={24} color={Colors.textGray2} />
                            ) : (
                                <Ionicons name="eye-off-outline" size={24} color={Colors.textGray2} />
                            )}
                        </TouchableOpacity>

                        {password != '' && (
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    setPassword('');
                                    setMessage(false);
                                }}
                            >
                                <Ionicons
                                    style={styles.iconClear}
                                    name="close-circle"
                                    size={20}
                                    color={Colors.textGray2}
                                />
                            </TouchableWithoutFeedback>
                        )}
                    </View>
                </View>

                <Text style={styles.messageError}>{message && 'Định dạng email không đúng'}</Text>

                <View style={styles.buttonWrapper}>
                    <Button
                        title="Đăng nhập"
                        style={styles.button}
                        titleStyle={styles.titleButton}
                        type={password == '' && 'disabled'}
                        onPress={() => {}}
                    />
                    <Button
                        title="Quên mật khẩu"
                        style={styles.btnForgetPass}
                        titleStyle={styles.titleBtnForgetPass}
                        onPress={() => {}}
                    />
                </View>

                {/* {mode === 'signIn' ? (
                        <View style={styles.wrapper}>
                            <Button
                                title="Sign in"
                                background="#18A2EB"
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    marginBottom: 24,
                                }}
                                onPress={handleSignIn}
                            />

                            <Button
                                title="Sign up"
                                background="#4D33B9"
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                }}
                                onPress={() => {
                                    setEmail('');
                                    setPassword('');
                                    setMode('signUp');
                                }}
                            />
                        </View>
                    ) : (
                        <View style={styles.wrapper}>
                            <Button
                                title="Sign up"
                                background="#4D33B9"
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                }}
                                onPress={handleSignUp}
                            />

                            <Button
                                title="Sign in"
                                background="#18A2EB"
                                style={{
                                    borderWidth: 1,
                                    borderColor: 'white',
                                    marginTop: 24,
                                }}
                                onPress={() => {
                                    setEmail('');
                                    setPassword('');
                                    setMode('signIn');
                                }}
                            />
                        </View>
                    )} */}
            </View>
        </View>
    );
};

export default LoginPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    wrapper: {
        flex: 1,
        marginTop: 52,
        marginHorizontal: 24,
    },
    title: {
        fontSize: 20,
    },
    inputWrapper: {
        marginTop: 18,
        marginBottom: 4,
    },
    input: {
        position: 'relative',
        backgroundColor: Colors.lightGray,
        paddingVertical: 12,
        paddingLeft: 16,
        paddingRight: 44,
        fontSize: 18,
        borderRadius: 8,
    },
    iconClear: {
        position: 'absolute',
        right: 48,
        top: 16,
    },
    iconShowHide: {
        position: 'absolute',
        top: 14,
        right: 12,
    },
    messageError: {
        color: 'red',
        marginBottom: 12,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: Colors.primary,
    },
    btnForgetPass: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: Colors.white,
    },
    titleButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textTransform: 'none',
    },
    titleBtnForgetPass: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.textGray2,
        textTransform: 'none',
    },
});
