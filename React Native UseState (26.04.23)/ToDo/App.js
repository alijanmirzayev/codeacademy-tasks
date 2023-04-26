import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Input from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});