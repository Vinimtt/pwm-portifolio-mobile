import { View, Text, StyleSheet, FlatList } from 'react-native';

const tecnologias = [
  { id: '1', nome: 'React Native' },
  { id: '2', nome: 'Expo SDK' },
  { id: '3', nome: 'Expo Router' },
  { id: '4', nome: 'TypeScript' },
];

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre este App</Text>
      <Text style={styles.description}>
        Aplicativo desenvolvido para armazenar a versão mobile do meu portifólio! Projeto desenvolvida para a disciplina de Programação Web-Mobile.
      </Text>
      
      <Text style={styles.subtitle}>Tecnologias Utilizadas para realização desse projeto:</Text>
      <FlatList
        data={tecnologias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>• {item.nome}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  description: { fontSize: 16, color: '#444' },
  item: { fontSize: 16, marginBottom: 5 },
});