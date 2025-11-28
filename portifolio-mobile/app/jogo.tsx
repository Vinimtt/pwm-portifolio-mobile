import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Stack } from 'expo-router';

const JOGO_INICIAL = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

export default function JogoSudoku() {
  const [tabuleiro, setTabuleiro] = useState<number[][]>(JSON.parse(JSON.stringify(JOGO_INICIAL)));
  const [selecionado, setSelecionado] = useState<[number, number] | null>(null);

  const ehJogadaValida = (board: number[][], linha: number, col: number, num: number) => {
    for (let i = 0; i < 9; i++) {
      if (board[linha][i] === num) return false;
    }

    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) return false;
    }

    const inicioLinha = Math.floor(linha / 3) * 3;
    const inicioCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[inicioLinha + i][inicioCol + j] === num) return false;
      }
    }

    return true;
  };

  const verificarFimDeJogo = (board: number[][]) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) return;
      }
    }
    Alert.alert('Parabéns!', 'Você completou o Sudoku!');
  };

  const reiniciarJogo = () => {
    setTabuleiro(JSON.parse(JSON.stringify(JOGO_INICIAL)));
    setSelecionado(null);
  };

  const preencherNumero = (numero: number | null) => {
    if (!selecionado) return;

    const [linha, col] = selecionado;

    if (JOGO_INICIAL[linha][col] !== 0) {
      Alert.alert('Ação inválida', 'Você não pode alterar os números fixos.');
      return;
    }

    if (numero === null) {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[linha] = [...novoTabuleiro[linha]];
      novoTabuleiro[linha][col] = 0;
      setTabuleiro(novoTabuleiro);
      return;
    }

    if (!ehJogadaValida(tabuleiro, linha, col, numero)) {
      Alert.alert(
        'Movimento Inválido', 
        `O número ${numero} já existe nesta linha, coluna ou quadrante!`
      );
      return;
    }

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[linha] = [...novoTabuleiro[linha]];
    novoTabuleiro[linha][col] = numero;
    setTabuleiro(novoTabuleiro);

    verificarFimDeJogo(novoTabuleiro);
  };

  const renderCelula = (numero: number, linha: number, col: number) => {
    const ehFixo = JOGO_INICIAL[linha][col] !== 0;
    const estaSelecionado = selecionado && selecionado[0] === linha && selecionado[1] === col;
    const bordaDireita = (col + 1) % 3 === 0 && col !== 8 ? 2 : 0.5;
    const bordaBaixo = (linha + 1) % 3 === 0 && linha !== 8 ? 2 : 0.5;

    return (
      <TouchableOpacity
        key={`${linha}-${col}`}
        style={[
          styles.celula,
          {
            borderRightWidth: bordaDireita,
            borderBottomWidth: bordaBaixo,
            backgroundColor: estaSelecionado ? '#bbdefb' : ehFixo ? '#e0e0e0' : '#fff',
          },
        ]}
        onPress={() => setSelecionado([linha, col])}
      >
        <Text
          style={[
            styles.textoCelula,
            { color: ehFixo ? '#000' : '#098605ff', fontWeight: ehFixo ? 'bold' : 'normal' },
          ]}
        >
          {numero !== 0 ? numero : ''}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Sudoku' }} />

      <Text style={styles.titulo}>Sudoku, só pra quem é inteligente</Text>
      
      <View style={styles.tabuleiroContainer}>
        {tabuleiro.map((linha, indexLinha) => (
          <View key={indexLinha} style={styles.linha}>
            {linha.map((num, indexCol) => renderCelula(num, indexLinha, indexCol))}
          </View>
        ))}
      </View>

      <View style={styles.controles}>
        <View style={styles.teclado}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.botaoTeclado}
              onPress={() => preencherNumero(num)}
            >
              <Text style={styles.textoBotao}>{num}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.botaoTeclado, styles.botaoApagar]}
            onPress={() => preencherNumero(null)}
          >
            <Text style={[styles.textoBotao, styles.textoApagar]}>X</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarJogo}>
          <Text style={styles.textoReiniciar}>Reiniciar Jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#333',
  },
  tabuleiroContainer: {
    borderWidth: 2,
    borderColor: '#000',
  },
  linha: {
    flexDirection: 'row',
  },
  celula: {
    width: 35,
    height: 35,
    borderWidth: 0.5,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCelula: {
    fontSize: 18,
  },
  controles: {
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  teclado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 300,
  },
  botaoTeclado: {
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  botaoApagar: {
    backgroundColor: '#ffebee',
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  textoApagar: {
    color: '#d32f2f',
  },
  botaoReiniciar: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  textoReiniciar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});