import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'
import Home from './paginas/home'
import Carrinho from './paginas/carrinho'
import Acompanhar from './paginas/acompanhar'

const Pilha = createStackNavigator() // instanciando a navegação
const Tab = createBottomTabNavigator()

function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: 'lightblue',
                    paddingVertical: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen
                name='HOME'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarStyle: {display: 'none'},
                    tabBarIcon: ({size}) => (
                        <Ionics name
                    )
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                {/* <Pilha.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                ></Pilha.Screen> */}

                {/* <Pilha.Screen
                    name='Cadastro'
                    component={Cadastro}
                    options={{
                        headerShown: false
                    }}
                ></Pilha.Screen> */}

                <Pilha.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                ></Pilha.Screen>

                <Pilha.Screen
                    name='Carrinho'
                    component={Carrinho}
                    options={{
                        headerShown: false
                    }}
                ></Pilha.Screen>

                <Pilha.Screen
                    name='Acompanhar'
                    component={Acompanhar}
                    options={{
                        headerShown: false
                    }}
                ></Pilha.Screen>
            </Pilha.Navigator>
        </NavigationContainer>
    )
}