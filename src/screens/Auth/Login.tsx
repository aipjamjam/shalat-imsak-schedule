import React, { useState, FC } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image, Text, View } from "react-native"
import { connect } from "react-redux";

import { Button, Input } from "../../components/atoms";

import * as user from '../../store/user/actions'

import { size, style } from '../../styles'

interface dispatchProps {
    setLoading: (bool: boolean) => void
}

const Login: React.FC<dispatchProps> = props => {

    const { setLoading } = props

    const [name, setName] = useState('')

    const handlePress = async () => {
        setLoading(true)
        await AsyncStorage.setItem('user', name)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5', padding: 24, justifyContent: 'center' }}>
            <View>
                <Image source={require('../../assets/illustrations/login.jpg')} style={{ height: size.width / 1.3, resizeMode: 'contain', ...style.max_width }} />
                <Input placeholder="input nama" onChangeText={(v: string) => setName(v)} value={name} />
                <Button title="Lanjutkan" disabled={!name} iconRight={"arrow-forward"} onPress={handlePress} />
            </View>
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => ({
    setLoading: (bool: boolean) => dispatch(user.setLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)