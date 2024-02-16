import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Titulo from './titulo'
import BtnImagem from './btnImagem'

function Header({url, titulo, onPress}) {
  return (
    <View style={styles.container}>
        <View style={styles.titulo}>
            <Image source={url} style={styles.img}></Image>
            <Titulo txt={titulo}></Titulo>
        </View>
        <BtnImagem onPress={onPress} url={require('../assets/sair.png')}></BtnImagem>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        marginTop: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    titulo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
  })