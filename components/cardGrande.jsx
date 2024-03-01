import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import Subtitulo from './subtitulo'
import Titulo from './titulo'

function CardGrande({url, produto, preco}) {
  return (
    <View style={styles.container}>
        <Image source={url} style={styles.img}></Image>
        <View>
            <Titulo txt={produto}></Titulo>
            <Subtitulo txt={preco}></Subtitulo>
        </View>
    </View>
  )
}

export default CardGrande

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: '#3D5920',
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    img:{
        marginRight: 20,
    },
})