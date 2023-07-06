import { Dimensions } from 'react-native'

const Scale = (screen_width, width, height) => {
    const SH = Dimensions.get('window').height
    const SW = Dimensions.get('window').width

    const Card_Width = SW * (width / screen_width)
    const Card_Height = Card_Width * (height / width)

    return {
        Height: Card_Height,
        Width: Card_Width
    }
}

export default Scale;