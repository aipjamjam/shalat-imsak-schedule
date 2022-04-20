import React, { useState, useEffect } from "react"
import { View, Text } from 'react-native'
import moment from "moment"
import iMoment from 'moment-hijri'

import { FlexRow } from "../atoms"

import { color } from "../../styles"

const GetDateTime = () => {

    const date = new Date()
    const [time, setTime] = useState('')

    useEffect(() => {
        setInterval(() => {
            const cTime = new Date().toLocaleString()
            setTime(cTime)
        }, 1000)
    }, [])

    return (
        <FlexRow spaceBetween>
            <Text style={{ fontWeight: 'bold', fontSize: 36, color: color.g800 }}>{moment(time).locale('id').format('h:mm A')}</Text>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: color.g800 }}>{iMoment(date).format("iYYYY iMMMM iD")}</Text>
                <Text style={{ fontSize: 16, color: color.g800 }}>{moment(date).locale('id').format('DD MMMM YYYY')}</Text>
            </View>
        </FlexRow>
    )
}

export default GetDateTime