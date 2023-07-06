import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { FontSize } from '../Assets/Theme';


const StatusBarr = ({ leading, leadingClick, tailing, tailingClick, text, textStyle,
}) => {
  return (
    <View style={[styles.row, styles.container, styles.justify]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <TouchableWithoutFeedback
        style={[styles.absolute]}
        onPress={leadingClick}>
        <View style={styles.spacing}>{leading}</View>
      </TouchableWithoutFeedback>

      <View style={[styles.flex]}>
        <Text style={[styles.center, textStyle, { fontSize: FontSize.Body1 }]}>
          {text}
        </Text>
      </View>

      <TouchableWithoutFeedback
        style={[styles.absolute, styles.right, styles.spacing]}
        onPress={tailingClick}>
        <Text>{tailing}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignSelf: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
  },
  right: {
    right: 0,
  },
  spacing: {
    paddingTop: "7%",
  },
  container: {
    width: '100%',
    paddingVertical: 20
  },
  justify: {
    justifyContent: 'center',
  },
});

export default StatusBarr;
