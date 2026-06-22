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
    backgroundColor: '#152a41',
  },

  partida: {
    backgroundColor: '#2d8152',
  },

  titulo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  botao: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});