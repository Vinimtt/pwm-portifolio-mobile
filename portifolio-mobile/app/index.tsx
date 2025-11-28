import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

export default function Home() {
  
  const abrirLinkedIn = () => Linking.openURL('https://www.linkedin.com/in/viníciusmergulhão/');
  const abrirGitHub = () => Linking.openURL('https://github.com/Vinimtt');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Stack.Screen options={{ title: 'Início' }} />

      <View style={styles.header}>
        {}
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/images/perfil.png')} style={styles.avatarImagem} />
        </View>
        
        <Text style={styles.name}>Vinícius Mergulhão Teti</Text>
        <Text style={styles.role}>Desenvolvedor Backend & Mobile</Text>
        <Text style={styles.location}>Recife, Pernambuco</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.bio}>
          Sou um estudante de Ciência da Computação (6º período) com facilidade de comunicação, proativo e com grande vontade de aprender. 
          {'\n'}
          Tenho interesse especial em desenvolvimento backend e estou sempre em busca de novos desafios que contribuam para meu crescimento profissional.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contato</Text>
        <View style={styles.contactGrid}>
          
          <TouchableOpacity style={styles.contactButton} onPress={abrirLinkedIn}>
            <Ionicons name="logo-linkedin" size={24} color="#0077b5" />
            <Text style={styles.contactText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactButton} onPress={abrirGitHub}>
            <Ionicons name="logo-github" size={24} color="#333" />
            <Text style={styles.contactText}>Github</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#098605ff',
    paddingVertical: 40,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden'
  },

  avatarImagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#daeaff',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#daeaff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1a7716ff',
    paddingLeft: 10,
  },
  bio: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contactButton: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  contactText: {
    fontWeight: '600',
    color: '#333',
  },
});