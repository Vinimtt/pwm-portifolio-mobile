import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Profissional() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experiências</Text>

      <View style={styles.card}>
        <Text style={styles.role}>Monitoria</Text>
        <Text style={styles.location}>Pernambuco, Recife</Text>
        <Text style={styles.date}>Agosto 2024 - Dezembro 2024</Text>
        <Text style={styles.description}>
          Apoio a estudantes com dúvidas teóricas e práticas, elaboração de atividades complementares e suporte aos professores.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Rede Inova</Text>
        <Text style={styles.location}>Pernambuco, Recife</Text>
        <Text style={styles.date}>Janeiro 2023 - Janeiro 2024</Text>
        <Text style={styles.description}>
          Atuação com modelagem e impressão 3D e ministração de minicursos preparatórios para estudantes do ensino médio do Colégio Liceu Nóbrega, em parceria com a UNICAP.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.role}>Hacker Cidadão 10.0</Text>
        <Text style={styles.location}>Pernambuco, Recife</Text>
        <Text style={styles.date}>Abril 2023</Text>
        <Text style={styles.description}>
          Prototipagem de aplicativo para mobilidade urbana, utilizando Figma e práticas de design colaborativo.
        </Text>
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
    borderLeftWidth: 5,
    borderLeftColor: '#1c6b1aff',
    elevation: 2,
  },
  role: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 2 },
  location: { fontSize: 14, color: '#666', marginBottom: 2 },
  date: { fontSize: 14, color: '#098605ff', marginBottom: 10, fontWeight: '600' },
  description: { fontSize: 15, color: '#444', lineHeight: 22 },
});