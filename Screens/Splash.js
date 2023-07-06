import { StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import Container from '../Abstracts/Container'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("IntroScreen")
        }, 2000)
    }, [])

    return (
        <Container style={{ flex: 1 }}>
            <Image source={require("../Images/splash.png")} style={styles.image} resizeMode='contain' />
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "75%",
        alignSelf: "center",
        height: "100%",
    }
})

export default Splash