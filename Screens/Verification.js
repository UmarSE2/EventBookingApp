import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, Alert, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';
import { Colors, FontSize } from '../Assets/Theme';
import StatusBarr from '../Components/StatusBarr';
import Backward from '../Svgs/Backward';
import Container from '../Abstracts/Container';
import Button from '../Abstracts/Button';
import Forward from '../Svgs/Forward';

const { width, height } = Dimensions.get('window');

const Verification = ({ navigation }) => {
    // const navigation = useNavigation();
    const route = useRoute();
    // const { verificationId } = route.params;
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    const confirmOTP = async () => {
        try {
            const phoneAuthProvider = firebase.auth.PhoneAuthProvider;
            const authCredential = phoneAuthProvider.credential(
                // verificationId,
                otp.join('')
            );
            const userCredential = await firebase.auth().signInWithCredential(authCredential);
            navigation.navigate('SignIn', { user: userCredential.user });
        } catch (err) {
            console.log(err);
            Alert.alert("Wrong Code")
        }
    };

    return (
        <Container>
            <StatusBarr leading={<Backward />} />
            <Text style={[styles.heading, styles.color]}>Verification</Text>
            <Text style={[styles.otpmsg, styles.color]}>
                We've send you the verification code on +1 2620 0323 7631
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {inputRefs.map((ref, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={otp[index]}
                        onChangeText={(value) => handleInputChange(index, value)}
                        maxLength={1}
                        ref={ref}
                        keyboardType="numeric"
                    />
                ))}
            </View>
            <View style={styles.shadowContainer}>
                <Button
                    text={"SIGN IN"}
                    width={"80%"}
                    color={"white"}
                    fontSize={FontSize.Button}
                    backgroundColor={Colors.Blue}
                    TailingIcon={Forward}
                    TailingSize={FontSize.H3}
                    paddingVertical={17}
                    letterSpacing={1}
                    borderRadius={16}
                    onPress={confirmOTP}
                />
            </View>
            <Text style={styles.footer}>Re-send code in</Text>
        </Container>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: FontSize.H4,
        fontWeight: "500"
    },
    color: {
        color: "black"
    },
    otpmsg: {
        width: width * 0.6,
        marginTop: "5%",
        fontSize: FontSize.Body2,
        lineHeight: 22,
    },
    input: {
        width: width * 0.13,
        height: height * 0.07,
        borderWidth: 1,
        borderColor: '#cccccc',
        alignSelf: "center",
        marginTop: "10%",
        fontSize: FontSize.H4,
        textAlign: "center",
        borderRadius: 12,
    },
    footer: {
        marginTop: "8%",
        textAlign: "center",
    },
    shadowContainer: {
        alignSelf: "center",
        borderRadius: FontSize.SubTitle2,
        elevation: 20,
        shadowColor: Colors.Blue,
        marginTop: "10%"
    },
})

export default Verification;