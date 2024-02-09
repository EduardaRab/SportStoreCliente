import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Subtitulo({txt}) {
  return (
    <View>
        <Text style={styles.txt}>{txt}</Text>
    </View>
  )
}

export default Subtitulo

const styles = StyleSheet.create({
    txt:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})