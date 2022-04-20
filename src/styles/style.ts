import { Dimensions, StyleSheet, Platform, StatusBar } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { color } from './colors'

export const { width, height } = Dimensions.get('window')

export const paddingTopStatusBar = Platform.OS == 'ios' ? isIphoneX() ? 54 : 18 : 18

export const style = StyleSheet.create({
    max_width: {
        width: "100%",
    },
    padding_status_bar: {
        paddingTop: Platform.OS == 'ios' ? isIphoneX() ? 54 : 18 : 18
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: color.g800,
    },
    body: {
        flex: 1,
        top: -20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
    },
})