import React, {useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Titulo from '../components/titulo'
import Subtitulo from '../components/subtitulo'
import Texto from '../components/texto'
import Input from '../components/input'
import Botao from '../components/botao'

function Login() {
  const [selecionado, setSelecionado] = useState(false)

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profilecircle.png')} style={styles.imagem}></Image>
      <Titulo txt='Conectando'></Titulo>
      <Texto txt='Continue com seus dados'></Texto>
      <Input placeholder={'CPF'}></Input>
      <Input placeholder={'Senha'}></Input>
      <CheckBox
        title='Lembre-se de mim'
        checked={selecionado}
        onPress={() => setSelecionado(!selecionado)}
        style={styles.checkbox}
        checkedColor='#3D5920'
      ></CheckBox>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imagem:{
    width: 88,
    height: 88,
  },
  checkbox:{
    backgroundColor: 'transparent',
    borderWidth: 0,
  }
})