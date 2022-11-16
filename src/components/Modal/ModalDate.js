import { StyleSheet, Modal, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import Button from '../Button/Button';
import MenuItem from '../MenuItem/MenuItem';

const ModalDate = (props) => {
    const { modalDate, setModalDate } = props;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    var minDate = String(parseInt(yyyy) - 3) + '-' + mm + '-' + dd;
    var maxDate = String(parseInt(yyyy) + 3) + '-' + mm + '-' + dd;

    const [date, setDate] = useState({
        selectedDate: today,
        markedDates: {},
    });

    const getSelectedDayEvents = (date) => {
        let markedDates = {};
        markedDates[date] = { selected: true, selectedColor: Colors.primary, selectedTextColor: Colors.white };
        setDate({
            selectedDate: date,
            markedDates: markedDates,
        });
    };

    LocaleConfig.locales['fr'] = {
        monthNames: [
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12',
        ],
        dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
        dayNamesShort: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
        today: 'Hôm nay',
    };
    LocaleConfig.defaultLocale = 'fr';

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent
                visible={modalDate}
                onRequestClose={() => {
                    setModalDate(!modalDate);
                }}
            >
                <View style={styles.container}>
                    <View style={styles.containerMiddle}>
                        <Calendar
                            style={styles.calendar}
                            initialDate={today}
                            minDate={minDate}
                            maxDate={maxDate}
                            hideExtraDays={true}
                            firstDay={1}
                            enableSwipeMonths={true}
                            markedDates={date.markedDates}
                            onDayPress={(day) => {
                                // console.log('selected day', day);
                                getSelectedDayEvents(day.dateString);
                            }}
                            onDayLongPress={(day) => {
                                console.log('selected day', day);
                            }}
                            theme={{
                                backgroundColor: '#ffffff',
                                calendarBackground: '#ffffff',
                                textSectionTitleColor: '#b6c1cd',
                                selectedDayBackgroundColor: Colors.primary,
                                selectedDayTextColor: Colors.white,
                                todayTextColor: Colors.primary,
                                todayBackgroundColor: Colors.white,
                                dayTextColor: Colors.black,
                                dotColor: Colors.primary,
                                selectedDotColor: Colors.white,
                                arrowColor: Colors.primary,
                                disabledArrowColor: '#d9e1e8',
                                monthTextColor: Colors.textGray1,
                                textDayFontWeight: 'bold',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: '300',
                                textDayFontSize: 14,
                                textMonthFontSize: 16,
                                textDayHeaderFontSize: 14,
                            }}
                        />

                        <View style={styles.wrapper}>
                            <View>
                                <MenuItem
                                    title="Đặt thời gian"
                                    style={{ marginHorizontal: 8 }}
                                    onPress={() => {}}
                                    textColor={Colors.black}
                                    icon={
                                        <View>
                                            <Ionicons name="time" size={24} color={Colors.textGray1} />
                                        </View>
                                    }
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: Colors.textGray2, marginRight: 8 }}>Không có</Text>
                                        <Entypo name="chevron-small-right" size={20} color={Colors.textGray2} />
                                    </View>
                                </MenuItem>

                                <MenuItem
                                    title="Đặt lời nhắc"
                                    style={{ marginHorizontal: 8 }}
                                    onPress={() => {}}
                                    textColor={Colors.black}
                                    icon={
                                        <View>
                                            <Ionicons name="alarm" size={24} color={Colors.textGray1} />
                                        </View>
                                    }
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: Colors.textGray2, marginRight: 8 }}>Không có</Text>
                                        <Entypo name="chevron-small-right" size={20} color={Colors.textGray2} />
                                    </View>
                                </MenuItem>

                                <MenuItem
                                    title="Đặt lặp lại"
                                    style={{ marginHorizontal: 8 }}
                                    onPress={() => {}}
                                    textColor={Colors.black}
                                    icon={
                                        <View style={{ paddingHorizontal: 2 }}>
                                            <FontAwesome name="repeat" size={24} color={Colors.textGray1} />
                                        </View>
                                    }
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: Colors.textGray2, marginRight: 8 }}>Không lặp lại</Text>
                                        <Entypo name="chevron-small-right" size={20} color={Colors.textGray2} />
                                    </View>
                                </MenuItem>
                            </View>

                            <View style={styles.groupButton}>
                                <Button style={styles.button} title="Xóa" />
                                <View style={{ flexDirection: 'row' }}>
                                    <Button
                                        style={[styles.button, { marginRight: 8 }]}
                                        title="Hủy bỏ"
                                        onPress={() => setModalDate(!modalDate)}
                                    />
                                    <Button style={styles.button} title="Ok" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalDate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    containerMiddle: {
        width: Layout.window.width - 70,
        backgroundColor: Colors.white,
        borderRadius: 8,
    },
    calendar: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    wrapper: {},
    groupButton: {
        marginVertical: 16,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
});
