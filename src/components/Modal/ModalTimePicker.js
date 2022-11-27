import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const ModalTimePicker = (props) => {
    const { showTimePicker, setShowTimePicker, setTime } = props;

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        let tempTime = new Date(currentDate);
        let fTime = tempTime.getHours() + ':' + tempTime.getMinutes();
        setShowTimePicker(false);
        setTime(fTime);
    };

    return (
        showTimePicker && (
            <View style={styles.container}>
                <DateTimePicker is24Hour={true} value={new Date()} mode="time" onChange={onChange} />
            </View>
        )
    );
};

export default ModalTimePicker;

const styles = StyleSheet.create({
    container: {},
});
