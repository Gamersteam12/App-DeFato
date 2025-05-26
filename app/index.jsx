import { View, Text, StyleSheet, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const [abaAtiva, setAbaAtiva] = useState('MANCHETES');
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.topo}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.listaNoticias}>
        {mockNoticias.map((noticia, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.imagemFake} />
            <View style={styles.cardTexto}>
              <Text style={styles.titulo}>{noticia.titulo}</Text>
              <Text style={styles.hora}>{noticia.hora}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const mockNoticias = [
  {
    titulo: 'Novas medidas do governo são anunciadas hoje',
    hora: 'Há 2 horas',
  },
  {
    titulo: 'Descoberta científica pode mudar o futuro da medicina',
    hora: 'Há 3 horas',
  },
  {
    titulo: 'Esportes: time surpreende e vence fora de casa',
    hora: 'Há 5 horas',
  },
  {
    titulo: 'Tecnologia: novo celular é lançado no Brasil',
    hora: 'Há 6 horas',
  }
];

const styles = StyleSheet.create({
  topo: {
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  tabs: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9'
  },
  tab: {
    fontSize: 16,
    color: '#999',
    paddingHorizontal: 20,
  },
  tabAtiva: {
    color: '#B00000',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  listaNoticias: {
    padding: 16
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  imagemFake: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginRight: 12
  },
  cardTexto: {
    flex: 1,
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#222'
  },
  hora: {
    fontSize: 12,
    color: '#777'
  }
});
