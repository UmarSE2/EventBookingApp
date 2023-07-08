import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Button from '../Abstracts/Button';
import Input from '../Abstracts/InputField';
import { FontSize } from '../Assets/Theme';
import FilterSheet from './FilterSheet';

import Search from '../Svgs/Search';
import Filters from '../Svgs/Filter';
import MenuBar from '../Svgs/Menubar';
import DownArrow from '../Svgs/DownArrow';
import ActiveAlarm from '../Svgs/ActiveAlarm';
import Basketball from '../Svgs/Basketball';
import Music from '../Svgs/Music';
import ForkandKnives from '../Svgs/Fork&knives';

const HomeHead = ({ navigation }) => {
    const btnFontSize = useWindowDimensions().scale * 5 + 6;
    const [value, setValue] = useState('');
    const refRBSheet = useRef();

    let categories = [
        { title: 'Sports', icon: Basketball, color: '#F0635A' },
        { title: 'Music', icon: Music, color: '#F59762' },
        { title: 'Food', icon: ForkandKnives, color: '#29D697' },
        { title: 'Art', icon: Basketball, color: '#F0635A' },
        { title: 'Food', icon: ForkandKnives, color: '#29D697' },
    ];

    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        center: {
            alignSelf: 'center',
        },
        spacing: {
            marginTop: "8%"
        },
        container: {
            paddingBottom: btnFontSize * 2.2 - 3,
            backgroundColor: '#4A43EC',
            borderBottomStartRadius: 34,
            borderBottomEndRadius: 34,
            borderBottomWidth: 1,
            borderBottomColor: '#5669FF',
        },
        searchbar: {
            justifyContent: 'space-between',
            width: '100%',
            paddingVertical: "2%",
            paddingHorizontal: 5,
        },
        head1: {
            justifyContent: 'space-between',
            paddingHorizontal: 15,
        },
        headtext1: {
            color: '#FFFFFFAA',
            marginRight: 5,
        },
        headtext2: {
            letterSpacing: 1,
            color: 'white',
        },
        categorycontainer: {
            zIndex: 100,
            width: '100%',
            position: 'absolute',
            backgroundColor: 'transparent',
            bottom: -btnFontSize * 1.2,
        },
        filterbutton: {
            right: btnFontSize / 1.2,
        },
        btncontainer: {
            zIndex: 100,
            backgroundColor: 'transparent',
            marginHorizontal: 5,
        },
        categorybtncontainer: {
            zIndex: 100,
            backgroundColor: 'transparent',
            paddingVertical: 5,
            paddingLeft: 20,
            paddingRight: 20,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.spacing} />
            <View style={[styles.row, styles.head1]}>
                <Button
                    TextIcon={MenuBar}
                    width={FontSize.H4}
                    height={FontSize.H4}
                />
                <View>
                    <View style={[styles.row]}>
                        <Text style={[styles.headtext1, styles.center]}>Current Location</Text>
                        <DownArrow width={btnFontSize * 0.8} height={btnFontSize * 0.8} />
                    </View>
                    <Text style={[styles.headtext2, styles.center]}>New York, USA</Text>
                </View>
                <View style={styles.center}>
                    <Button
                        width={null}
                        TextIcon={ActiveAlarm}
                        texticonsize={btnFontSize * 1.6 + 8}
                    />
                </View>
            </View>
            <View style={[styles.row, styles.searchbar]}>
                <Input
                    value={value}
                    setValue={Value => { navigation.navigate('Search', { value: Value }) }}
                    onFocus={() => navigation.navigate('Search')}
                    width={'75%'}
                    Leading_icon={Search}
                    leadingsize={FontSize.H4}
                    leadingcolor={'#fff'}
                    placeholder={'Search...'}
                    fontSize={btnFontSize * 1.2}
                    color={'white'}
                    placeholderTextColor={'#dddddd7f'}
                    seperator={1}
                    seperatorHeight={25}
                    seperatorColor={'#dddddd7f'}
                    borderWidth={0}
                    paddingVertical={0}
                />
                <View style={styles.filterbutton}>
                    <Button
                        paddingVertical={5}
                        text={'Filters'}
                        width={null}
                        borderRadius={30}
                        fontSize={btnFontSize / 1.2}
                        color={'#FFFFFFAA'}
                        backgroundColor={'#5D56F3'}
                        textspacing={btnFontSize / 3}
                        TextIcon={Filters}
                        texticonsize={btnFontSize * 1.5}
                        texticoncolor={'#A29EF0'}
                        paddingHorizontal={btnFontSize / 2.5}
                        onPress={() => { refRBSheet.current.open() }}
                    />
                </View>
            </View>
            <View style={styles.categorycontainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View
                        style={[styles.row, styles.center, styles.categorybtncontainer]}>
                        {categories.map((data, key) => {
                            return (
                                <View key={key} style={styles.btncontainer}>
                                    <Button
                                        width={null}
                                        text={data.title}
                                        borderRadius={30}
                                        color={'white'}
                                        backgroundColor={data.color}
                                        fontSize={btnFontSize}
                                        TextIcon={data.icon}
                                        texticonsize={btnFontSize}
                                        texticoncolor={'white'}
                                        textspacing={btnFontSize / 5}
                                        paddingVertical={btnFontSize / 3}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
            <FilterSheet refRBSheet={refRBSheet} />

        </View>
    );
};

export default HomeHead;