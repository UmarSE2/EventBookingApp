import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Animated, StatusBar, ScrollView } from 'react-native'
import Backward from '../Svgs/Backward';
import Bookmark from '../Svgs/Bookmark';
import Scale from '../Functions/Scale';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import { Colors, FontSize } from '../Assets/Theme'
import EventDetailCard from './EventDetailCard';
import SolidLocationShadow from '../Svgs/SolidLocationShadow';
import Calender from '../Svgs/Calender';
import EventAbout from './EventAbout';
import Forward from '../Svgs/Forward';

const EventDetails = ({ navigation }) => {
    const [barstyle, setBarstyle] = useState('light-content');

    // const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar)
    const imgSize = Scale(375, 375, 244);
    const avatarsize = Scale(375, 34.18, 34.18);
    const avatarcontainersize = Scale(375, 56, 24);

    const styles = StyleSheet.create({
        row: {
            flexDirection: "row",
            alignItems: "center",
        },
        headImage: {
            width: imgSize.Width,
            height: imgSize.Height,
            position: 'absolute'
        },
        headerText: {
            justifyContent: "space-between",
            marginTop: "10%"
        },
        avatorContainer: {
            backgroundColor: "white",
            width: "80%",
            paddingVertical: "3.5%",
            borderRadius: 35,
            alignSelf: "center",
            marginTop: "45%",
            paddingHorizontal: "5%"
        },
        avatar: {
            width: avatarsize.Width,
            height: avatarsize.Height,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 25,
        },
        avatarcontainer2: {
            left: -avatarsize.Width / 3,
            zIndex: -2,
        },
        avatarcontainer3: {
            left: -(avatarsize.Width * 2) / 3,
            zIndex: -3,
        },
        title: {
            fontSize: FontSize.H2,
            color: 'black',
        },
        bottombtn: {
            width: '100%',
            position: "absolute",
            bottom: 5,
            elevation: 23,
            shadowColor: "white"
        }
    })
    return (
        <>
            {/* <AnimatedStatusBar animated={true} translucent barStyle={barstyle} /> */}
            <Container>
                <Image style={styles.headImage}
                    source={require('../Images/eventDetail.jpg')} />
                <View style={[styles.headerText, styles.row]}>
                    <View style={styles.row}>
                        <Button
                            onPress={() => navigation.goBack()}
                            TextIcon={Backward}
                            width={null}
                            TextIconColor={"white"}
                            TextIconSize={20}
                        />
                        <Text style={{ color: "white", fontSize: FontSize.H4, fontWeight: "500", marginLeft: "6%" }}>
                            Event Details
                        </Text>
                    </View>
                    <View style={styles.spacing} />
                    <Bookmark
                        width={20}
                        height={20}
                        color={"white"}
                    />
                </View>
                <View style={[styles.avatorContainer, styles.row]}>
                    <View>
                        <Image
                            style={styles.avatar}
                            source={require('../Images/panda.jpg')}
                        />
                    </View>
                    <View style={styles.avatarcontainer2}>
                        <Image
                            style={styles.avatar}
                            source={require('../Images/panda.jpg')}
                        />
                    </View>
                    <View style={styles.avatarcontainer3}>
                        <Image
                            style={styles.avatar}
                            source={require('../Images/panda.jpg')}
                        />
                    </View>
                    <Text style={{ color: Colors.Blue, marginLeft: "-5%" }}>+20 Going</Text>
                    <Button
                        text={"Invite"}
                        color={"white"}
                        backgroundColor={Colors.Blue}
                        width={null}
                        fontSize={FontSize.SubTitle2}
                        borderRadius={5}
                        style={{ marginLeft: "15%" }}
                    />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginBottom: "7%" }}>
                        <Text style={styles.title}>International Brand Music Concert</Text>
                        <EventDetailCard
                            Icon={Calender}
                            title={'14 December, 2021'}
                            subtitle={'Tuesday, 4:00PM-9:00PM'}
                        />
                        <EventDetailCard
                            Icon={SolidLocationShadow}
                            title={'14 December, 2021'}
                            subtitle={'Tuesday, 4:00PM-9:00PM'}
                        />
                        <EventDetailCard
                            Icon={Calender}
                            image_addr={require('../Images/eventDetail.jpg')}
                            title={'Ashfak Sayem'}
                            subtitle={'Organizer'}
                            btntext={'Follow'}
                            btnPress={() => { }}
                        />
                        <EventAbout
                            description={
                                'Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. '
                            }
                        />
                    </View>
                </ScrollView >
            </Container>
            <View style={styles.bottombtn}>
                <Button
                    text={'Buy Ticket $120'}
                    width={"70%"}
                    color={"white"}
                    fontSize={FontSize.Button}
                    backgroundColor={Colors.Blue}
                    TailingIcon={Forward}
                    TailingSize={FontSize.H3}
                    paddingVertical={17}
                    letterSpacing={1}
                    borderRadius={16}
                />
            </View>
        </>
    )
}


export default EventDetails;