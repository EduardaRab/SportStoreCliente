import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './paginas/login'
import Cadastro from './paginas/cadastro'
import Home from './paginas/home'
import Carrinho from './paginas/carrinho'
import Acompanhar from './paginas/acompanhar'

const Pilha = createStackNavigator() // instanciando a navegação

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                ></Pilha.Screen>

                <Pilha.Screen
                    name='Cadastro'
                    component={Cadastro}
                    options={{
                        headerShown: false
                    }}
                ></Pilha.Screen>

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