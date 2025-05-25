import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

export default function VerificadorIA() {
  const [texto, setTexto] = useState('');
  const [resposta, setResposta] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [modo, setModo] = useState('verificar');

  const enviarParaIA = async (tipo) => {
    setCarregando(true);
    setResposta(null);
    setModo(tipo);
    const prompt = tipo === 'verificar'
      ? `Leia a seguinte notícia e diga se é verdadeira ou falsa, explicando de forma breve:\n\n${texto}`
      : `Resuma a seguinte notícia em poucas linhas de forma clara:\n\n${texto}`;

    try {
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
        },
        {
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
          },
        }
      );
      const content = response.data.choices[0].message.content;
      setResposta(content);
    } catch (error) {
      console.error(error);
      setResposta('Erro ao processar a notícia. Tente novamente.');
    }
    setCarregando(false);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#B00000', marginBottom: 20, textAlign: 'center' }}>
        Escreva a notícia
      </Text>

      <TextInput
        multiline
        numberOfLines={6}
        placeholder="Quero saber se essa informação é verdadeira ou quero um resumo..."
        placeholderTextColor="#777"
        value={texto}
        onChangeText={setTexto}
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 16,
          borderWidth: 1,
          borderColor: '#ddd',
          textAlignVertical: 'top',
          fontSize: 16,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 3,
        }}
      />

      <TouchableOpacity
        onPress={() => enviarParaIA('verificar')}
        disabled={carregando || texto.trim() === ''}
        style={{
          backgroundColor: '#B00000',
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        {carregando && modo === 'verificar' ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            Verificar com IA
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => enviarParaIA('resumir')}
        disabled={carregando || texto.trim() === ''}
        style={{
          backgroundColor: '#B00000',
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        {carregando && modo === 'resumir' ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            Resumir com IA
          </Text>
        )}
      </TouchableOpacity>

      {resposta && (
        <View style={{ backgroundColor: '#f4f4f4', padding: 16, borderRadius: 8 }}>
          <Text style={{ fontSize: 16, color: '#333' }}>{resposta}</Text>
        </View>
      )}
    </ScrollView>
  );
}
