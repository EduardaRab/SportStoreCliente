import React, {useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Titulo from '../components/titulo'
import Subtitulo from '../components/subtitulo'
import Input from '../components/input'
import Botao from '../components/botao'
import BtnImagem from '../components/btnImagem'

function Cadastro({navigation}) {
  // variaveis do usuario que serão enviados para a api
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")

  // função para cadastrar um novo usuário
  const cadastrar = () => { 
    console.log(nome)
    console.log(cpf)
    console.log(senha)
  }

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <BtnImagem onPress={() => navigation.navigate('Login')}></BtnImagem>
        <Titulo txt='Sport Store'></Titulo>
      </View>
      <View style={styles.form}>
        <Subtitulo txt='Preencha seus dados'></Subtitulo>
        <Input placeholder={'Nome completo'} onChangeText={setNome} type={"text"}></Input>
        <Input placeholder={'CPF'} onChangeText={setCpf} type={"numeric"}></Input>
        <Input placeholder={'Senha'} onChangeText={setSenha} secureTextEntry={true} type={"text"}></Input>
      </View>
      <Botao txt='CRIAR' onPress={cadastrar}></Botao>
      <Image
        source={require('../assets/rectangle.png')}
        style={styles.imagem}
      ></Image>
    </View>
  )
}

export default Cadastro

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D5EBBB',
  },

  titulo:{
    marginTop: 45,
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row'
  },

  form:{
    alignItems: 'center',
    paddingTop: 50,
  },

  imagem:{
    marginTop: 100,
    width: 420,
    height: 375,
  },
})