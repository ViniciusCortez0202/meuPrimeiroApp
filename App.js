import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      <View>

      </View>

      <Header name="AppBar" onSearch={() => { console.log("Pesquisando") }} />

      <StatusBar backgroundColor='#dedede' style="auto" />

      <Text>Olá mundo</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
