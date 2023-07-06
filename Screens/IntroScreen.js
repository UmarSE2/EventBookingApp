import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, StatusBar, TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('window');

import Slides from './Slides';
import { Colors } from '../Assets/Theme';

const slides = [
  {
    key: 's1',
    image: require('../Images/1.jpg'),
    title: 'Explore Upcoming and Nearby Events',
    text: 'In publishing and graphic design, Lorem is a placeholder text commonly',
  },
  {
    key: 's2',
    image: require('../Images/2.jpg'),
    title: 'Web Have Modern Events Calendar Feature',
    text: 'In publishing and graphic design, Lorem is a placeholder text commonly ',
  },
  {
    key: 's3',
    image: require('../Images/3.jpg'),
    title: 'To Look Up More Events or Activities Nearby By Map',
    text: 'In publishing and graphic design, Lorem is a placeholder text commonly ',
  },
];

const IntroScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      {showRealApp ? (
        ''
      ) : (
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Slides slides={slides} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: width * 0.8,
    height: height * 0.08,
    borderWidth: 2,
    borderColor: Colors.Black,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  btntxt: {
    textAlign: 'center',
    color: "white",
  },
});

export default IntroScreen;
