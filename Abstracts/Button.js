import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

const Button = ({ style, onPress, text, paddingLeft, btncardname, color,
    width, height, elevation, opacity, backgroundColor, justifyContent,
    borderColor, borderWidth, borderRadius, paddingHorizontal,
    LeadingColor, LeadingSize, LeadingIcon, letterSpacing,
    TextIcon, TextIconSize, TextIconColor, paddingVertical,
    TailingIcon, TailingSize, TailingColor, fontSize, fontWeight
}) => {
    const styles = StyleSheet.create({
        row: {
            flexDirection: "row",
        },
        center: {
            alignSelf: "center",
        },
        left: {
            alignSelf: "flex-end"
        },
        btn: {
            width: width !== undefined ? width : "90%",
            height: height ?? null,
            elevation: elevation ?? 0,
            opacity: opacity ?? 1,
            paddingVertical:
                paddingVertical !== undefined
                    ? paddingVertical
                    : text
                        ? width
                            ? 10
                            : 5
                        : 2,
            paddingHorizontal:
                paddingHorizontal !== undefined ? paddingHorizontal : text ? 12 : 2,
            justifyContent: justifyContent ?? 'space-evenly',
            borderRadius: borderRadius !== undefined ? borderRadius : 10,
            borderWidth: borderWidth !== undefined ? borderWidth : 0,
            backgroundColor: backgroundColor !== undefined ? backgroundColor : 'none',
            borderColor: borderColor !== undefined ? borderColor : 'none',
        },
        leading: {
            position: "absolute",
            left: 13
        },
        tailing: {
            position: 'absolute',
            right: 13,
        },
        texticon: {
            // paddingRight: text ? 3 : 0,
        },
        text: {
            color: color ? color : null,
            fontSize: fontSize ? fontSize : 20,
            paddingLeft: paddingLeft ? paddingLeft : 0,
            fontWeight: fontWeight ? fontWeight : null,
            letterSpacing: letterSpacing ? letterSpacing : 0
        }
    })
    return (
        <>
            <TouchableOpacity style={[styles.center, style]} onPress={onPress}>
                <View style={[styles.btn, styles.row]}>
                    {LeadingIcon !== undefined
                        ? (
                            <View style={[styles.center, styles.leading]}>
                                <LeadingIcon
                                    width={LeadingSize}
                                    height={LeadingSize}
                                    color={LeadingColor}
                                />
                            </View>
                        )
                        : null}
                    {TextIcon !== undefined
                        ? (
                            <View style={[styles.btn, styles.texticon]}>
                                <TextIcon
                                    width={TextIconSize}
                                    height={TextIconSize}
                                    color={TextIconColor} />
                            </View>
                        )
                        : null}
                    {text ? (
                        <Text style={[styles.center, styles.text]}>{text}</Text>
                    )
                        : null
                    }
                    {TailingIcon !== undefined
                        ? (
                            <View style={[styles.center, styles.tailing]}>
                                <TailingIcon
                                    width={TailingSize}
                                    height={TailingSize}
                                    color={TailingColor} />
                            </View>
                        )
                        : null
                    }
                </View>
                {btncardname
                    ? (
                        <Text style={[styles.center, styles.text]}>{btncardname}</Text>
                    )
                    : undefined
                }
            </TouchableOpacity>
        </>
    )
}

export default Button
