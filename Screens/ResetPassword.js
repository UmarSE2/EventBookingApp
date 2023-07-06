import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { Colors, FontSize } from '../Assets/Theme';
import StatusBarr from '../Components/StatusBarr';
import Backward from '../Svgs/Backward';
import Container from '../Abstracts/Container';
import Button from '../Abstracts/Button';
import Forward from '../Svgs/Forward';
import InputField from '../Abstracts/InputField';
import Mail from '../Svgs/Mail';

const { width, height } = Dimensions.get('window');

const ResetPassword = () => {
    const [email, setEmail] = useState("")

    return (
        <Container>
            <StatusBarr leading={<Backward />} />
            <Text style={[styles.heading, styles.color]}>Reset Password</Text>
            <Text style={[styles.emailMsg, styles.color]}>
                Please enter your email address to request a password reset
            </Text>
            <InputField
                value={email}
                onChangeText={setEmail}
                width={"100%"}
                paddingVertical={2}
                placeholder={"abc@gmail.com"}
                fontSize={FontSize.Body2}
                borderColor={"#E4DFDF"}
                Leading_icon={Mail}
                leadingsize={FontSize.H4}
                style={{ marginTop: "8%" }}
            />
            <View style={styles.shadowContainer}>
                <Button
                    text={"SEND"}
                    width={"80%"}
                    color={"white"}
                    fontSize={FontSize.Button}
                    backgroundColor={Colors.Blue}
                    TailingIcon={Forward}
                    TailingSize={FontSize.H3}
                    paddingVertical={17}
                    letterSpacing={1}
                    borderRadius={16}
                />
            </View>
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
    emailMsg: {
        width: width * 0.6,
        marginTop: "5%",
        fontSize: FontSize.Body2,
        lineHeight: 22,
    },
    shadowContainer: {
        alignSelf: "center",
        borderRadius: FontSize.SubTitle2,
        elevation: 20,
        shadowColor: Colors.Blue,
        marginTop: "10%"
    },
})

export default ResetPassword;