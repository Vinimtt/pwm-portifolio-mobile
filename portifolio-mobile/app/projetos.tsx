import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Projetos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>

      <View style={styles.projectCard}>
        <Text style={styles.projectName}>Fazer Cultura</Text>
        <Text style={styles.projectType}>Análise e Projeto de Software</Text>
        
        <View style={styles.techContainer}>
          <Text style={styles.techLabel}>Tecnologias: </Text>
          <Text style={styles.techText}>Django, HTML, CSS, MySQL</Text>
        </View>

        <Text style={styles.description}>
          Aplicação web para incentivar o consumo de conteúdos culturais com vídeos e interação entre usuários. Desenvolvido com metodologia ágil Scrum.
        </Text>
      </View>

      <View style={styles.projectCard}>
        <Text style={styles.projectName}>Pokebolsa</Text>
        <Text style={styles.projectType}>Programação Web Mobile</Text>
        
        <View style={styles.techContainer}>
          <Text style={styles.techLabel}>Tecnologias: </Text>
          <Text style={styles.techText}>Next.js, React, Parse, API externa</Text>
        </View>

        <Text style={styles.description}>
          Aplicação web para consulta de cartas de Pokémon TCG, com busca de preços em tempo real e gerenciamento de carrinho.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  projectCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  projectName: { fontSize: 20, fontWeight: 'bold', color: '#098605ff', marginBottom: 5 },
  projectType: { fontSize: 14, color: '#666', fontStyle: 'italic', marginBottom: 10 },
  techContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, backgroundColor: '#f0f8ff', padding: 8, borderRadius: 5 },
  techLabel: { fontWeight: 'bold', color: '#333' },
  techText: { color: '#333' },
  description: { fontSize: 15, color: '#444', lineHeight: 22 },
});