import React, { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux'

import { Button, FlexRow } from '../../components/atoms'
import { GetDateTime, TableView } from '../../components/organisms'

import * as userActions from '../../store/user/actions'
import { Cities, Scheduler } from '../../store/Interface'

import { color, paddingTopStatusBar, size, style } from '../../styles'

interface Props {
    setLoading: (bool: boolean) => void;
    user: string;
    cities: Array<Cities>;
    loadingCities: boolean;
    scheduler: Array<Scheduler>;
    loadingScheduler: boolean;
    getCities: () => void;
    getScheduler: (payload: any) => void;
}

const Home: FC<Props> = props => {

    const {
        setLoading,
        user,
        cities,
        loadingCities,
        scheduler,
        loadingScheduler,
        getCities,
        getScheduler,
    } = props

    useEffect(() => {
        getDataCities()
    }, [])

    const getDataCities = () => {
        getCities()
    }

    const logout = () => {
        AsyncStorage.clear()
        setLoading(true)
    }

    return (
        <View style={{ flex: 1 }}>
            <FlexRow spaceBetween style={{ backgroundColor: color.primary, height: size.width / 1.6, padding: 24, paddingTop: 24 + paddingTopStatusBar, paddingBottom: 44 }}>
                <View>
                    <Text style={{ color: '#fff', fontSize: 24 }}>Assalamualaikum</Text>
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', top: -4 }}>{user} :)</Text>
                </View>
                <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: color.g300 }} />
            </FlexRow>
            <View style={style.body}>
                <GetDateTime />
                <TableView />
                <Button title='Keluar' onPress={logout} />
            </View>
        </View>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state
    return {
        user: user.user,
        cities: user.cities,
        loadingCities: user.loadingCities,
        scheduler: user.scheduler,
        loadingScheduler: user.loadingScheduler,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    setLoading: (bool: boolean) => dispatch(userActions.setLoading(bool)),
    getCities: () => dispatch(userActions.getCities()),
    getScheduler: (payload: any) => dispatch(userActions.getScheduler(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)