import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, } from '@react-navigation/drawer';

import Messege from '../Svgs/Messege';
import Bookmark from '../Svgs/Bookmark';
import Mail from '../Svgs/Mail';
import Setting from '../Svgs/Setting';
import Question from '../Svgs/Question';
import SignOut from '../Svgs/SignOut';
import EmptyProfile from '../Svgs/EmptyProfile';
import CalenderLight from '../Svgs/CalenderLight';
import Crown from '../Svgs/Crown';

import Button from '../Abstracts/Button';
import { FontSize } from '../Assets/Theme';

const Drawer = (props) => {
    const btns = [
        {
            title: 'Profile',
            Icon: EmptyProfile,
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
            Icon: Mail,
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
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.drawerWrapper}>
                <View style={styles.wrapper1}>
                    <Image style={styles.drawerImg} resizeMode='contain'
                        source={{ uri: 'https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png' }} />
                    <Text style={styles.drawerTitle}>Ashfak Sayem</Text>
                </View>
                <View style={{ marginTop: "-22%", marginBottom: "18%" }}>
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
                    paddingVertical={"1.5%"}
                    fontWeight={"500"}
                    TextIconSize={20}
                    borderRadius={7}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerWrapper: {
        marginTop: "10%",
        width: '100%',
    },
    drawerTitle: {
        fontSize: FontSize.H7,
        fontWeight: '500',
        paddingVertical: 10,
        color: "black"
    },
    drawerImg: {
        width: "17%",
        height: "27%",
        borderRadius: 50,
    },
    wrapper1: {
        paddingLeft: 30,
    },
    btn1: {
        width: '60%',
        flexDirection: 'row',
    },
    btnUpgrade: {
        alignSelf: "flex-start",
        marginLeft: "7%"
    }
})

export default Drawer;