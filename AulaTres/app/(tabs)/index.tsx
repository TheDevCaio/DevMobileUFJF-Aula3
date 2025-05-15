import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function App() {

  const [colors, setColors] = useState([
    'red', 'green', 'blue', 'yellow', 'purple'
  ]);

  const randomizeColors = () => {
    
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    setColors(shuffledColors); 
  };

  return (
    <View style={styles.container}>
      <Button title="Clique aqui" onPress={randomizeColors} /> 
      <View style={styles.squareContainer}>
        {colors.map((color, index) => (
          <View key={index} style={[styles.square, { backgroundColor: color }]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  squareContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  square: {
    width: 60,
    height: 60,
    margin: 5,
  },
});