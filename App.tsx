import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import AppStack from './src/routes/AppStack';
export default function App() {


  

  
  return (
    <>
      <AppStack/>
      <StatusBar style="light"/>
    </>
  );
}

