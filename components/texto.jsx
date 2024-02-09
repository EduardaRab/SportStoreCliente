import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Texto({txt}) {
  return (
    <View>
        <Text style={styles.txt}>{txt}</Text>
    </View>
  )
}

export default Texto

const styles = StyleSheet.create({
    txt:{
        fontSize: 16,
    }
})