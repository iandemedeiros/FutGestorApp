import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function TelaDetalhes({ route }) {

  const { jogador } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Detalhes do Jogador
      </Text>

      <Text style={styles.info}>
        Nome: {jogador.nome}
      </Text>

      <Text style={styles.info}>
        Posição: {jogador.posicao}
      </Text>

      <Text style={styles.info}>
        Gols: {jogador.gols}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});