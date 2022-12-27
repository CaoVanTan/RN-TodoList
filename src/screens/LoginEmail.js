import { StyleSheet, Text, View, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import HeaderBack from '../components/Header/HeaderBack';
import Button from '../components/Button/Button';

const LoginEmail = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(false);

    const checkEmail = () => {
        var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(emailformat)) {
            navigation.navigate('LoginPassword');
        } else {
            setMessage(true);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />

            <HeaderBack onPress={() => navigation.goBack()} />

            <View style={styles.wrapper}>
                <Text style={styles.title}>Sign in / Sign up</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        cursorColor={Colors.primary}
                        autoCapitalize="none"
                        value={email}
                        placeholder="Email"
                        onChangeText={(value) => setEmail(value)}
                    />
                    {email != '' && (
                        <TouchableWithoutFeedback
                            onPress={() => {
                                setEmail('');
                                setMessage(false);
                            }}
                        >
                            <Ionicons style={styles.iconClear} name="close-circle" size={20} color={Colors.textGray2} />
                        </TouchableWithoutFeedback>
                    )}
                </View>

                <Text style={styles.messageError}>{message && 'Định dạng email không đúng'}</Text>

                <View style={styles.buttonWrapper}>
                    <Button
                        title="Tiếp theo"
                        style={styles.button}
                        titleStyle={styles.titleButton}
                        type={email == '' && 'disabled'}
                        onPress={checkEmail}
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
    iconClear: {
        position: 'absolute',
        right: 12,
        top: 16,
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
    titleButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
        textTransform: 'none',
    },
});
