import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Auth/Login";

const Stack = createStackNavigator()

const AuthNav = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthNav