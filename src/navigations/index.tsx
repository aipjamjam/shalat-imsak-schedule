import React, { FC, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

import AuthNav from "./AuthNav";
import AppNav from "./AppNav";

import * as userActions from '../store/user/actions'

import SplashScreen from "../screens/Auth/SplashScreen";

const Stack = createStackNavigator()

interface Props {
    user: string;
    loading: boolean;
    setLoading: (bool: boolean) => void
}

const AppContainer: FC<Props> = props => {
    const {
        user,
        loading,
        setLoading,
    } = props

    useEffect(() => {
        console.disableYellowBox = true
        const load = async () => {
            const time = await splashScreenTime()
            if (time !== null) {
                setLoading(false)
            }
        }
        load()
    }, [])

    const splashScreenTime = async () => {
        return new Promise((v) =>
            setTimeout(() => {
                v('result')
            }, 3000)
        )
    }

    if (loading) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Midleware" component={SplashScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    user ? <Stack.Screen name="Midleware" component={AppNav} options={{ headerShown: false }} />
                        : <Stack.Screen name="Midleware" component={AuthNav} options={{ headerShown: false }} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state
    return {
        user: user.user,
        loading: user.loading,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    setLoading: (bool: boolean) => dispatch(userActions.setLoading(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)