import { StackCardInterpolatedStyle, StackCardInterpolationProps } from '@react-navigation/stack'
import { Dimensions, StyleSheet, Platform, StatusBar, Animated } from 'react-native'
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

export const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
    const progress = Animated.add(
        current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
        next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            })
            : 0
    );

    return {
        cardStyle: {
            transform: [
                {
                    translateX: Animated.multiply(
                        progress.interpolate({
                            inputRange: [0, 1, 2],
                            outputRange: [
                                screen.width, // Focused, but offscreen in the beginning
                                0, // Fully focused
                                screen.width * -0.3, // Fully unfocused
                            ],
                            extrapolate: 'clamp',
                        }),
                        inverted
                    ),
                },
            ],
        },
    };
};

export function forSlideHorizontal({
    current,
    next,
    inverted,
    layouts: { screen }
}: StackCardInterpolationProps): StackCardInterpolatedStyle {
    const translateFocused = Animated.multiply(
        current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [screen.width, 0],
            extrapolate: "clamp"
        }),
        inverted
    );

    const overlayOpacity = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.45],
        extrapolate: "clamp"
    });

    const shadowOpacity = current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.3],
        extrapolate: "clamp"
    });

    return {
        cardStyle: {
            transform: [
                // Translation for the animation of the current card
                { translateY: translateFocused },
                // Translation for the animation of the card in back
                { translateY: 0 }
            ]
        },
        overlayStyle: { opacity: overlayOpacity },
        shadowStyle: { shadowOpacity }
    };
}