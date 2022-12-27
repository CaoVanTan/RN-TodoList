import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import HeaderDrawer from '../components/Header/HeaderDrawer';
import Button from '../components/Button/Button';
import TaskListItem from '../components/TaskListItem/TaskListItem';
import ModalAddTask from '../components/Modal/ModalAddTask';
import Popup from '../components/Popup/Popup';

const tasks = [
    {
        id: 1,
        type: 'today',
        title: 'Học bài',
        status: true,
        time: '13/11/2022',
    },
    {
        id: 2,
        type: 'today',
        title: 'Uống nước',
        status: false,
        time: '09/12/2022',
    },
    {
        id: 3,
        type: 'today',
        title: 'Giải trí',
        status: true,
        time: '13/11/2022',
    },
];

const menus = [
    {
        id: 1,
        title: 'Hiện chi tiết',
        uri: require('../../assets/menu-icons/list.png'),
    },
    {
        id: 2,
        title: 'Ẩn đã hoàn thành',
        uri: require('../../assets/menu-icons/tick.png'),
    },
    {
        id: 3,
        title: 'Sắp xếp',
        uri: require('../../assets/menu-icons/sort.png'),
    },
    {
        id: 4,
        title: 'Chia sẻ',
        uri: require('../../assets/menu-icons/share.png'),
    },
    {
        id: 5,
        title: 'Chọn',
        uri: require('../../assets/menu-icons/checkboxes.png'),
    },
];

const Home = () => {
    const [task, setTask] = useState(tasks);
    const [modalVisible, setModalVisible] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />

            <HeaderDrawer title="Hôm nay" onPressMenu={() => setMenuShow(!menuShow)} />

            {menuShow && (
                <Popup
                    data={menus}
                    style={{ top: 52, right: 2 }}
                    styleItem={{ paddingRight: 16 }}
                    onPress={() => setMenuShow(false)}
                />
            )}

            <Button containerStyle={styles.buttonContainer} style={styles.button} onPress={() => setModalVisible(true)}>
                <MaterialIcons name="add" size={32} color={Colors.white} />
            </Button>

            {task === '' ? (
                <View style={styles.wrapper1}>
                    <Image style={styles.image} source={require('../../assets/backgrounds/today.png')} />
                    <Text style={styles.title}>Hãy lập kế hoạch cho ngày hôm trước.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                        <Text style={styles.text}>Hãy mỉm cười và tận hưởng ngày cuối tuần.</Text>
                        <AntDesign name="heart" size={20} color={Colors.pink} />
                    </View>
                </View>
            ) : (
                <View style={styles.wrapper2}>
                    <TaskListItem style={{ marginBottom: 8 }} title="Hôm nay" data={tasks} />
                    <TaskListItem data={tasks} status="finished" type="todo" />
                </View>
            )}

            {modalVisible ? <ModalAddTask visible={modalVisible} setModalVisible={setModalVisible} /> : null}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        backgroundColor: Colors.primary,
        borderRadius: 56,
    },
    wrapper1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
    },
    image: {
        width: 250,
        height: 250,
    },
    title: {
        fontSize: 18,
        color: Colors.textGray1,
    },
    text: {
        color: Colors.textGray2,
        paddingRight: 4,
    },
    wrapper2: {
        marginTop: 8,
    },
});
