import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BackArrow from '../Svgs/Backward';
import Search from '../Svgs/Search';
import Button from '../Abstracts/Button';
import MenuDot from '../Svgs/MenuDot';
import Scale from '../Functions/Scale';

const btnSize = Scale(375, 22, 22);
const btn2Size = Scale(375, 24, 24);
const fontSize = Dimensions.get('window').width * 0.06;

const EventStatus = ({ navigation, route }) => {

    return (
        <View style={[styles.statusbar, styles.row]}>
            <Button
                onPress={() => navigation.goBack()}
                TextIcon={BackArrow}
                width={null}
                TextIconSize={btnSize.Width}
            />
            <Text style={styles.statusbartext}>Events</Text>
            <Button
                onPress={() => navigation.navigate("Search")}
                TextIcon={Search}
                width={btn2Size.Width}
                height={btn2Size.Height}
                TextIconSize={btnSize.Width}
            />
            <View style={styles.spacing} />
            <MenuDot width={btnSize.Width} height={btnSize.Height} color={'black'} />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        alignSelf: 'center',
    },
    spacing: {
        padding: 5,
    },
    statusbar: {
        marginBottom: 15,
    },
    statusbartext: {
        flex: 1,
        fontSize: fontSize,
        paddingHorizontal: 10,
        color: '#000',
    },
});

export default EventStatus;
