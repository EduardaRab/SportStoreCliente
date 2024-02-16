import React, {useState} from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Titulo from '../components/titulo'
import Texto from '../components/texto'
import Input from '../components/input'
import Botao from '../components/botao'

function Login({navigation}) {
  const [selecionado, setSelecionado] = useState(false)
  const [cpf, setCpf] = useState(0)
  const [senha, setSenha] = useState('')

  const entrar = () => {
    console.log(cpf)
    console.log(senha)
    if (selecionado){
      console.log('Selecionado')
    }
    else{
      console.log('Não selecionado')
    }
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/profilecircle.png')} style={styles.imagem}></Image>
      <Titulo txt='Conectando'></Titulo>
      <Texto txt='Continue com seus dados'></Texto>
      <View style={styles.inputs}>
        <Input placeholder={'CPF'} onChangeText={setCpf} type={'numeric'} value={cpf}></Input>
        <Input placeholder={'Senha'} onChangeText={setSenha} value={senha} type={'text'} secureTextEntry={true}></Input>
      </View>
      <Botao txt='ENTRAR' onPress={entrar}></Botao>
      <CheckBox
        title='Lembre-se de mim'
        checked={selecionado}
        onPress={() => setSelecionado(!selecionado)}
        containerStyle={styles.checkboxContainer}
        checkedColor='#3D5920'
      ></CheckBox>
      <Texto txt='______________________  Novo?  ______________________'></Texto>
      <View style={styles.btn}>
        <Botao txt='CRIAR CONTA' onPress={() => navigation.navigate('Cadastro')}></Botao>
      </View>
      <Text style={styles.txt}>Ainda não possui uma conta?</Text>
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
  inputs:{
    marginTop: 25,
  },
  btn:{
    marginTop: 20,
    marginBottom: 10,
  },
  checkboxContainer:{
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 20,
  },
  txt:{
    fontSize: 16,
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 15,
  }
})