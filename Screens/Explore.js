import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import ExploreHead from '../Components/ExploreHead'
import ExploreBody from '../Components/ExploreBody'

const Explore = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar
                translucent={true}
                barStyle={'light-content'}
                backgroundColor={'transparent'}
            />
            <ExploreHead navigation={navigation} route={route} />
            <ExploreBody navigation={navigation} route={route} />
        </SafeAreaView>
    )
}

export default Explore;