import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View, ListRenderItem } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import * as Interface from '../../utils/Interface'

import FlexRow from './FlexRow'
import { color } from '../../styles'
import Modal from './Modal'
import { useNavigation } from '@react-navigation/native'

interface Props {
    onPress: () => void;
    value: string
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: color.p16,
        paddingHorizontal: 16
    },
    text: {
        fontWeight: 'bold',
        color: color.primary,
    }
})


const Select = ({
    onPress,
    value,
}: Props) => {

    const navigation = useNavigation()

    // const renderItem = ({ item }: { item: Interface.Cities }) => {
    //     return (
    //         <Pressable>
    //             <FlexRow spaceBetween style={styles.wrapper}>
    //                 <Text style={styles.text}>{item.name}</Text>
    //                 <Icon name='chevron-down' color={color.primary} size={20} />
    //             </FlexRow>
    //         </Pressable>
    //     )
    // }
    return (
        // <FlatList
        //     data={data}
        //     keyExtractor={(item, index) => index.toString()}
        //     renderItem={renderItem} />
        <>
            <Pressable onPress={onPress}>
                <FlexRow spaceBetween style={styles.wrapper}>
                    <Text style={styles.text}>{value}</Text>
                    <Icon name='chevron-down' color={color.primary} size={20} />
                </FlexRow>
            </Pressable>
            {/* <Modal /> */}
        </>
    )
}

export default Select