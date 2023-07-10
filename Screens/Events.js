import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    StatusBar,
    TouchableWithoutFeedback,
    Touchable,
} from 'react-native';
import Container from '../Abstracts/Container';
import EventStatus from '../Components/EventStatus';
import EventCard from '../Components/EventCard';
import EmptyEvents from '../Components/EmptyEvent';

const Event = ({ navigation, route }) => {
    let state = [
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Muhammad Umar',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Gul e Arzu',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Mashaim Ali',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Khan Nasir',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Mashaim Ali',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Shazil Usman',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Elaf Zubair',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
    ];

    return (
        <>
            <View style={{ height: StatusBar.currentHeight }} />
            <StatusBar
                translucent={true}
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
            />
            <Container>
                <EventStatus navigation={navigation} route={route} />
                {state.length !== 0 ? (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {state.map((data, key) => {
                            return (
                                <TouchableWithoutFeedback
                                    key={key}
                                    onPress={() => navigation.navigate('Eventdetails')}>
                                    <View>
                                        <EventCard
                                            date={data.date}
                                            title={data.title}
                                            location={data.location}
                                            img={data.img}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })}
                    </ScrollView>
                ) : (
                    <EmptyEvents />
                )}
            </Container>
        </>
    );
};

export default Event;
