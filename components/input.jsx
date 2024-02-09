import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

function Input(props) {
  return (
    <View>
        <TextInput
            placeholder={props.placeholder}
            inputMode={props.type}
            onChangeText={props.onChangeText}
            value={props.value}
            style={styles.caixa}
            secureTextEntry={props.secureTextEntry}
        ></TextInput>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    caixa:{
        width:350,
        borderRadius: 7,
        padding:8,
        fontSize:15,
        borderWidth: 1,
        borderColor: '#0B3128',
        backgroundColor: 'white',
        marginBottom: 10,
    },  
});