import React, { useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import Button from '../Abstracts/Button'
import Google from '../Svgs/Google'
import Facebook from '../Svgs/Facebook'
import { FontSize } from '../Assets/Theme'
import { useNavigation } from '@react-navigation/native';

const SocialAuth = () => {
    const navigation = useNavigation();

    useEffect(() => {
        GoogleSignin.configure();
        createChannels();
    }, []);

    const createChannels = () => {
        PushNotification.createChannel({
            channelId: 'email',
            channelName: 'Test Email',
        });
    };

    const handleNotification = (notification, msg = 'msg') => {
        PushNotification.localNotification({
            channelId: 'email',
            title: notification,
            message: msg,
        });
    };

    const PushNotifications = async () => {
        PushNotification.configure({
            onNotification: function (notification) {
                console.log('NOTIFICATION:', notification);
                handleNotification(notification.title, notification.message);
            },
        });
    };

    useEffect(() => {
        PushNotifications();
    }, []);

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signOut();
            const userInfo = await GoogleSignin.signIn();
            console.log('user info', userInfo);
            handleNotification('Signed in from Google', `Welcome, ${userInfo.user.familyName}!`);
            navigation.navigate('Explore');
        } catch (error) { }
    };

    return (
        <View>
            <Button
                text={"Login with Google"}
                width={"80%"}
                fontSize={FontSize.Button}
                backgroundColor={"white"}
                LeadingIcon={Google}
                LeadingSize={FontSize.H3}
                paddingVertical={15}
                borderColor={"grey"}
                borderWidth={1}
                onPress={signIn}
            />
            <Button
                text={"Login with Facebook"}
                width={"80%"}
                fontSize={FontSize.Button}
                backgroundColor={"white"}
                LeadingIcon={Facebook}
                LeadingSize={FontSize.H3}
                paddingVertical={15}
                borderColor={"grey"}
                borderWidth={1}
                style={{ marginVertical: "5%" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default SocialAuth;