import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import HeaderDrawer from '../components/Header/HeaderDrawer';
import Button from '../components/Button/Button';
import TaskListItem from '../components/TaskListItem/TaskListItem';
import ModalAdd from '../components/Modal/ModalAdd';

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
        time: '13/11/2022',
    },
    {
        id: 3,
        type: 'today',
        title: 'Giải trí',
        status: true,
        time: '13/11/2022',
    },
];

const Home = () => {
    const [task, setTask] = useState(tasks);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />
            <HeaderDrawer title="Hôm nay" />
            <Button style={styles.button} onPress={() => setModalVisible(true)}>
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
                    <TaskListItem data={tasks} />
                    <TaskListItem data={tasks} type="finished" />
                </View>
            )}

            {modalVisible ? <ModalAdd visible={modalVisible} setModalVisible={setModalVisible} /> : null}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 16,
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
