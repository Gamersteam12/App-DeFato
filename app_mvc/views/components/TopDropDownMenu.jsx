import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { ScrollView, Pressable, Text, StyleSheet, View } from 'react-native';

export default function TopDropDownMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState('MANCHETES');
  const router = useRouter();

  const navegar = (destino, label) => {
    setMenuVisible(false);
    setAbaAtiva(label);
    router.push(destino);
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#C8102E' }}>
        <Appbar.Content
          title="DeFATO"
          titleStyle={{ color: '#fff', fontWeight: 'bold' }}
          onPress={() => navegar('/', 'MANCHETES')}
        />
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Appbar.Action icon="menu" color="#fff" onPress={() => setMenuVisible(true)} />
          }
        >
          <Menu.Item
            onPress={() => navegar('/', 'MANCHETES')}
            title="Manchetes"
          />
          <Menu.Item
            onPress={() => navegar('/views/telaA', 'ÚLTIMAS')}
            title="Últimas"
          />
          <Menu.Item
            onPress={() => navegar('/views/telaB', 'VERIFICADOR IA')}
            title="Verificador IA"
          />
          <Menu.Item
            onPress={() => navegar('/views/telaC', 'TELA DE LOGIN')}
            title="Tela de Login"
          />
        </Menu>
      </Appbar.Header>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        <Pressable onPress={() => navegar('/', 'MANCHETES')}>
          <Text
            style={[
              styles.tab,
              abaAtiva === 'MANCHETES' && styles.tabAtiva
            ]}
          >
            MANCHETES
          </Text>
        </Pressable>
        <Pressable onPress={() => navegar('/views/telaA', 'ÚLTIMAS')}>
          <Text
            style={[
              styles.tab,
              abaAtiva === 'ÚLTIMAS' && styles.tabAtiva
            ]}
          >
            ÚLTIMAS
          </Text>
        </Pressable>
        <Pressable onPress={() => navegar('/views/telaB', 'VERIFICADOR IA')}>
          <Text
            style={[
              styles.tab,
              abaAtiva === 'VERIFICADOR IA' && styles.tabAtiva
            ]}
          >
            VERIFICADOR IA
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  tab: {
    marginRight: 20,
    fontSize: 16,
    color: '#777',
  },
  tabAtiva: {
    color: '#C8102E',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
