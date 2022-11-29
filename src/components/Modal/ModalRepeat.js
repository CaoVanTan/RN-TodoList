import { StyleSheet, Text, View, Modal, FlatList } from 'react-native';
import React, { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';

import Layout from '../../constants/Layout';
import Colors from '../../constants/Colors';
import Button from '../Button/Button';

const timeRepeat = [
    {
        id: 1,
        label: 'Không lặp lại',
        value: 1,
    },
    {
        id: 2,
        label: 'Hàng ngày',
        value: 2,
    },
    {
        id: 3,
        label: 'Mỗi ngày trong tuần (Th 2 - Th 6)',
        value: 3,
    },
    {
        id: 4,
        label: 'Hàng tuần (Thứ 3)',
        value: 4,
    },
    {
        id: 5,
        label: 'Hàng tháng (Ngày 29)',
        value: 5,
    },
    {
        id: 6,
        label: 'Hàng năm (Ngày 29 tháng 11)',
        value: 6,
    },
    {
        id: 7,
        label: 'Tùy chỉnh',
        value: 7,
    },
];

const ModalRepeat = (props) => {
    const { visible, setVisible } = props;
    const [radioButtons, setRadioButtons] = useState();

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

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
                        <Text style={styles.title}>Lặp lại</Text>
                        <View style={{ marginHorizontal: 16, marginTop: 8 }}>
                            <RadioForm
                                radio_props={timeRepeat}
                                initial={0}
                                animation={true}
                                buttonColor={Colors.textGray3}
                                onPress={onPressRadioButton}
                            />
                        </View>
                        <View style={styles.wrapper}>
                            <Button
                                style={styles.button}
                                title="Hủy bỏ"
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

export default ModalRepeat;

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
