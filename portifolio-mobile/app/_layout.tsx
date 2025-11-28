import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#007AFF' }}>
      
      <Tabs.Screen 
        name="sobre" 
        options={{ 
          title: 'Sobre',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="academico" 
        options={{ 
          title: 'Acadêmico',
          tabBarIcon: ({ color }) => <Ionicons name="school" size={24} color={color} />
        }} 
      />

      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }} 
      />

      <Tabs.Screen 
        name="profissional" 
        options={{ 
          title: 'Profissional',
          tabBarIcon: ({ color }) => <Ionicons name="briefcase" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="projetos" 
        options={{ 
          title: 'Projetos',
          tabBarIcon: ({ color }) => <Ionicons name="code-slash" size={24} color={color} />
        }} 
      />
      <Tabs.Screen 
        name="jogo" 
        options={{ 
          title: 'Jogo',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="game-controller" size={24} color={color} />
        }} 
      />

      <Tabs.Screen name="explore" options={{ href: null }} />
      <Tabs.Screen name="(tabs)" options={{ href: null }} />
      <Tabs.Screen name="modal" options={{ href: null }} />
      <Tabs.Screen name="+not-found" options={{ href: null }} />
      
    </Tabs>
  );
}