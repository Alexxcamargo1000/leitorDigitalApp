import React, { useEffect } from 'react';
import { Image, Text, View, TextInput,TextInputBase } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

import digitalImage from '../../assets/digital.png';
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
export function Landing() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

     // useEffect(()=>{
  //   biometria()
  // },[])


  const navegation = useNavigation();
  function handleNavegateToLanding(){
    navegation.navigate('Cadastrar')
  }

  
  async function biometria() {
    const isCompativel = await LocalAuthentication.hasHardwareAsync()
    if(isCompativel){
      const touchID = await LocalAuthentication.authenticateAsync()
      if(touchID){
        console.log(touchID)
        handleNavegateToLanding()
      }else{
        console.log("erro")
      }
    }
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.title}>Leitor Digital </Text>
        </View>
        <View style={styles.containerImage}>
           <Image source={digitalImage} />
        </View>

        <View>
        <Text style={styles.textPrimary}>
          Nome Usuario
        </Text>
          <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          color:'#fff'
        }}
        defaultValue="Nome de Usuario"
        clearTextOnFocus={true}
      />
          </View>

        <View style={styles.containerBottons}>
         
            <RectButton style={[styles.bottonPrimary, styles.button]}>
                <Text style={[styles.buttonText, styles.textPrimary]}>Login</Text>
            </RectButton>
            <RectButton onPress={biometria} style={[styles.bottonSecondary]}>
                <Text  style={[styles.textPrimary, styles.textCadastro]}>Cadastrar</Text>
            </RectButton>
        </View>

    </View>
  );

}

export default Landing;