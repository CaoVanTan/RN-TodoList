import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import MenuIcon from '../Menu/MenuIcon';
import Button from '../Button/Button';

const timeReminder = [
    {
        id: 1,
        title: 'Không có',
        status: true,
    },
    {
        id: 2,
        title: 'Đúng ngày (09:00)',
        status: false,
    },
    {
        id: 3,
        title: 'Sớm 1 ngày (09:00)',
        status: false,
    },
    {
        id: 4,
        title: 'Sớm 2 ngày (09:00)',
        status: false,
    },
    {
        id: 5,
        title: 'Sớm 3 ngày (09:00)',
        status: false,
    },
    {
        id: 6,
        title: 'Sớm 1 tuần (09:00)',
        status: false,
    },
];

const ModalReminder = (props) => {
    const { visible, setVisible } = props;
    const [isChecked, setChecked] = useState();

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <View style={styles.container}>
                    <View style={styles.containerMiddle}>
                        <Text style={styles.title}>Lời nhắc</Text>
                        <FlatList
                            data={timeReminder}
                            ListFooterComponent={() => (
                                <MenuIcon
                                    style={{ marginHorizontal: 8, paddingVertical: 12 }}
                                    title="Tùy chỉnh"
                                    titleSize={16}
                                    titleColor={Colors.primary}
                                    icon={<Ionicons name="ios-add-sharp" size={20} color={Colors.primary} />}
                                    onPress={() => {}}
                                />
                            )}
                            renderItem={({ item }) => (
                                <MenuIcon
                                    style={{ marginHorizontal: 10, paddingVertical: 12 }}
                                    data={item}
                                    titleSize={16}
                                    type="checkbox"
                                    onPress={() => {}}
                                />
                            )}
                            keyExtractor={(item) => item.id}
                        />

                        <View style={styles.wrapper}>
                            <Button
                                style={styles.button}
                                title="Hủy bỏ"
                                onPress={() => {
                                    setVisible(false);
                                }}
                            />
                            <Button
                                style={styles.button}
                                title="Đã xong"
                                onPress={() => {
                                    setVisible(false);
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalReminder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    containerMiddle: {
        width: Layout.window.width - 70,
        paddingTop: 24,
        paddingBottom: 16,
        backgroundColor: Colors.white,
        borderRadius: 8,
    },
    title: {
        color: Colors.black,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 18,
        marginBottom: 8,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 6,
    },
    button: {
        marginTop: 16,
        marginBottom: 4,
        marginHorizontal: 12,
    },
});
