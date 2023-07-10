import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapV from '../Components/MapView';
import MapHead from '../Components/MapHead';

const MapView = ({ navigation, route }) => {
    const refMarker = useRef();
    return (
        <View style={styles.container}>
            <MapV refMarker={refMarker} navigation={navigation} route={route} />
            <MapHead navigation={navigation} route={route} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MapView;
