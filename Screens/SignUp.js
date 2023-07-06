import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Container from '../Abstracts/Container'
import { Colors, FontSize } from '../Assets/Theme'
import InputField from '../Abstracts/InputField'
import SocialAuth from '../Functions/SocialAuth'
import StatusBarr from '../Components/StatusBarr'

import Mail from '../Svgs/Mail'
import Lock from '../Svgs/Lock'
import Eye from '../Svgs/Eye'
import Button from '../Abstracts/Button'
import Forward from '../Svgs/Forward'
import Backward from '../Svgs/Backward'
import Profile from '../Svgs/Profile'

const SignUp = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <Container>
            <StatusBarr leading={<Backward />} leadingClick={() => navigation.navigate("SignIn")} />
            <Text style={[styles.color, { fontSize: FontSize.H4 }]}>Sign Up</Text>
            <View style={{ marginTop: "2%" }}>
                <InputField
                    value={name}
                    setValue={setName}
                    width={"100%"}
                    paddingVertical={2}
                    placeholder={"Full name"}
                    fontSize={FontSize.Body2}
                    borderColor={"#E4DFDF"}
                    Leading_icon={Profile}
                    leadingsize={FontSize.H4}
                    style={{ marginVertical: "5%" }}
                />
                <InputField
                    value={email}
                    setValue={setEmail}
                    width={"100%"}
                    paddingVertical={2}
                    placeholder={"abc@gmail.com"}
                    fontSize={FontSize.Body2}
                    borderColor={"#E4DFDF"}
                    Leading_icon={Mail}
                    leadingsize={FontSize.H4}
                />
                <InputField
                    value={password}
                    setValue={setPassword}
                    width={"100%"}
                    paddingVertical={2}
                    placeholder={"Your Password"}
                    fontSize={FontSize.Body2}
                    borderColor={"#E4DFDF"}
                    Leading_icon={Lock}
                    leadingsize={FontSize.H4}
                    Tailing_icon={Eye}
                    tailingsize={FontSize.H4}
                    style={{ marginVertical: "5%" }}
                />
                <InputField
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    width={"100%"}
                    paddingVertical={2}
                    placeholder={"Confirm Password"}
                    fontSize={FontSize.Body2}
                    borderColor={"#E4DFDF"}
                    Leading_icon={Lock}
                    leadingsize={FontSize.H4}
                    Tailing_icon={Eye}
                    tailingsize={FontSize.H4}
                />
            </View>
            <View style={styles.shadowContainer}>
                <Button
                    text={"SIGN UP"}
                    width={"80%"}
                    color={"white"}
                    fontSize={FontSize.Button}
                    backgroundColor={Colors.Blue}
                    TailingIcon={Forward}
                    TailingSize={FontSize.H3}
                    paddingVertical={17}
                    letterSpacing={1}
                    borderRadius={16}
                    onPress={() => navigation.navigate("SignIn")}
                />
            </View>
            <Text style={[styles.center, { marginVertical: "7%", marginTop: "12%" }]}>OR</Text>
            <SocialAuth />
            <Text style={[[styles.row, styles.color, styles.center]]}>
                Already have an account?{' '}
                <Text style={{ color: Colors.Blue }} onPress={() => navigation.navigate("SignIn")}>Sign in</Text>
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "45%"
    },
    color: {
        color: "black"
    },
    row: {
        flexDirection: "row"
    },
    center: {
        alignSelf: "center"
    },
    tracker: {
        width: "17.5%",
        height: 18,
        backgroundColor: Colors.Blue,
        borderRadius: 25,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingHorizontal: 2
    },
    switchBtn: {
        width: 15,
        height: 15,
        backgroundColor: "white",
        borderRadius: 50,
    },
    shadowContainer: {
        alignSelf: "center",
        borderRadius: FontSize.SubTitle2,
        elevation: 21,
        shadowColor: Colors.Blue,
        marginTop: "10%"
    },
});


export default SignUp;