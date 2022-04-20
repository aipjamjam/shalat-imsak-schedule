import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { BASE_URL } from '../../services'

import * as userActions from '../../store/user/actions'

import { color } from '../../styles'

interface Props {
    saveUser: (user: string) => void
    setLoading: (bool: boolean) => void
}

const SplashScreen: React.FC<Props> = props => {

    const { saveUser, setLoading } = props

    useEffect(() => {
        loading()
    }, [])

    const loading = () => {
        AsyncStorage.getItem('user')
            .then(async (val: any) => {
                axios.defaults.baseURL = BASE_URL
                axios.interceptors.response.use(
                    (response) => {
                        return response
                    },
                    (error) => {
                        console.log({ error })
                        return Promise.reject(error)
                    }
                )
                await saveUser(val)
                // for turn of loading after login
                const time = await splashScreenTime()
                if (time !== null) {
                    setLoading(false)
                }
            })
    }

    const splashScreenTime = async () => {
        return new Promise((v) =>
            setTimeout(() => {
                v('result')
            }, 3000)
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color.p16 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: color.primary }}>{"Jadwal Shalat & Imsak"}</Text>
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => ({
    saveUser: (user: string) => dispatch(userActions.saveUser(user)),
    setLoading: (bool: boolean) => dispatch(userActions.setLoading(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)