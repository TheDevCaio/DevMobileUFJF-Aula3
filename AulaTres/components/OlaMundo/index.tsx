import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function OlaMundo(props: { nome: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; data: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {props.nome}!</Text>
      <Text style={styles.date}>{props.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    marginTop: 10,
    color: 'gray',
  },
});