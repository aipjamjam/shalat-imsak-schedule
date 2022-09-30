import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import FlexRow from './FlexRow'

interface Props {
    title?: string,
    children: React.ReactNode,
}

const Modal = ({
    title,
    children,
}: Props) => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1 }}>
            <Pressable onPress={() => navigation.goBack()} style={{ width: '100%', height: '30%' }} />
            <View style={{ width: '100%', height: '70%', backgroundColor: '#fff', alignSelf: 'flex-end', padding: 24, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}>
                {
                    title &&
                    <FlexRow style={{ paddingBottom: 16 }}>
                        <Icon name='close-outline' size={24} style={{ paddingRight: 4 }} onPress={() => navigation.goBack()} />
                        <Text style={{ fontSize: 18 }}>{title}</Text>
                    </FlexRow>
                }
                {
                    children
                }
            </View>
        </View>
    )
}

export default Modal