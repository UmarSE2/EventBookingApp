import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import BackArrow from '../Svgs/Backward';
import Button from '../Abstracts/Button';
import MenuDot from '../Svgs/MenuDot';
import Scale from '../Functions/Scale';

const btnSize = Scale(375, 22, 22);
const fontSize = Dimensions.get('window').width * 0.06;

const NotificationHead = ({ navigation }) => {
  return (
    <View style={[styles.statusbar, styles.row]}>
      <Button
        TextIcon={BackArrow}
        width={null}
        texticonsize={btnSize.Width}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.statusbartext}>Notification</Text>
      <View style={styles.spacing} />
      <MenuDot width={btnSize.Width} height={btnSize.Height} color={'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  spacing: {
    padding: 5,
  },
  statusbar: {
    marginBottom: 15,
  },
  statusbartext: {
    flex: 1,
    fontSize: fontSize,
    paddingHorizontal: 10,
    color: '#000',
  },
});

export default NotificationHead;
