import React from 'react'
import { ScrollView, StyleSheet, Text, Image, TouchableWithoutFeedback, View } from 'react-native'
import Container from '../Abstracts/Container'
import Button from '../Abstracts/Button'

import ForwardArrowSm from '../Svgs/ForwardArrowSm'
import { FontSize } from '../Assets/Theme'
import LgEventCard from './LgEventCard'
import Explore from '../Svgs/Explore'
import Event from '../Svgs/Event'
import Add from '../Svgs/Add'
import Map from '../Svgs/Map'
import Profile from '../Svgs/Profile'

const ExploreBody = ({ navigation }) => {

    let state = [
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
        {
            img: 'https://images.unsplash.com/photo-1618325500063-14cd8117354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHQlMjBwbmd8ZW58MHx8MHx8&w=1000&q=80',
            date: 'Wed, Apr 28 •5: 30 PM',
            title: 'Jo Malone London’s Mother’s Day Presents',
            location: 'Radius Gallery • Santa Cruz, CA',
        },
    ];

    const styles = StyleSheet.create({
        row: {
            flexDirection: "row"
        },
        lgCard: {
            marginHorizontal: 10,
            elevation: 5,
            shadowColor: 'black',
        },
        inviteContainer: {
            backgroundColor: '#00F8FF3a',
            padding: 15,
            borderRadius: 10,
        },
        iniviteText: {
            color: "black",
            fontSize: FontSize.Title1,
            fontWeight: "500"
        },
        ticketText: {
            fontSize: FontSize.SubTitle1,
            marginVertical: "2%"
        },
        image: {
            width: "70%",
            height: 130,
            marginLeft: "49%",
            position: "absolute",
            marginBottom: "19%"
        },
        bottomBar: {
            width: '100%',
            paddingVertical: 5,
            justifyContent: 'space-evenly',
            position: "absolute",
            backgroundColor: "white",
            bottom: 0
        },
        addbtn: {
            top: -30,
        },
    })

    return (
        <>
            <ScrollView style={{ flexGrow: 1, marginTop: "10%", zIndex: -1, marginBottom: "15%" }} showsVerticalScrollIndicator={false}>
                <Container>
                    <View style={styles.row}>
                        <Text style={{ fontSize: FontSize.Title1, color: "black" }}>Upcoming Events</Text>
                        <Button
                            text={'See All'}
                            fontSize={FontSize.Body3}
                            TailingIcon={ForwardArrowSm}
                            TailingColor={"grey"}
                            TailingSize={9}
                            right={null}
                            TailingStyle={{ marginLeft: "23%" }}
                            onPress={() => navigation.navigate('Events')}
                        />
                    </View>
                </Container>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {state.map((data, key) => {
                            return (
                                <TouchableWithoutFeedback key={key} onPress={() => navigation.navigate('Eventdetails')}>
                                    <View style={styles.lgCard}>
                                        <LgEventCard
                                            title={data.title}
                                            img={data.img}
                                            location={data.location}
                                            bookmark={true}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </ScrollView>
                </View>
                <Container>
                    <View style={styles.inviteContainer}>
                        <Image style={styles.image} resizeMode='contain' source={require("../Images/invite.png")} />
                        <Text style={styles.iniviteText}>Invite your friends</Text>
                        <Text style={styles.ticketText}>Get $20 for ticket</Text>
                        <Button
                            text={'INVITE'}
                            width={"25%"}
                            fontSize={FontSize.SubTitle2}
                            color={'#fff'}
                            borderRadius={6}
                            backgroundColor={'#00F8FF'}
                            style={{ alignSelf: 'flex-start' }}
                        />
                    </View>
                </Container>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {state.map((data, key) => {
                            return (
                                <TouchableWithoutFeedback key={key} onPress={() => navigation.navigate('Eventdetails')}>
                                    <View style={styles.lgCard}>
                                        <LgEventCard
                                            title={data.title}
                                            img={data.img}
                                            location={data.location}
                                            bookmark={true}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </ScrollView>
                </View>
                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {state.map((data, key) => {
                            return (
                                <TouchableWithoutFeedback key={key} onPress={() => navigation.navigate('Eventdetails')}>
                                    <View style={styles.lgCard}>
                                        <LgEventCard
                                            title={data.title}
                                            img={data.img}
                                            location={data.location}
                                            bookmark={true}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                    </ScrollView>
                </View>
            </ScrollView>
            <View style={[styles.row, styles.bottomBar]}>
                <View>
                    <Button
                        width={null}
                        fontSize={15}
                        btncardname={'Explore'}
                        TextIcon={Explore}
                        TextIconSize={22}
                        color={"#5669FF"}
                        TextIconColor={"#5669FF"}
                    />
                </View>
                <View>
                    <Button
                        width={null}
                        onPress={() => navigation.navigate('Events')}
                        btncardname={'Events'}
                        fontSize={15}
                        TextIconSize={22}
                        TextIconColor={'#DADADA'}
                        TextIcon={Event}
                    />
                </View>
                <View style={styles.addbtn}>
                    <Button
                        width={null}
                        borderRadius={35}
                        backgroundColor={'#5669FF'}
                        TextIcon={Add}
                        TextIconColor={'white'}
                        paddingHorizontal={9}
                        paddingVertical={9}
                        TextIconSize={16}
                    />
                </View>
                <View>
                    <Button
                        width={null}
                        onPress={() => navigation.navigate('Map')}
                        btncardname={'Map'}
                        fontSize={15}
                        TextIcon={Map}
                        TextIconColor={'#DADADA'}
                        TextIconSize={22}
                    />
                </View>
                <View>
                    <Button
                        width={null}
                        onPress={() => navigation.navigate('Profile')}
                        btncardname={'Profile'}
                        fontSize={15}
                        TextIcon={Profile}
                        TextIconColor={'#DADADA'}
                        TextIconSize={22}
                    />
                </View>
            </View>
        </>
    )
}

export default ExploreBody
