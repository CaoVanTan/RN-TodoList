import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';

import TaskItem from '../TaskItem/TaskItem';
import Colors from '../../constants/Colors';

const TaskListItem = (props) => {
    const { data, type } = props;
    const [visible, setVisible] = useState(true);

    return type === 'finished' ? (
        <FlatList
            style={{ paddingHorizontal: 8, marginTop: 8 }}
            ListHeaderComponent={() => (
                <TouchableHighlight
                    style={{ borderRadius: 6 }}
                    activeOpacity={0.7}
                    underlayColor={Colors.textGray3}
                    onPress={() => setVisible(!visible)}
                >
                    <View style={[styles.wrapper, !visible ? styles.borderRadiusBottom : null]}>
                        <Text style={styles.title}>ĐÃ HOÀN THÀNH</Text>
                        <View style={styles.wrapperRight}>
                            <Text style={{ color: Colors.textGray3, marginRight: 8 }}>2</Text>
                            {visible ? (
                                <Entypo name="chevron-small-down" size={24} color={Colors.textGray3} />
                            ) : (
                                <Entypo name="chevron-small-left" size={24} color={Colors.textGray3} />
                            )}
                        </View>
                    </View>
                </TouchableHighlight>
            )}
            data={data}
            renderItem={({ item }) => (item.status && visible ? <TaskItem data={item} type="finished" /> : null)}
            keyExtractor={(item) => item.id}
        />
    ) : (
        <FlatList
            style={{ paddingHorizontal: 8 }}
            data={data}
            renderItem={({ item }) => (!item.status ? <TaskItem data={item} /> : null)}
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
