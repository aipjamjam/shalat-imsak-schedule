import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, ViewStyle } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

import { color } from '../../styles'

interface Props {
    onPress: () => void,
    outStyle?: ViewStyle,
    title: string,
    iconRight?: React.ComponentProps<typeof Icon>['name'],
    itemColor?: string,
    secondary?: boolean,
    iconLeft?: React.ComponentProps<typeof Icon>['name'],
    disabled?: boolean,
    added?: boolean,
}

const Button = ({
    onPress = () => { },
    outStyle,
    title = 'button',
    iconRight,
    itemColor = '#fff',
    secondary,
    iconLeft,
    disabled,
    added,
}: Props) => {
    return (
        <TouchableHighlight underlayColor='transparent' disabled={disabled} onPress={onPress} style={[outStyle, styles.outStyle]}>
            <View style={[styles.wrapper, { backgroundColor: added ? color.secondary : disabled ? color.g400 : secondary ? color.p8 : color.primary, }]}>
                {
                    iconLeft &&
                    <Icon name={iconLeft} size={18} style={{ paddingRight: 8 }} color={itemColor} />
                }
                <Text style={{ color: itemColor, fontWeight: 'bold' }}>{title}</Text>
                {
                    iconRight &&
                    <Icon name={iconRight} size={18} style={{ paddingLeft: 8 }} color={itemColor} />
                }
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 50,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    outStyle: {
        marginVertical: 8
    }
})

export default Button