import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import styles from '../config/styles'; // Caminho corrigido

export default function HomeScreen() {
  return (
    <Surface style={styles.container}>
      <Text style={styles.text}>Olá</Text>
    </Surface>
  );
}