import React from 'react'
import { StyleSheet, View, Dimensions, ScrollView  } from 'react-native'
import Header from '../components/header'
import Card from '../components/card'

function Home({navigation}) {
  const produtos = [{}, {}, {}, {}];

  const larguraTela = Dimensions.get('window').width;
  const tamanhoCard = larguraTela / 2;

  return (
    <View style={styles.container}>
      <Header url={require('../assets/home.png')} titulo='Home' onPress={() => navigation.navigate('Login')} />
      <ScrollView>
        <View style={styles.lista}>
          {produtos.map((produto, index) => (
            <View key={index} style={[styles.cardContainer, { width: tamanhoCard }]}>
              <Card titulo={produto.titulo} url={produto.url} preco={produto.preco} />
              {(index + 1) % 2 === 0 || index === produtos.length - 1 ? null : <View style={{ width: tamanhoCard }} />}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lista: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  cardContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
})