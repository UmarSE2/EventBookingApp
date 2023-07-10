import React from 'react';
import { StatusBar, View } from 'react-native';
import Container from '../Abstracts/Container';
import ProfileHead from '../Components/ProfileHead';
import About from '../Components/About';
import TopTabBar from '../Components/ProfileTabBar';

const OrganizerProfile = ({ navigation, route }) => {
    return (
        <Container>
            <View style={{ height: StatusBar.currentHeight }} />
            <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <ProfileHead own={false} navigation={navigation} route={route} />
            <TopTabBar />
        </Container>
    );
};

export default OrganizerProfile;
