import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, ImageBackground } from 'react-native';
import { Stack } from 'expo-router';

const PALAVRAS = [
  'MAGRAO', 'DIEGO SOUZA', 'ILHA DO RETIRO', 'LEAO', 
  'CAZA', 'RUBRO NEGRO', 'PERNAMBUCO', 'SERIE A',
  'COPA DO BRASIL', 'CAMPEAO DE 87', 'BALADA'
];

export default function JogoForca() {
  const [palavra, setPalavra] = useState('');
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);
  const [erros, setErros] = useState(0);
  const [statusJogo, setStatusJogo] = useState<'jogando' | 'ganhou' | 'perdeu'>('jogando');

  const MAX_ERROS = 6;

  useEffect(() => {
    iniciarJogo();
  }, []);

  const iniciarJogo = () => {
    const palavraSorteada = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
    setPalavra(palavraSorteada);
    setLetrasAdivinhadas([]);
    setErros(0);
    setStatusJogo('jogando');
  };

  const chutarLetra = (letra: string) => {
    if (statusJogo !== 'jogando' || letrasAdivinhadas.includes(letra)) return;

    const novasLetras = [...letrasAdivinhadas, letra];
    setLetrasAdivinhadas(novasLetras);

    if (!palavra.includes(letra)) {
      const novosErros = erros + 1;
      setErros(novosErros);
      if (novosErros >= MAX_ERROS) {
        setStatusJogo('perdeu');
        Alert.alert('Fim de Jogo, agora você tem que torcer pro santa 😂', `A palavra era: ${palavra}`);
      }
    } else {
      const ganhou = palavra.split('').every(char => 
        char === ' ' || novasLetras.includes(char)
      );
      if (ganhou) {
        setStatusJogo('ganhou');
        Alert.alert('Pelo Sport Tudo!', ' 🦁 Você acertou a palavra! 🦁');
      }
    }
  };

  const renderBoneco = () => {
    return (
      <View style={styles.forcaArea}>
        <View style={styles.posteVertical} />
        <View style={styles.posteTopo} />
        <View style={styles.corda} />
        <View style={styles.base} />

        {erros >= 1 && <View style={styles.cabeca} />}
        {erros >= 2 && <View style={styles.corpo} />}
        {erros >= 3 && <View style={styles.bracoEsq} />}
        {erros >= 4 && <View style={styles.bracoDir} />}
        {erros >= 5 && <View style={styles.pernaEsq} />}
        {erros >= 6 && <View style={styles.pernaDir} />}
      </View>
    );
  };

  return (
    <ImageBackground 
      source={require('../assets/images/ilha.png')}
      style={styles.imagemFundo}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen options={{ 
          title: 'Forca do Leão',
          headerStyle: { backgroundColor: '#D32F2F' }, 
          headerTintColor: '#fff'
        }} />
        
        <Text style={styles.titulo}>FORCA DO LEÃO 🦁</Text>

        {renderBoneco()}

        <View style={styles.palavraContainer}>
          {palavra.split('').map((char, index) => (
            <Text key={index} style={styles.letraOculta}>
              {char === ' ' ? ' ' : letrasAdivinhadas.includes(char) || statusJogo === 'perdeu' ? char : '_'}
            </Text>
          ))}
        </View>

        <View style={styles.teclado}>
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letra) => {
            const foiUsada = letrasAdivinhadas.includes(letra);
            const ehCorreta = palavra.includes(letra);
            
            return (
              <TouchableOpacity
                key={letra}
                disabled={foiUsada || statusJogo !== 'jogando'}
                onPress={() => chutarLetra(letra)}
                style={[
                  styles.tecla,
                  foiUsada && (ehCorreta ? styles.teclaCorreta : styles.teclaErrada)
                ]}
              >
                <Text style={[styles.teclaTexto, foiUsada && styles.teclaTextoUsada]}>
                  {letra}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.botaoReiniciar} onPress={iniciarJogo}>
          <Text style={styles.textoReiniciar}>NOVO JOGO</Text>
        </TouchableOpacity>

      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagemFundo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F', 
    marginBottom: 20,
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  forcaArea: {
    width: 200,
    height: 250,
    marginBottom: 30,
    position: 'relative',
  },
  base: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    width: 100,
    height: 5,
    backgroundColor: '#333',
  },
  posteVertical: {
    position: 'absolute',
    bottom: 0,
    left: 70,
    width: 5,
    height: 250,
    backgroundColor: '#333',
  },
  posteTopo: {
    position: 'absolute',
    top: 0,
    left: 70,
    width: 80,
    height: 5,
    backgroundColor: '#333',
  },
  corda: {
    position: 'absolute',
    top: 0,
    right: 50,
    width: 3,
    height: 40,
    backgroundColor: '#8B4513',
  },
  cabeca: {
    position: 'absolute',
    top: 40,
    right: 36,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#D32F2F',
  },
  corpo: {
    position: 'absolute',
    top: 70,
    right: 50,
    width: 3,
    height: 50,
    backgroundColor: '#D32F2F',
  },
  bracoEsq: {
    position: 'absolute',
    top: 80,
    right: 52,
    width: 30,
    height: 3,
    backgroundColor: '#D32F2F',
    transform: [{ rotate: '-30deg' }],
  },
  bracoDir: {
    position: 'absolute',
    top: 80,
    right: 20,
    width: 30,
    height: 3,
    backgroundColor: '#D32F2F',
    transform: [{ rotate: '30deg' }],
  },
  pernaEsq: {
    position: 'absolute',
    top: 115,
    right: 52,
    width: 30,
    height: 3,
    backgroundColor: '#D32F2F',
    transform: [{ rotate: '-45deg' }],
  },
  pernaDir: {
    position: 'absolute',
    top: 115,
    right: 20,
    width: 30,
    height: 3,
    backgroundColor: '#D32F2F',
    transform: [{ rotate: '45deg' }],
  },
  palavraContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 5,
  },
  letraOculta: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    minWidth: 20,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  },
  teclado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  tecla: {
    width: 35,
    height: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 2,
  },
  teclaCorreta: {
    backgroundColor: '#4CAF50',
    borderColor: '#388E3C',
  },
  teclaErrada: {
    backgroundColor: '#D32F2F',
    borderColor: '#B71C1C',
  },
  teclaTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  teclaTextoUsada: {
    color: '#fff',
  },
  botaoReiniciar: {
    marginTop: 30,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  textoReiniciar: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 16,
  },
});