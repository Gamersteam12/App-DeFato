import { View, Text, StyleSheet } from "react-native";


export default function telaA() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>ESTA É A TELA DE "ÚLTIMAS", PRECISA SER MODIFICADA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F0F8FF"
  },
  texto: {
    fontSize: 18
  }
});  