import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, ScrollView, useWindowDimensions, Share, Alert } from 'react-native';
import Container from '../Abstracts/Container';
import Input from '../Abstracts/InputField';
import Search from '../Svgs/Search';
import Select from '../Svgs/Select';
import NoSelect from '../Svgs/NoSelect';
import BottomSheet from './BottomSheet';
import Button from '../Abstracts/Button';
import ForwardArrow from '../Svgs/ForwardArrow';

const image = require("../Images/panda.jpg")

const InviteSheet = ({ refRBSheet }) => {
    const [dataset, setDataset] = useState([
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: true,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: true,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: false,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: false,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: true,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: false,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: false,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: true,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: false,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: true,
        },
        {
            title: 'Muhammad Umar',
            subtitle: '2k followers',
            uri: image,
            selected: false,
        },
    ]);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };

    const Size = useWindowDimensions().scale * 4 + 4;
    const styles = StyleSheet.create({
        data: {
            paddingVertical: 8,
        },
        flex: {
            flex: 1,
        },
        row: {
            flexDirection: 'row',
        },
        txtcontainer: {
            flex: 1,
            paddingHorizontal: 10,
        },
        cardtitle: {
            fontSize: Size * 1.1 + 3,
            color: '#222',
            fontWeight: '500',
        },
        btncontainer: {
            width: '100%',
            position: 'absolute',
            bottom: 20,
        },
        img: {
            width: Size * 2 + 15,
            height: Size * 2 + 15,
            borderRadius: 40,
        },
        title: {
            fontSize: 20,
            fontWeight: '500',
            color: '#333',
        },
        input: {
            paddingVertical: 10,
        },
        selection: {
            justifyContent: 'center',
        },
        subtitle: {
            fontSize: Size * 0.7 + 4,
        },
    });

    return (
        <>
            <BottomSheet refRBSheet={refRBSheet} height={'90%'}>
                <Container style={styles.flex}>
                    <View>
                        <Text style={styles.title}>Invite Friend</Text>
                    </View>
                    <View style={styles.input}>
                        <Input
                            width={'100%'}
                            borderRadius={50}
                            paddingVertical={3}
                            paddingHorizontal={20}
                            placeholder={'Search'}
                            fontSize={17}
                            Tailing_icon={Search}
                            tailingsize={23}
                            tailingcolor={'#5669FF'}
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            {dataset.map((data, key) => {
                                return (
                                    <View key={key} style={styles.data}>
                                        <TouchableWithoutFeedback
                                            onPress={() => {
                                                setDataset(prevState => {
                                                    let temp = prevState;
                                                    temp[key] = { ...temp[key], selected: !data.selected };
                                                    temp = [...temp];
                                                    return temp;
                                                });
                                            }}>
                                            <View style={styles.row}>
                                                <View>
                                                    <Image style={styles.img} source={data.uri} />
                                                </View>
                                                <View style={styles.txtcontainer}>
                                                    <Text style={styles.cardtitle}>{data.title}</Text>
                                                    <Text style={styles.subtitle}>{data.subtitle}</Text>
                                                </View>
                                                <View style={styles.selection}>
                                                    {data.selected ? (
                                                        <Select
                                                            width={Size * 1.3 + 5}
                                                            height={Size * 1.3 + 5}
                                                        />
                                                    ) : (
                                                        <NoSelect
                                                            width={Size * 1.3 + 5}
                                                            height={Size * 1.3 + 5}
                                                        />
                                                    )}
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </Container>
                <View style={styles.btncontainer}>
                    <Button
                        text={'INVITE'}
                        color={'#eee'}
                        width={'70%'}
                        Tailing_icon={ForwardArrow}
                        TailingSize={30}
                        fontSize={Size + 4}
                        paddingVertical={Size * 1}
                        backgroundColor={'#5669FF'}
                        onPress={onShare}
                    />
                </View>
            </BottomSheet>
        </>
    );
};

export default InviteSheet;
