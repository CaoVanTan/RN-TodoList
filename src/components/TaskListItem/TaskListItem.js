import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

import TaskItem from './TaskItem';
import Colors from '../../constants/Colors';

const TaskListItem = (props) => {
    const { data, status, type, style, title } = props;
    const [visible, setVisible] = useState(true);

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
                                <Text style={{ color: Colors.textGray3, marginRight: 8 }}>2</Text>
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
                    {status === 'finished' && item.status && visible && (
                        <TaskItem data={item} type="checkbox" status="finished" onPress={() => {}} />
                    )}

                    {status !== 'finished' && !item.status && (
                        <TaskItem data={item} type="checkbox" onPress={() => {}} />
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
