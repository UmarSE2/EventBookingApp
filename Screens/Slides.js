import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontSize } from '../Assets/Theme';
const { width, height } = Dimensions.get('window');

const Slides = ({ slides, }) => {
    const navigation = useNavigation();

    const onDone = () => {
        navigation.navigate('Auth');
    };

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slideContainer}>
                <Image style={styles.image} source={item.image} resizeMode='contain' />
                <View style={styles.slideContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            onDone={onDone}
            showNextButton={true}
            showSkipButton={true}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.dot}
        />
    );
};

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        marginTop: '20%',
        backgroundColor: 'white',
    },
    image: {
        width: width,
        height: height * 0.55,
    },
    slideContent: {
        flex: 1,
        backgroundColor: Colors.Blue,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
        paddingTop: '10%',
    },
    title: {
        fontSize: FontSize.H5,
        color: 'white',
        marginBottom: 16,
        width: '80%',
        textAlign: 'center',
        lineHeight: 30,
    },
    text: {
        width: width * 0.8,
        alignSelf: 'center',
        color: '#94a6fe',
        textAlign: 'center',
        lineHeight: 22,
    },
    activeDot: {
        backgroundColor: 'white',
        width: 8,
        height: 8,
        marginHorizontal: 3,
    },
    dot: {
        backgroundColor: '#6f88fe',
        width: 8,
        height: 8,
        marginHorizontal: 3,
    },
});

export default Slides;
