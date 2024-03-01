import React from 'react'
import { View, StyleSheet } from 'react-native'
import Texto from './texto'
import Subtitulo from './subtitulo'
import Titulo from './titulo'


function CardInfo({pedido, data, status}) {
  return (
    <View style={styles.container}>
        <View style={styles.info}>
            <Titulo txt={pedido}></Titulo>
            <Texto txt={data}></Texto>
        </View>
        <Subtitulo txt={status}></Subtitulo>
    </View>
  )
}

export default CardInfo

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D5EBBB',
        width: '90%',
        alignSelf: 'center',
        marginTop: '2%',
        padding: '2%',
        borderRadius: 8,
    },
    info:{
      marginBottom: '4%',
    }
})