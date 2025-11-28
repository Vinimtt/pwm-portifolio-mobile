import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Academico() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Formação Acadêmica</Text>

      <View style={styles.card}>
        <Text style={styles.institution}>Universidade Católica de Pernambuco</Text>
        <Text style={styles.course}>Ciência da Computação</Text>
        <Text style={styles.details}>6º período</Text>
        <Text style={styles.date}>Previsão de conclusão: 2026.2</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  institution: { fontSize: 18, fontWeight: 'bold', color: '#098605ff', marginBottom: 5 },
  course: { fontSize: 16, fontWeight: '600', marginBottom: 5 },
  details: { fontSize: 14, color: '#666', marginBottom: 5 },
  date: { fontSize: 14, color: '#444', fontStyle: 'italic' },
});