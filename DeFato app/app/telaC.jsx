// TelaLogin.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './model/firebaseConfig'; // ajuste o caminho se necessário

export default function TelaLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }

    setLoading(true);
    try {
      // autentica no Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      // busca o perfil do usuário no Firestore
      const userSnap = await getDoc(doc(db, 'usuarios', uid));

      if (!userSnap.exists()) {
        Alert.alert('Erro', 'Perfil de usuário não encontrado.');
        await signOut(auth);
        setLoading(false);
        return;
      }

      const userData = userSnap.data();
      if (userData.role === 'jornalista') {
        // acesso liberado
        navigation.reset({
          index: 0,
          routes: [{ name: 'Index' }],
        });
      } else {
        // não é jornalista: desloga e alerta
        await signOut(auth);
        Alert.alert(
          'Acesso negado',
          'Somente jornalistas podem acessar esta área.'
        );
      }

    } catch (error) {
      let msg = 'Ocorreu um erro ao logar.';
      if (error.code === 'auth/wrong-password') {
        msg = 'Senha incorreta.';
      } else if (error.code === 'auth/user-not-found') {
        msg = 'E-mail não cadastrado.';
      }
      Alert.alert('Erro no login', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login Jornalista</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {loading
        ? <ActivityIndicator size="large" />
        : <Button title="Entrar" onPress={handleLogin} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 12,
  },
});
