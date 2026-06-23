import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default function Home({ navigation }) {

  const [emPartida, setEmPartida] = React.useState(false);

  const jogadores = [
    {
      nome: 'Ianzinho',
      posicao: 'Lateral',
      gols: 67,
    },
    {
      nome: 'Cayo',
      posicao: 'Goleiro',
      gols: -1,
    },
    {
      nome: 'Bob',
      posicao: 'Zagueiro',
      gols: 0,
    },
  ];

  React.useEffect(() => {
    Alert.alert(
      'Sincronização',
      'Dados do plantel sincronizados com o servidor!'
    );
  }, []);

  React.useEffect(() => {
    console.log(
      `O status do elenco mudou para: ${
        emPartida
          ? 'Em Partida'
          : 'Em Treinamento'
      }`
    );
  }, [emPartida]);

  return (
    <View
      style={[
        styles.container,
        emPartida
          ? styles.partida
          : styles.treinamento
      ]}
    >

      <Text style={styles.titulo}>
        {
          emPartida
            ? 'Em Partida Oficial'
            : 'Em Treinamento'
        }
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          setEmPartida(!emPartida)
        }
      >
        <Text>
          Alterar Status
        </Text>
      </TouchableOpacity>

      {jogadores.map((jogador, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            navigation.navigate(
              'Detalhes',
              { jogador }
            )
          }
        >
          <Text>
            {jogador.nome}
          </Text>
        </TouchableOpacity>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  treinamento: {
    backgroundColor: '#1E293B',
  },

  partida: {
    backgroundColor: '#166534',
  },

  titulo: {
    color: '#F8FAFC',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 10,
  },

  botao: {
    backgroundColor: '#FACC15',
    paddingVertical: 14,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
    elevation: 5,
  },

  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },

  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#FACC15',
    elevation: 4,
  },

  nomeJogador: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
});