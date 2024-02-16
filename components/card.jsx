import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Texto from './texto'
import Subtitulo from './subtitulo'
import BtnImagem from './btnImagem'

function Card({titulo, url, preco, onPress}) {
  return (
    <View style={styles.container}>
        <Subtitulo txt={titulo}></Subtitulo>
        <Image source={url} style={styles.img}></Image>
        <View style={styles.linha}>
            <Texto txt={preco}></Texto>
            <BtnImagem onPress={onPress} url={require('../assets/sacola.png')} backgroundColor='#3D5920'></BtnImagem>
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        width: 180,
        padding: 15,
        borderRadius: 10,
        borderColor: '#3D5920',
        borderWidth: 2,
    },
    img:{
        alignSelf: 'center',
    },
    linha:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
})