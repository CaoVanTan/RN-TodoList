import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { signIn, signUp } from '../../firebase';
import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';
import Button from '../components/Button/Button';

const LoginEmail = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [messageEmail, setMessageEmail] = useState(false);
    const [messagePass, setMessagePass] = useState(false);
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleSignIn = async () => {
        if (email.match(emailformat) && password.length >= 6 && password.length <= 64) {
            try {
                await signIn(email, password);
                navigation.navigate('TabNavigator');
            } catch (error) {
                Alert.alert('Email hoặc mật khẩu không chính xác!');
            }
        }

        if (email.match(emailformat) == null) {
            setMessageEmail(true);
        }

        if (password.length < 6 || password.length > 64) {
            setMessagePass(true);
        }
    };

    const handleSignUp = async () => {
        if (email.match(emailformat) && password.length >= 6 && password.length <= 64) {
            try {
                await signUp(email, password);
                Alert.alert('Đăng ký tài khoản thành công');
            } catch (error) {
                Alert.alert('Tên email đã được đăng ký!');
            }
        }
        if (email.match(emailformat) == null) {
            setMessageEmail(true);
        }
        if (password.length < 6 || password.length > 64) {
            setMessagePass(true);
        }
    };

    const handleForgetPass = () => {};

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

            <HeaderBack onPress={() => navigation.goBack()} />

            <View style={styles.wrapper}>
                <Text style={styles.title}>Sign in / Sign up</Text>

                <View style={styles.inputWrapper}>
                    <View>
                        <TextInput
                            style={styles.input}
                            keyboardType="email-address"
                            cursorColor={Colors.primary}
                            autoCapitalize="none"
                            value={email}
                            placeholder="Email"
                            onChangeText={(value) => {
                                setEmail(value);
                                setMessageEmail(false);
                            }}
                        />

                        <Text style={styles.messageError}>{messageEmail && 'Định dạng email không đúng'}</Text>

                        {email != '' && (
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    setEmail('');
                                    setMessageEmail(false);
                                }}
                            >
                                <Ionicons
                                    style={styles.iconClearEmail}
                                    name="close-circle"
                                    size={20}
                                    color={Colors.textGray2}
                                />
                            </TouchableWithoutFeedback>
                        )}
                    </View>

                    <View>
                        <TextInput
                            style={[styles.input, { paddingRight: 80 }]}
                            cursorColor={Colors.primary}
                            autoCapitalize="none"
                            placeholder="Mật khẩu: 6-64 ký tự"
                            secureTextEntry={isShowPassword}
                            value={password}
                            onChangeText={(value) => {
                                setPassword(value), setMessagePass(false);
                            }}
                        />

                        <Text style={styles.messageError}>{messagePass && 'Mật khẩu yêu cầu 6-64 ký tự'}</Text>

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
                                    setMessagePass(false);
                                }}
                            >
                                <Ionicons
                                    style={styles.iconClearPass}
                                    name="close-circle"
                                    size={20}
                                    color={Colors.textGray2}
                                />
                            </TouchableWithoutFeedback>
                        )}
                    </View>
                </View>

                <View style={styles.buttonWrapper}>
                    <Button
                        title="Đăng nhập"
                        style={styles.button}
                        titleStyle={styles.titleButton}
                        type={(email == '' || password == '') && 'disabled'}
                        onPress={handleSignIn}
                    />
                    <Button
                        title="Đăng ký"
                        style={styles.button}
                        titleStyle={styles.titleButton}
                        type={(email == '' || password == '') && 'disabled'}
                        onPress={handleSignUp}
                    />

                    <Button
                        title="Quên mật khẩu"
                        style={[styles.button, styles.btnForgetPass]}
                        titleStyle={[styles.titleButton, styles.titleBtnForgetPass]}
                        onPress={handleForgetPass}
                    />
                </View>
            </View>
        </View>
    );
};

export default LoginEmail;

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
    imageSlider: {
        width: 270,
        height: 270,
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
    iconClearEmail: {
        position: 'absolute',
        right: 12,
        top: 16,
    },
    iconClearPass: {
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
        backgroundColor: Colors.white,
    },
    titleButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textTransform: 'none',
    },
    titleBtnForgetPass: {
        color: Colors.textGray2,
    },
});
