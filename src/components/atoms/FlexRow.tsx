import React from 'react'
import { View, ViewStyle } from 'react-native'

interface Props {
    children: React.ReactNode,
    center?: boolean,
    spaceBetween?: boolean,
    spaceAround?: boolean,
    flexEnd?: boolean,
    style?: ViewStyle,
}

const FlexRow = ({
    children,
    center,
    spaceBetween,
    spaceAround,
    flexEnd,
    style,
}: Props) => {
    return (
        <View
            style={[style, {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:
                    center ? 'center' :
                        spaceBetween ? 'space-between' :
                            spaceAround ? 'space-around' :
                                flexEnd ? 'flex-end' : "flex-start"
            }]}>
            {children}
        </View>
    )
}

export default FlexRow