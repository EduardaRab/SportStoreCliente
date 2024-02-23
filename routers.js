import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import Home from './paginas/home';
import Carrinho from './paginas/carrinho';
import Acompanhar from './paginas/acompanhar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    paddingVertical: 1,
                    borderTopColor: 'transparent',
                },
                tabBarActiveTintColor: '#3D5920',
                tabBarInactiveTintColor: 'black',
            }}
        >
            <Tab.Screen
                name='HOME'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size }) => (
                        <Ionicons name='home' size={size} color={'black'}></Ionicons>
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='CARRINHO'
                component={Carrinho}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size }) => (
                        <FontAwesome5
                            name='shopping-bag'
                            size={size}
                            color={'black'}
                        ></FontAwesome5>
                    ),
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='ACOMPANHAR'
                component={Acompanhar}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size }) => (
                        <AntDesign name='appstore1' size={size} color={'black'}></AntDesign>
                    ),
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    );
}

function MainStack() {
    return (
        <Stack.Navigator>
            {/* Criando a página do carrinho, apagar essa stack após o fim */}
            <Stack.Screen
                name='Acompanhar'
                component={Acompanhar}
                options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerShown: false }}
            ></Stack.Screen>

            <Stack.Screen
                name='Tabs'
                component={Tabs}
                options={{ headerShown: false }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default function Routers() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}
