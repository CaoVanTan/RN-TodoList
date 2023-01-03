import { FlatList, StatusBar, StyleSheet, View, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';

import Colors from '../constants/Colors';
import Header from '../components/Header/Header';
import HeaderUserName from '../components/Header/HeaderUserName';
import MenuItem from '../components/Menu/MenuItem';
import Button from '../components/Button/Button';
import { auth, logout } from '../../firebase';

const menus = [
    {
        id: 1,
        title: 'Thanh Tab',
        uri: require('../../assets/menu-icons//menu.png'),
    },
    {
        id: 2,
        title: 'Giao diện',
        uri: require('../../assets/menu-icons/paint-palette.png'),
    },
    {
        id: 3,
        title: 'Ngày & Thời gian',
        uri: require('../../assets/menu-icons/time.png'),
    },
    {
        id: 4,
        title: 'Âm thanh & Thông báo',
        uri: require('../../assets/menu-icons/music.png'),
    },
    {
        id: 5,
        title: 'Widgets',
        uri: require('../../assets/menu-icons/grid.png'),
    },
    {
        id: 6,
        title: 'Chung',
        uri: require('../../assets/menu-icons/list-bold.png'),
    },
];

const Setting = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

        return () => unsubscribe();
    }, [user]);

    const handleLogout = () => {
        Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất không?', [
            {
                text: 'Hủy bỏ',
                style: 'cancel',
            },
            {
                text: 'Xác nhận',
                onPress: async () => {
                    console.log('OK Pressed');
                    await logout(auth);
                    navigation.navigate('Login');
                },
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />

            <Header title="Cài đặt" />

            <FlatList
                data={menus}
                style={{ marginHorizontal: 8 }}
                ListHeaderComponent={() =>
                    user ? (
                        <HeaderUserName
                            style={{ marginTop: 12, marginBottom: 20 }}
                            title={user.displayName || user.email}
                            onPress={() => navigation.navigate('Login')}
                        />
                    ) : (
                        <HeaderUserName
                            style={{ marginTop: 12, marginBottom: 20 }}
                            onPress={() => navigation.navigate('Login')}
                        />
                    )
                }
                ListFooterComponent={() =>
                    user && (
                        <Button
                            title="Đăng xuất"
                            style={styles.button}
                            titleStyle={styles.titleButton}
                            onPress={handleLogout}
                        />
                    )
                }
                renderItem={({ item }) => (
                    <MenuItem
                        title={item.title}
                        onPress={() => {}}
                        textColor={Colors.black}
                        icon={
                            <View>
                                <Image source={item.uri} style={{ width: 20, height: 20, tintColor: Colors.primary }} />
                            </View>
                        }
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="chevron-small-right" size={24} color={Colors.textGray2} />
                        </View>
                    </MenuItem>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    button: {
        backgroundColor: Colors.white,
        marginVertical: 8,
        paddingVertical: 12,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleButton: {
        fontSize: 16,
        fontWeight: '400',
        color: 'red',
        textTransform: 'none',
    },
});
