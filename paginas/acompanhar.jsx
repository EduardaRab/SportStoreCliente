import React from 'react'
import { View } from 'react-native'
import Header from '../components/header'
import CardInfo from '../components/cardInfo'

function Acompanhar({navigation}) {
  return (
    <View>
        <Header url={require('../assets/pedido.png')} titulo='Pedidos realizados' onPress={() => navigation.navigate('Login')}></Header>
        <CardInfo></CardInfo>
    </View>
  )
}

export default Acompanhar