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
    backgroundColor: '#0f172a',
    padding: 20,
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#22c55e',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#22c55e',
    textAlign: 'center',
    marginBottom: 25,
  },

  info: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#334155',
    borderRadius: 8,
  },
});