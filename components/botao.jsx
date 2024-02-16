import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Botao({txt, onPress}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.btn}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{txt}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        backgroundColor: '#3D5920',
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    }
})