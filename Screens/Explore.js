import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExploreHead from '../Components/ExploreHead'
import ExploreBody from '../Components/ExploreBody'

const Explore = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ExploreHead />
            <ExploreBody />
        </View>
    )
}

const styles = StyleSheet.create({})

export default Explore;