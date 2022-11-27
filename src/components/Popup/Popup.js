import { StyleSheet, FlatList, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import MenuIcon from '../Menu/MenuIcon';

const Popup = (props) => {
    const { data, icon, onPress } = props;

    return (
        <View style={styles.popup}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <MenuIcon
                        style={{ paddingHorizontal: 16, paddingRight: 56 }}
                        title={item.title}
                        icon={
                            item.uri ? (
                                <Image source={item.uri} style={{ width: 20, height: 20 }} />
                            ) : (
                                <Ionicons name="flag" size={20} color={Colors.textGray2} />
                            )
                        }
                        onPress={onPress}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default Popup;

const styles = StyleSheet.create({
    popup: {
        position: 'absolute',
        backgroundColor: Colors.white,
        bottom: 105,
        left: -6,
        borderRadius: 6,
        elevation: 10,
    },
});
