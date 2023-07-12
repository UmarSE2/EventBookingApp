import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import NotificationCard from '../Components/NotificationCard';
import NotificationHead from '../Components/NotificationHead';
import Container from '../Abstracts/Container';
import EmptyNotification from '../Svgs/EmptyNotification';

const Notifications = ({ navigation, route }) => {
    const [value, setValue] = useState();
    let state = [
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Just now',
            title: 'Muhammad Umar',
            location: 'Radius Gallery • Santa Cruz, CA',
            btns: true,
            setvalue: setValue,
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: '5 mins ago',
            title: 'Shazil Usman',
            location: 'Radius Gallery • Santa Cruz, CA',
            btns: true,
            setvalue: setValue,
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: '25 mins ago',
            title: 'Mashaim Ali',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: '1 hr ago',
            title: 'Khan Nasir',
            location: 'Radius Gallery • Santa Cruz, CA',
            btns: true,
            setvalue: setValue,
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, 5:10pm',
            title: 'Elaf Zubair',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
            btns: true,
            setvalue: setValue,
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
    ];

    return (
        <Container paddingHorizontal={18}>
            <View style={{ height: StatusBar.currentHeight }} />
            <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <NotificationHead navigation={navigation} route={route} />
            {state.length !== 0 ? (
                <>
                    <View style={styles.spacing} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {state.map((data, key) => {
                            return (
                                <NotificationCard
                                    key={key}
                                    img={data.img}
                                    title={data.title}
                                    eventoccurance={data.location}
                                    date={data.date}
                                    btns={data.btns}
                                    setValue={data.setvalue}
                                />
                            );
                        })}
                    </ScrollView>
                </>
            ) : (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <EmptyNotification width={200} height={200} />
                    <Text style={styles.title}>No Notifications!</Text>
                    <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                        eiusmod tempor
                    </Text>
                </View>
            )}
        </Container>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
    subtitle: {
        fontSize: 16,
    },
    spacing: {
        padding: 5,
    },
});

export default Notifications;
