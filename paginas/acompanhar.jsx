import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../components/header'
import CardInfo from '../components/cardInfo'

function Acompanhar() {
  return (
    <View>
        <Header url={require('../assets/pedido.png')} titulo='Pedidos realizados'></Header>
        <CardInfo></CardInfo>
    </View>
  )
}

export default Acompanhar