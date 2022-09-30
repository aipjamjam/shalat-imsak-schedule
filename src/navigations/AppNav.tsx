import React from "react";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { SelectScreen } from "../components/molecules";
import { RootStackParamList } from "../utils/Types";
import { forSlide, forSlideHorizontal } from "../styles";

const Stack = createStackNavigator<RootStackParamList>()

const AppNav = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen
                name="ListCities"
                component={SelectScreen}
                options={{
                    presentation: 'transparentModal',
                    gestureDirection: 'vertical',
                    cardOverlayEnabled: true,
                    // cardStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
                    cardStyleInterpolator: forSlideHorizontal,
                    headerShown: false,
                    // headerMode: '',
                    cardStyle: {
                        backgroundColor: "transparent",
                        opacity: 1
                    }
                }} />
        </Stack.Navigator>
    )
}

export default AppNav