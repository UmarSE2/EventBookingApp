import React from 'react';
import { View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Input from '../Abstracts/InputField';
import Button from '../Abstracts/Button';
import CurrentPin from '../Svgs/CurrentPin';
import BackSign from '../Svgs/Backward';
import Basketball from '../Svgs/Basketball';
import Music from '../Svgs/Music';
import ForkandKnives from '../Svgs/Fork&knives';

const MapHead = ({ navigation, route }) => {
    const Size = useWindowDimensions().scale * 4 + 4;

    let state = [
        { text: 'Sports', TextIcon: Basketball, color: '#EE544A' },
        { text: 'Music', TextIcon: Music, color: '#5669FF' },
        { text: 'Food', TextIcon: ForkandKnives, color: '#29D697' },
        { text: 'Art', TextIcon: Basketball, color: '#EE544A' },
        { text: 'Sports', TextIcon: Basketball, color: '#EE544A' },
        { text: 'Sports', TextIcon: Basketball, color: '#EE544A' },
        { text: 'Sports', TextIcon: Basketball, color: '#EE544A' },
    ];

    return (
        <View style={styles.head}>
            <View style={styles.row}>
                <Input
                    placeholder={'Find for food or restaurant...'}
                    width={'75%'}
                    onPress={() => navigation.goBack()}
                    fontSize={Size * 0.7 + 7}
                    LeadingButton={Button}
                    Leading_icon={BackSign}
                    backgroundColor={'white'}
                    paddingHorizontal={0}
                    borderWidth={0}
                    paddingVertical={0}
                />
                <View style={{ padding: 5 }} />
                <Button
                    width={Size * 3 + 10}
                    TextIcon={CurrentPin}
                    TextIconSize={Size * 1.3 + 5}
                    style={{ height: Size * 2.5 + 15, flexShrink: 1, marginLeft: 0, }}
                    height={'100%'}
                    backgroundColor={'white'}
                    paddingHorizontal={15}
                />
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <View style={[styles.row, styles.btncontainer]}>
                    {state.map((data, key) => {
                        return (
                            <View key={key} style={styles.btn}>
                                <Button
                                    key={key}
                                    text={data.text}
                                    backgroundColor={'white'}
                                    paddingVertical={Size / 3}
                                    TextIcon={data.TextIcon}
                                    TextIconColor={data.color}
                                    fontSize={Size * 1.3 + 1}
                                    TextIconSize={Size + 5}
                                    width={null}
                                    borderRadius={50}
                                />
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    head: {
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: 40,
    },
    row: {
        flexShrink: 1,
        flexDirection: 'row',
    },
    btncontainer: {
        marginTop: 10,
        marginLeft: 18,
    },
    btn: {
        marginRight: 9,
    },
    scroll: {
        marginLeft: 18,
    },
});

export default MapHead;
