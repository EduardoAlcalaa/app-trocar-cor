// App.js
import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

// Função para gerar uma cor aleatória
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handlePress = () => {
    setBackgroundColor(getRandomColor());
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.buttonContainer}>
        <Button title="Trocar Cor" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
