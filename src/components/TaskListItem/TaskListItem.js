import { StyleSheet, FlatList, View, Text, TouchableHighlight, ToastAndroid } from 'react-native';
import React, { useContext, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';

import { db } from '../../../firebase';
import TaskItem from './TaskItem';
import Colors from '../../constants/Colors';
import { AppContext } from '../../../AppContext';

const TaskListItem = (props) => {
    const { data, status, type, style, title } = props;
    const [visible, setVisible] = useState(true);
    const { setIsRefresh } = useContext(AppContext);

    let deleteTodo = async (todoId) => {
        await deleteDoc(doc(db, 'todos', todoId));
        setIsRefresh(true);
        ToastAndroid.show('Đã xóa một nhiệm vụ!', ToastAndroid.LONG);
    };

    let checkTodo = async (todoId) => {
        const toDoRef = doc(db, 'todos', todoId);
        setDoc(toDoRef, { completed: isChecked }, { merge: true });
    };

    return (
        <FlatList
            style={[{ paddingHorizontal: 8 }, style]}
            ListHeaderComponent={() => (
                <TouchableHighlight
                    style={{ borderRadius: 6 }}
                    activeOpacity={0.8}
                    underlayColor={Colors.textGray2}
                    onPress={() => type === 'todo' && setVisible(!visible)}
                >
                    <View style={[styles.wrapper, !visible ? styles.borderRadiusBottom : null]}>
                        <Text style={styles.title}>{status === 'finished' ? 'ĐÃ HOÀN THÀNH' : title}</Text>
                        {type === 'todo' && (
                            <View style={styles.wrapperRight}>
                                {/* <Text style={{ color: Colors.textGray3, marginRight: 8 }}>2</Text> */}
                                {visible ? (
                                    <Entypo name="chevron-small-down" size={24} color={Colors.textGray3} />
                                ) : (
                                    <Entypo name="chevron-small-left" size={24} color={Colors.textGray3} />
                                )}
                            </View>
                        )}
                    </View>
                </TouchableHighlight>
            )}
            data={data}
            renderItem={({ item }) => (
                <>
                    {status === 'finished' && item.completed && visible && (
                        <TaskItem
                            data={item}
                            key={item.id}
                            type="checkbox"
                            status="finished"
                            onPress={() => {}}
                            onLongPress={() => deleteTodo(item.id)}
                        />
                    )}

                    {status !== 'finished' && !item.completed && (
                        <TaskItem
                            data={item}
                            key={item.id}
                            type="checkbox"
                            onPress={() => {}}
                            onLongPress={() => deleteTodo(item.id)}
                        />
                    )}
                </>
            )}
            keyExtractor={(item) => item.id}
        />
    );
};

export default TaskListItem;

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Colors.textGray1,
    },
    wrapperRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    borderRadiusTop: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    borderRadiusBottom: {
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
});
