import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import Colors from '../constants/Colors';
import Button from '../components/Button/Button';
import ModalAddTask from '../components/Modal/ModalAddTask';
import TaskListItem from '../components/TaskListItem/TaskListItem';
import HeaderCalendar from '../components/Header/HeaderCalendar';
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
        title: 'Tùy chọn xem',
        uri: require('../../assets/menu-icons/setting.png'),
    },
    {
        id: 2,
        title: 'Sắp xếp nhiệm vụ',
        uri: require('../../assets/menu-icons/sort-ascending.png'),
    },
    {
        id: 3,
        title: 'Đăng ký lịch',
        uri: require('../../assets/menu-icons/event.png'),
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

const CalendarScreen = () => {
    const [task, setTask] = useState(tasks);
    const [modalVisible, setModalVisible] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    var minDate = String(parseInt(yyyy) - 3) + '-' + mm + '-' + dd;
    var maxDate = String(parseInt(yyyy) + 3) + '-' + mm + '-' + dd;

    const [month, setMonth] = useState(mm);
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
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.background} />

            <HeaderCalendar title={month} onPressMenu={() => setMenuShow(!menuShow)} />

            {menuShow && (
                <Popup
                    data={menus}
                    style={{ top: 52, right: 2 }}
                    styleItem={{ paddingRight: 16 }}
                    onPress={() => setMenuShow(false)}
                />
            )}

            <Button style={styles.button} onPress={() => setModalVisible(true)}>
                <MaterialIcons name="add" size={32} color={Colors.white} />
            </Button>

            <Calendar
                style={styles.calendar}
                initialDate={today}
                minDate={minDate}
                maxDate={maxDate}
                hideExtraDays={false}
                firstDay={1}
                enableSwipeMonths={true}
                markedDates={date.markedDates}
                hideArrows={true}
                onDayPress={(day) => {
                    // console.log('selected day', day);
                    getSelectedDayEvents(day.dateString);
                }}
                onDayLongPress={(day) => {
                    console.log('selected day', day);
                }}
                onMonthChange={(month) => {
                    setMonth(month.month);
                }}
                theme={{
                    backgroundColor: Colors.background,
                    calendarBackground: Colors.background,
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
                    'stylesheet.calendar.header': {
                        header: {
                            height: 0,
                            opacity: 0,
                        },
                    },
                }}
            />

            {task === '' ? (
                <View style={styles.wrapper1}>
                    <Image style={styles.image} source={require('../../assets/backgrounds/calendar_screen.png')} />
                    <Text style={styles.title}>Bạn có một ngày rảnh rỗi.</Text>
                    <View style={{ marginTop: 12, marginHorizontal: 28 }}>
                        <Text style={styles.text}>Tất cả đều xong rồi. Thư giãn và nạp năng lượng thôi.</Text>
                    </View>
                </View>
            ) : (
                <View style={task === '' ? { marginTop: 36 } : styles.wrapper2}>
                    <TaskListItem style={{ marginBottom: 8 }} title="Hôm nay" data={tasks} />
                    <TaskListItem data={tasks} status="finished" />
                </View>
            )}

            {modalVisible ? <ModalAddTask visible={modalVisible} setModalVisible={setModalVisible} /> : null}
        </View>
    );
};

export default CalendarScreen;

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
        zIndex: 1,
    },
    calendar: {},
    wrapper1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 18,
        color: Colors.textGray1,
    },
    text: {
        color: Colors.textGray2,
        paddingRight: 4,
        textAlign: 'center',
    },
    wrapper2: {
        marginTop: 12,
    },
});
