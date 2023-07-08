import React from 'react'
import { StatusBar, View } from 'react-native'
import ExploreHead from '../Components/ExploreHead'
import ExploreBody from '../Components/ExploreBody'

const Explore = ({ navigation, route }) => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <StatusBar
                translucent={true}
                barStyle={'light-content'}
                backgroundColor={'transparent'}
            />
            <ExploreHead navigation={navigation} route={route} />
            <ExploreBody navigation={navigation} route={route} />
        </View>
    )
}

export default Explore;