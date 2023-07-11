import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, } from '@react-navigation/drawer';
import Explore from '../Screens/Explore';
import Scale from '../Functions/Scale';
import { FontSize } from '../Assets/Theme';
import Button from '../Abstracts/Button';

import Profile from '../Svgs/ProfileLight';
import Setting from '../Svgs/Setting';
import Bookmark from '../Svgs/Bookmark';
import Question from '../Svgs/Question';
import Messege from '../Svgs/Messege';
import SignOut from '../Svgs/SignOut';
import Email from '../Svgs/Mail';
import Crown from '../Svgs/Crown';
import CalenderLight from '../Svgs/CalenderLight';

const profile = Scale(375, 60, 60);

function CustomDrawerContent(props) {
    const btns = [
        {
            title: 'My Profile',
            Icon: Profile,
            onPress: () => props.navigation.navigate('Profile'),
        },
        {
            title: 'Message',
            Icon: Messege,
            onPress: () => { },
        },
        {
            title: 'Calender',
            Icon: CalenderLight,
            onPress: () => { },
        },
        {
            title: 'Bookmark',
            Icon: Bookmark,
            onPress: () => { },
        },
        {
            title: 'Contact Us',
            Icon: Email,
            onPress: () => { },
        },
        {
            title: 'Settings',
            Icon: Setting,
            onPress: () => { },
        },
        {
            title: 'Helps & FAQs',
            Icon: Question,
            onPress: () => { },
        },
        {
            title: 'Sign Out',
            Icon: SignOut,
            onPress: () => { },
        },
    ];

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.spaceBetween}>
                <View style={styles.drawerWrapper}>
                    <View style={styles.wrapper1}>
                        <Image
                            style={styles.drawerImg}
                            source={{
                                uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png',
                            }}
                        />
                        <Text style={styles.drawerTitle}>Ashfak Sayem</Text>
                    </View>
                    {btns.map((btn, key) => {
                        return (
                            <View style={styles.btn1} key={key}>
                                <Button style={{ flexDirection: 'row' }}
                                    width={null}
                                    TextIcon={btn.Icon}
                                    TextIconSize={20}
                                    fontSize={FontSize.Title2}
                                    justifyContent={'flex-start'}
                                    text={btn.title}
                                    paddingHorizontal={17}
                                    paddingVertical={8}
                                    color={"black"}
                                    TextIconColor={btn.title === 'Bookmark' ? '#0000' : '#999'}
                                    onPress={btn.onPress}
                                />
                            </View>
                        );
                    })}
                </View>
                <View style={styles.btnUpgrade}>
                    <Button
                        text={'Upgrade Pro'}
                        TextIcon={Crown}
                        width={null}
                        height={null}
                        color={'#00F8FF'}
                        fontSize={FontSize.Body3}
                        backgroundColor={'#deffff'}
                        paddingVertical={"2.3%"}
                        paddingHorizontal={"4%"}
                        fontWeight={"500"}
                        TextIconSize={20}
                        borderRadius={7}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerType: 'slide',
                    overlayColor: '#0000',
                    animation: false,
                }}
                drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen
                    name="Explore"
                    component={Explore}
                    screenOptions={{
                        animation: false,
                    }}
                    options={{
                        drawerItemStyle: {
                            display: 'none',
                        },
                    }}
                />
            </Drawer.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    drawerWrapper: {
        width: '80%',
        paddingLeft: 0,
        paddingVertical: 10,
    },
    drawerTitle: {
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 10,
        color: "black"
    },
    drawerImg: {
        width: profile.Width,
        height: profile.Height,
        borderRadius: 50,
    },
    wrapper1: {
        paddingLeft: 30,
        marginBottom: "8%"
    },
    spaceBetween: {
        height: Dimensions.get('window').height,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    btn1: {
        width: '100%',
        flexDirection: 'row',
    },
    btnUpgrade: {
        marginLeft: "10%",
        marginBottom: "20%"
    }
});

export default MyDrawer;