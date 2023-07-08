import { Dimensions } from "react-native"

export const Colors = {
    Red: "#F0635A",
    Orange: "#39B54A",
    Green: "#F0635A",
    DarkCyan: "#46CDFB",
    Purple: "#F0635A",
    Yellow: "#FDC400",
    Black: "#2d2d3a",
    Grey: "#E6E6E6",
    Blue: "#486afe"
}

export const FontSize = {
    H1: Dimensions.get('screen').width * 0.12, // 50 ok
    H2: Dimensions.get('screen').width * 0.085, // 35 ok
    H3: Dimensions.get('screen').width * 0.07, // 30 ok
    H4: Dimensions.get('screen').width * 0.057, // 24 ok
    H5: Dimensions.get('screen').width * 0.054, // 22 ok
    H6: Dimensions.get('screen').width * 0.051, // 20 ok
    H7: Dimensions.get('screen').width * 0.049, // 19 ok
    Title1: Dimensions.get('screen').width * 0.043, // 18 ok
    Title2: Dimensions.get('screen').width * 0.039, // 16 ok
    Title3: Dimensions.get('screen').width * 0.038, // 15 ok
    Body1: Dimensions.get('screen').width * 0.039, // 16 ok
    Body2: Dimensions.get('screen').width * 0.038, // 15 ok
    Body3: Dimensions.get('screen').width * 0.034, // 14 ok
    Button: Dimensions.get('screen').width * 0.039, // 16 ok
    SubTitle1: Dimensions.get('screen').width * 0.032, // 13
    SubTitle2: Dimensions.get('screen').width * 0.030, // 12 ok
}