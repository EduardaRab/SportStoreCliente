import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Titulo({txt}) {
  return (
    <View>
        <Text style={styles.txt}>{txt}</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
    txt:{
        fontSize: 24,
        fontWeight: 'bold',
    }
})