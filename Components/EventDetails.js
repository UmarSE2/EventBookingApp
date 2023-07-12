import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, StatusBar, } from 'react-native';
import Button from '../Abstracts/Button';
import Container from '../Abstracts/Container';
import AboutEvent from './EventAbout';
import EventDetailCard from './EventDetailCard';
import BackArrow from '../Svgs/Backward';
import Bookmark from '../Svgs/Bookmarkwhitesolid';
import InviteSheet from './InviteSheet';
import Scale from '../Functions/Scale';
import Calender from '../Svgs/Calender';
import SolidLocationShadow from '../Svgs/SolidLocationShadow';
import { Colors, FontSize } from '../Assets/Theme';
import Forward from '../Svgs/Forward';

const imgSize = Scale(375, 375, 221);
const btnSize = Scale(375, 67, 28);
const avatarsize = Scale(375, 24, 24);
const BookmarkSize = Scale(375, 36, 36);
const BackArrowSize = Scale(375, 22, 22);
let bottomContainerSize = Scale(375, 295, 60);

const EventDetails = ({ navigation, }) => {
    const [barstyle, setBarstyle] = useState('light-content');
    const [whiteblack, setwhiteblack] = useState('#fefefe');

    const ref = useRef();
    const ScrollY = useRef(new Animated.Value(0)).current;
    const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

    const textColorRef = ScrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ['white', 'black'],
        extrapolate: 'clamp',
    });

    const barColorRef = ScrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ['transparent', 'white'],
        extrapolate: 'clamp',
    });

    const borderWidthRef = ScrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [40, 0],
        extrapolate: 'clamp',
    });

    const heightRef = ScrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [120, 0],
        extrapolate: 'clamp',
    });

    const widthRef = ScrollY.interpolate({
        inputRange: [0, 110],
        outputRange: ["75%", "100%"],
        extrapolate: 'clamp',
    });

    const bookmarkRef = ScrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ["white", "black"],
        extrapolate: 'clamp',
    });

    return (
        <>
            <AnimatedStatusBar animated={true} backgroundColor={"transparent"} translucent barStyle={barstyle} />
            <Animated.Image
                style={[{ width: imgSize.Width, height: imgSize.Height, position: 'absolute', },]}
                source={require('../Images/eventDetail.jpg')}
            />
            <Animated.View style={[styles.statusbar, styles.row, { backgroundColor: barColorRef },]}>
                <Button
                    onPress={() => navigation.goBack()}
                    TextIcon={BackArrow}
                    width={null}
                    TextIconColor={whiteblack}
                    TextIconSize={FontSize.H5}
                />
                <Animated.Text style={[styles.statusbartext, { color: textColorRef }]}>Event Details</Animated.Text>
                <Bookmark
                    width={BookmarkSize.Width}
                    height={BookmarkSize.Height}
                    color={bookmarkRef}
                />
            </Animated.View>
            <Animated.View
                style={[styles.bottomcontainer, styles.row, styles.center, {
                    width: widthRef,
                    height: bottomContainerSize.Height,
                    borderRadius: borderWidthRef,
                    top: heightRef,
                },
                ]}>
                <View style={[styles.row, styles.smimgcontainer]}>
                    <View style={[styles.avatars, styles.row]}>
                        <View style={[styles.avatarcontainer]}>
                            <Image style={styles.avatar}
                                source={require('../Images/panda.jpg')}
                            />
                        </View>
                        <View style={[styles.avatarcontainer2, styles.avatarcontainer]}>
                            <Image style={styles.avatar}
                                source={require('../Images/panda.jpg')}
                            />
                        </View>
                        <View style={[styles.avatarcontainer3, styles.avatarcontainer]}>
                            <Image style={styles.avatar}
                                source={require('../Images/panda.jpg')}
                            />
                        </View>
                    </View>
                    <View style={[styles.center]}>
                        <Text style={[styles.bottomtext, styles.center]}>+20 Going</Text>
                    </View>
                </View>
                <View style={{ flex: 1, }} />
                <View style={[styles.center, styles.btnconatainer]}>
                    <Button
                        text={'invite'}
                        width={btnSize.Width}
                        height={btnSize.Height}
                        paddingVertical={0}
                        fontSize={FontSize.SubTitle2}
                        borderRadius={5}
                        backgroundColor={'#5669FF'}
                        color={'#fff'}
                        onPress={() => {
                            ref.current.open();
                        }}
                    />
                </View>
            </Animated.View>
            <InviteSheet refRBSheet={ref} />
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: ScrollY } } }],
                    { useNativeDriver: false },
                )}
                onMomentumScrollEnd={event => {
                    if (event.nativeEvent.contentOffset.y > imgSize.Height / 3) {
                        setBarstyle('dark-content');
                        setwhiteblack('#121212');
                    } else {
                        setBarstyle('light-content');
                        setwhiteblack('#fefefe');
                    }
                }}>
                <Animated.View
                    style={{
                        width: imgSize.Width, height: imgSize.Height / 2.5,
                        transform: [{ translateY: heightRef }],
                    }} />
                <Animated.View style={{ backgroundColor: 'white' }}>
                    <Container>
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
                        />
                        <AboutEvent
                            description={
                                'Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. '
                            }
                            style={{ marginBottom: "20%" }}
                        />
                    </Container>
                </Animated.View>
            </Animated.ScrollView>

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
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: FontSize.H2,
        color: 'black',
        marginTop: "8%"
    },
    avatars: {
        width: "35%",
        justifyContent: 'center',
    },
    avatar: {
        width: avatarsize.Width,
        height: avatarsize.Height,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
    },
    avatarcontainer: {
        borderRadius: 23,
        justifyContent: 'center',
    },
    avatarcontainer2: {
        left: -avatarsize.Width / 3,
        zIndex: -2,
    },
    avatarcontainer3: {
        left: -(avatarsize.Width * 2) / 3,
        zIndex: -3,
    },
    smimgcontainer: {
        zIndex: 10,
        paddingLeft: avatarsize.Width,
        paddingVertical: 12,
    },
    btnconatainer: {
        paddingRight: 20,
    },
    bottomcontainer: {
        backgroundColor: 'white',
        borderRadius: 30,
        zIndex: 100,
    },
    row: {
        flexDirection: 'row',
    },
    center: {
        alignSelf: 'center',
    },
    statusbar: {
        paddingTop: 40,
        paddingHorizontal: 15,
    },
    statusbartext: {
        flex: 1,
        fontSize: FontSize.H4,
        paddingHorizontal: 10,
        color: '#fff',
    },
    bottomtext: {
        fontSize: FontSize.Title1,
        color: '#5669FF',
        fontWeight: '500',
    },
    bottombtn: {
        width: '100%',
        position: "absolute",
        bottom: 5,
        elevation: 23,
        shadowColor: "white"
    }
});

export default EventDetails;
