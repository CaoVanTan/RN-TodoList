import {
    StyleSheet,
    View,
    Modal,
    TouchableOpacity,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import ButtonIcon from '../Button/ButtonIcon';
import ModalDate from './ModalDate';
import MenuIcon from '../Menu/MenuIcon';
import Popup from '../Popup/Popup';

const tags = [
    {
        id: 1,
        title: 'High Priority',
    },
    {
        id: 2,
        title: 'Medium Priority',
    },
    {
        id: 3,
        title: 'Low Priority',
    },
    {
        id: 4,
        title: 'No Priority',
    },
];

const types = [
    {
        id: 1,
        title: 'Hộp thư đến',
        uri: require('../../../assets/images/inbox.png'),
    },
    {
        id: 2,
        title: 'Công việc',
        uri: require('../../../assets/images/work.png'),
    },
    {
        id: 3,
        title: 'Cá nhân',
        uri: require('../../../assets/images/house.png'),
    },
    {
        id: 4,
        title: 'Học tập',
        uri: require('../../../assets/images/book.png'),
    },
];

const ModalAddTask = (props) => {
    const { visible, setModalVisible } = props;
    const inputRef = useRef();
    const [text, setText] = useState('');
    const [activeItem, setActiveItem] = useState(true);
    const [modalTag, setModalTag] = useState(false);
    const [modalType, setModalType] = useState(false);
    const [modalDate, setModalDate] = useState(false);

    useEffect(() => {
        setTimeout(() => inputRef.current.focus(), 150);
    }, []);

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent
                visible={visible}
                onRequestClose={() => {
                    setModalVisible(!visible);
                }}
            >
                <View style={styles.container}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => setModalVisible(!visible)}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Entypo name="resize-full-screen" size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                    <TouchableWithoutFeedback onPress={() => setModalVisible(!visible)}>
                        <View style={styles.containerMiddle}></View>
                    </TouchableWithoutFeedback>

                    <View style={styles.containerFooter}>
                        <TextInput
                            style={styles.input}
                            placeholder="Bạn thích làm gì?"
                            value={text}
                            cursorColor={Colors.primary}
                            ref={inputRef}
                            onChangeText={(value) => setText(value)}
                        />
                        <View style={styles.wrapper}>
                            <View style={styles.wrapperChild}>
                                <MenuIcon
                                    title="Hôm nay"
                                    titleColor={activeItem ? Colors.primary : Colors.textGray2}
                                    icon={
                                        <Ionicons
                                            name="ios-calendar"
                                            size={20}
                                            color={activeItem ? Colors.primary : Colors.textGray2}
                                        />
                                    }
                                    onPress={() => {
                                        setModalDate(true);
                                        setModalTag(false);
                                        setModalType(false);
                                    }}
                                />

                                {modalDate && <ModalDate modalDate={modalDate} setModalDate={setModalDate} />}

                                <ButtonIcon
                                    style={styles.buttonIcon}
                                    onPress={() => {
                                        setModalTag(!modalTag);
                                        setModalType(false);
                                    }}
                                >
                                    <Ionicons name="flag" size={20} color={Colors.textGray2} />
                                </ButtonIcon>

                                {modalTag && (
                                    <Popup
                                        data={tags}
                                        // icon={<Ionicons name="flag" size={20} color={Colors.textGray2} />}
                                        onPress={() => setModalTag(false)}
                                    />
                                )}

                                <ButtonIcon
                                    style={styles.buttonIcon}
                                    onPress={() => {
                                        setText((prev) => prev + '#');
                                        setModalTag(false);
                                        setModalType(false);
                                    }}
                                >
                                    <AntDesign name="tag" size={20} color={Colors.textGray2} />
                                </ButtonIcon>

                                <MenuIcon
                                    title="Hộp thư đến"
                                    titleColor={Colors.textGray2}
                                    icon={<MaterialIcons name="inbox" size={20} color={Colors.textGray2} />}
                                    onPress={() => {
                                        setModalType(!modalType);
                                        setModalTag(false);
                                    }}
                                />

                                {modalType && <Popup data={types} onPress={() => setModalTag(false)} />}
                            </View>

                            <View style={styles.wrapperChild}>
                                <TouchableHighlight
                                    style={text === '' ? { paddingHorizontal: 8, opacity: 0.4 } : styles.buttonSend}
                                    activeOpacity={0.6}
                                    underlayColor={Colors.primary}
                                    disabled={text === '' ? true : false}
                                    onPress={() => console.log(text)}
                                >
                                    <Ionicons
                                        name="send"
                                        size={20}
                                        color={text === '' ? Colors.primary : Colors.white}
                                    />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalAddTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerHeader: {
        width: '100%',
        height: 60,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    containerMiddle: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    containerFooter: {
        width: '100%',
        backgroundColor: Colors.white,
        paddingTop: 6,
    },
    input: {
        width: '100%',
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 16,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginHorizontal: 8,
    },
    wrapperChild: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonIcon: {
        paddingVertical: 12,
        paddingHorizontal: 8,
    },
    buttonSend: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16,
        backgroundColor: Colors.primary,
    },
});
