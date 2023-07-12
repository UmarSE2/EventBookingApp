import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Animated, Alert } from 'react-native'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Functions/Firebase";

import Container from '../Abstracts/Container'
import { Colors, FontSize } from '../Assets/Theme'
import InputField from '../Abstracts/InputField'
import Mail from '../Svgs/Mail'
import Lock from '../Svgs/Lock'
import Eye from '../Svgs/Eye'
import Button from '../Abstracts/Button'
import Forward from '../Svgs/Forward'
import OpenEye from '../Svgs/OpenEye'
import SocialAuth from '../Functions/SocialAuth'
import StatusBarr from '../Components/StatusBarr'

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hidePassword, setHidePassword] = useState(true);
    const [isEnabled, setIsEnabled] = useState(false);

    const onHandleLogin = async () => {
        if (email === '' || password === '') {
            Alert.alert('Empty Error', 'Input Fields cannot be empty');
        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigation.navigate('MyDrawer');
            } catch (error) {
                Alert.alert('Login error', error.message);
            }
        }
    };

    const managePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const switchTranslateX = useRef(new Animated.Value(0)).current;

    const handleSwitchPress = () => {
        const toValue = isEnabled ? 0 : 15;
        Animated.timing(switchTranslateX, {
            toValue,
            duration: 200,
            useNativeDriver: false,
        }).start();
        toggleSwitch();
    };

    const switchTrackerColor = isEnabled ? Colors.Blue : "grey";

    return (
        <Container>
            <StatusBarr />
            <Image source={require("../Images/logo.png")}
                resizeMode='contain' style={[styles.image, styles.center]} />
            <Text style={[styles.color, { fontSize: FontSize.H4, marginTop: "-8%" }]}>Sign in</Text>
            <View style={{ marginTop: "5%" }}>
                <InputField
                    value={email}
                    setValue={(event) => { setEmail(event) }}
                    width={"100%"}
                    paddingVertical={2}
                    placeholder={"abc@gmail.com"}
                    fontSize={FontSize.Body2}
                    borderColor={"#E4DFDF"}
                    Leading_icon={Mail}
                    leadingsize={FontSize.H4}
                    autoCapitalize='none'
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
                    Tailing_icon={hidePassword ? Eye : OpenEye}
                    tailingcolor={'black'}
                    tailingsize={FontSize.H4}
                    style={{ marginVertical: "5%" }}
                    secureTextEntry={hidePassword}
                    TailingButton={Button}
                    onTailingPress={() => managePasswordVisibility()}
                />
            </View>
            <View style={[styles.row, { justifyContent: "space-between" }]}>
                <View style={[styles.row]}>
                    <TouchableWithoutFeedback onPress={handleSwitchPress}>
                        <View style={[styles.tracker, { backgroundColor: switchTrackerColor }]}>
                            <Animated.View style={[styles.switchBtn,
                            { transform: [{ translateX: switchTranslateX }] }]} />
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={[styles.color, { marginLeft: "8%" }]}>Remember Me</Text>
                </View>
                <TouchableWithoutFeedback>
                    <Text style={styles.color} onPress={() => navigation.navigate("ResetPassword")}>Forget Password?</Text>
                </TouchableWithoutFeedback>
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
                    onPress={onHandleLogin}
                />
            </View>
            <Text style={[styles.center, { marginVertical: "5%" }]}>OR</Text>
            <SocialAuth />
            <Text style={[[styles.row, styles.color, styles.center]]}>
                Don't have an account?{' '}
                <Text style={{ color: Colors.Blue }} onPress={() => navigation.navigate("SignUp")}>Sign up</Text>
            </Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "45%",
        marginTop: "-20%"
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
        elevation: 23,
        shadowColor: Colors.Blue,
        marginTop: "10%"
    },
});


export default SignIn;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

// const App = () => {
//     const [hidePassword, setHidePassword] = useState(true);
//     const [userPassword, setUserPassword] = useState('');

//     const managePasswordVisibility = () => {
//         setHidePassword(!hidePassword);
//     };

//     return (
//         <View style={[styles.container, { marginTop: 108 }]}>
//             <TextInput
//                 style={styles.inputFlex}
//                 value={userPassword}
//                 secureTextEntry={hidePassword}
//                 autoCompleteType="password"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 returnKeyType="send"
//                 onChangeText={(UserPassword) => setUserPassword(UserPassword)}
//             />
//             <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={styles.visibilityBtn}
//                 onPress={managePasswordVisibility}
//             >
//                 <Image
//                     source={
//                         hidePassword
//                             ? require('../Images/1.jpg')
//                             : require('../Images/2.jpg')
//                     }
//                     style={styles.btnImage}
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // flexDirection: 'row',
//         // flexWrap: 'nowrap',
//     },
//     inputFlex: {
//         // alignSelf: 'stretch',
//         width: '80%',
//         padding: 0,
//         backgroundColor: '#ddd',
//         borderWidth: 2
//     },
//     visibilityBtn: {
//         position: 'absolute',
//         // right: 9,
//         height: 5,
//         width: 15,
//         padding: 0,
//         marginTop: 121,
//     },
// });

// export default App;
