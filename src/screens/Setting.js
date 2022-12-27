import { FlatList, StatusBar, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import Header from '../components/Header/Header';
import HeaderUserName from '../components/Header/HeaderUserName';
import MenuItem from '../components/Menu/MenuItem';

// const users = {
//     id: 1,
//     username: 'Cao Văn Tân',
//     uri: require('../../assets/images/user.png'),
// };

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

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />

            <Header title="Cài đặt" />

            <FlatList
                data={menus}
                style={{ marginHorizontal: 8 }}
                ListHeaderComponent={() => (
                    <HeaderUserName
                        style={{ marginTop: 12, marginBottom: 20 }}
                        onPress={() => navigation.navigate('Login')}
                    />
                )}
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
});
