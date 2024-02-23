import React from 'react'
import { View, StyleSheet } from 'react-native'
import Texto from './texto'
import Subtitulo from './subtitulo'
import Titulo from './titulo'


function CardInfo() {
  return (
    <View style={styles.container}>
        <View>
            <Titulo txt='Pedido 1'></Titulo>
            <Texto txt='12/01/2024'></Texto>
        </View>
        <Subtitulo txt='Status: Pedido entregue'></Subtitulo>
    </View>
  )
}

export default CardInfo

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D5EBBB',
    },
})