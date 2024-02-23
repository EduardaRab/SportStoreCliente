import React, {useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import CardGrande from '../components/cardGrande'
import Header from '../components/header'
import Titulo from '../components/titulo'
import Input from '../components/input'
import Texto from '../components/texto'
import BtnImagem from '../components/btnImagem'
import Botao from '../components/botao'

function Carrinho({navigation}) {
  const [cep, setCep] = useState(0)
  const [numero, setNumero] = useState(0)
  const [entrega, setEntrega] = useState('')
  const [pagamento, setPagamento] = useState('')
  const [url, setUrl] = useState('')
  const [produto, setProduto] = useState('')
  const [preco, setPreco] = useState()

  const pagar = () => {
    console.log(cep)
    console.log(numero)
    console.log(entrega)
    console.log(pagamento)
    alert('Comprar finalizada')
  }

  return (
    <View>
        <Header url={require('../assets/carrinho.png')} titulo='Carrinho' onPress={() => navigation.navigate('Login')}></Header>
        <View style={styles.principal}>
          <CardGrande url={url} produto={produto} preco={preco}></CardGrande>
          <Titulo txt='Endereço'></Titulo>
          <View style={styles.txt}>
            <Texto txt='Preencha as informações do endereço de entrega:'></Texto>
          </View>
          <Input placeholder={'CEP'} onChangeText={setCep} type={'numeric'} value={cep}></Input>
          <Input placeholder={'Número da casa'} onChangeText={setNumero} type={'numeric'} value={numero}></Input>
          <Titulo txt='Transpotadora'></Titulo>
          <View style={styles.alinhamento}>
              <View style={styles.btn}>
                <BtnImagem url={require('../assets/bronze.png')} onPress={() => {setEntrega('bronze')}}></BtnImagem>
                <Texto txt='Bronze'></Texto>
              </View>
              <View style={styles.btn}>
                <BtnImagem url={require('../assets/silver.png')} onPress={() => {setEntrega('silver')}}></BtnImagem>
                <Texto txt='Silver'></Texto>
              </View>
              <View style={styles.btn}>
                <BtnImagem url={require('../assets/gold.png')} onPress={() => {setEntrega('gold')}}></BtnImagem>
                <Texto txt='Gold'></Texto>
              </View>
          </View>
          <Image source={require('../assets/relacao.png')} style={styles.img}></Image>
          <Titulo txt='Forma de pagamento'></Titulo>
          <View style={styles.alinhamento}>
              <BtnImagem url={require('../assets/pix.png')} onPress={() => {setPagamento('pix')}}></BtnImagem>
              <BtnImagem url={require('../assets/cartao.png')} onPress={() => {setPagamento('cartão')}}></BtnImagem>
              <BtnImagem url={require('../assets/paypal.png')} onPress={() => {setPagamento('paypal')}}></BtnImagem>
          </View>
          <View style={styles.finalizar}>
            <Botao txt='FINALIZAR' onPress={pagar}></Botao>
          </View>
        </View>
    </View>
  )
}

export default Carrinho

const styles = StyleSheet.create({
  principal:{
      marginLeft: 10,
      marginRight: 10,
  },
  txt:{
    marginBottom: 10,
  },
  alinhamento:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  btn:{
    alignItems: 'center'
  },
  img:{
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  finalizar:{
    marginTop: 30,
  },
})