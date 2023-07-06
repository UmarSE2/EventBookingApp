import React from 'react';
import { StyleSheet, View } from 'react-native';
import Scale from '../Functions/Scale';

const Container = ({ style, paddingHorizontal, paddingVertical, children }) => {
    const paddingsize = Scale(375, 20, 20);
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: paddingHorizontal ?? paddingsize.Width,
            // paddingVertical: paddingVertical ?? 10,
            backgroundColor: "white"
        },
    });
    return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;