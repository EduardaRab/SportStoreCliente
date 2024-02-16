import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'

function BtnImagem({onPress, url, backgroundColor}) {
    const styleBtn = {
        backgroundColor,
        ...styles.imagem
    }

  return (
    <View>
        <TouchableOpacity
            activeOpacity={0.6} 
            onPress={onPress}
            style={styles.btn}
        >
            <Image 
                source={url}
                style={styleBtn}>
            </Image>
        </TouchableOpacity>
    </View>
  )
}

export default BtnImagem

const styles = StyleSheet.create({
    imagem:{
        width: 40,
        height: 40,
        borderRadius: 5,
    },
})