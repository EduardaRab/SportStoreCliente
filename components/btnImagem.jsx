import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

function BtnImagem({onPress}) {
  return (
    <View>
        <TouchableOpacity
            activeOpacity={0.6} 
            onPress={onPress} 
            style={styles.btn}
        >
            <Image 
                source={require('../assets/arrow.png')}
                style={styles.imagem}>
            </Image>
        </TouchableOpacity>
    </View>
  )
}

export default BtnImagem

const styles = StyleSheet.create({
    imagem:{
        width: 40,
        height: 30,
    },
})