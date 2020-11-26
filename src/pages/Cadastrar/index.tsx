import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import {RectButton} from 'react-native-gesture-handler';
import styles from './styles';

import digitalImage from '../../assets/digital.png';
import { useNavigation } from '@react-navigation/native';

export function Cadastrar() {

  const navegation = useNavigation();

  function handleNavegateToLanding(){
    navegation.navigate("Landing")
  }

  
  return (
    <View style={styles.container}>
       <Text style={styles.textPrimary}>Digital Reconhecida</Text>
        <RectButton onPress={handleNavegateToLanding} style={[styles.button, styles.bottonPrimary]}>
          <Text  style={styles.textPrimary}>Voltar</Text>
        </RectButton>
    </View>
  );

}

export default Cadastrar;