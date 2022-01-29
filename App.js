import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Header from './componentes/Header.js'
import Foto from './assets/foto.jpeg';
import Icon from 'react-native-vector-icons/Feather'
import Card from './componentes/Card/Index';

//Gerador de Numeros Aleatorios
/*
export default function App() {

  const [numero, setNumero] = useState(0)

  function handleNumero () {
    const novo_numero = Math.floor(Math.random() * 10) 
    setNumero(novo_numero)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
       <Text style={styles.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={styles.botao}>
          <Text>Gerar Número</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight:'bold',
  },
  botao: {
    backgroundColor: '#ffffff',
    width:'100%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  }
});
*/

const App = () => {
  
  function handleRedeSocial( rede_social ) {
    switch(rede_social) {
      case 'linkedin' :
        Alert.alert('Meu Linkedin', 'https://linkedin.com/in/emanoel-silva14')
      break
      case 'instagram' :
        Alert.alert('Meu instagram', 'https://instagram.com/emanoelpara/')
      break
      case 'github' :
        Alert.alert('Meu github', 'https://github.com/EmanoelSiilva')
      break

    }
  }

  return(
    
      <ScrollView style={style.page}>
          <View style={style.container_cabecalho}>
            <Image source={Foto} style={style.foto}/>
            <Text style={style.nome}>Emanoel Messias</Text>
            <Text style={style.funcao}>Desenvolvedor Mobile</Text>
            <View style={style.rede_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name="github" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
                <Icon name="linkedin" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
                <Icon name="instagram" size={30}/>
              </TouchableOpacity>
            </View>
          </View>

        <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>CURSANDO O 3° ANO DO CURSO TÉCNICO DE INFORMÁTICA P/ INTERNET - IFAL</Text>
        </Card>
        <Card titulo="Experiências Profissionais">
          <Text style={style.card_content_text}>MEDIADOR IFAL</Text>
        </Card>
      </ScrollView>
  )
}

const style = StyleSheet.create({

  page:{
    backgroundColor: '#e7e7e7',
    flex:1,
  },
  container_cabecalho:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
  },
  foto:{
    width:250,
    height:250,
    borderRadius:125
  },
  nome:{
    fontSize: 26,
    fontWeight:'bold',
    marginTop: 10,
  },
  funcao:{
    color:'#939393',
    marginBottom: 10
  },
  rede_sociais:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%',
    marginTop:20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  }

})
export default App;

