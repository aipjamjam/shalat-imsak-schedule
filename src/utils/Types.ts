import { StackNavigationProp } from "@react-navigation/stack";

enum Stacks {
    home = 'Home',
    listCities = 'ListCities',
}

export type RootStackParamList = {
    Home: undefined;
    ListCities: undefined;
}

export type DefaultNavigationProps<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;