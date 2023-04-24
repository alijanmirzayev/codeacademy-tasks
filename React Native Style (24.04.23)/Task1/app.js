import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput style={styles.textInput} value='Friday, 15 Dec' />
        <Text style={styles.mainText}>Learn</Text>
        <Text style={styles.otherText}>Choose the part of the body</Text>
      </View>
      <View style={styles.CardContainer}>
        <View style={styles.Card}>
          <Text style={styles.CardTitle}>Head & Face</Text>
          <Text style={styles.CardTwoTitle}>11 diseases</Text>
        </View>
        <View style={styles.Card2}>
          <Text style={styles.CardTitle}>Back & Neck</Text>
          <Text style={styles.CardTwoTitle}>9 diseases</Text>
        </View>
        <View style={styles.Card3}>
          <Text style={styles.CardTitle}>Elbow & Shoulders</Text>
          <Text style={styles.CardTwoTitle}>12 diseases</Text>
        </View>
        <View style={styles.Card4}>
          <Text style={styles.CardTitle}>Hand & Arm</Text>
          <Text style={styles.CardTwoTitle}>2 diseases</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 24
  },
  textContainer: {
    flex: 3,
  },
  textInput: {
    marginVertical: 10,
    fontSize: 14,
    color: '#E0E2E7',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20
  },
  mainText: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 5
  },
  otherText: {
    fontWeight: 400,
    marginBottom: 20
  },
  CardContainer: {
    flex: 9,
  },
  Card: {
    backgroundColor: '#EB7662',
    padding: 25,
    borderRadius: 10,
    marginBottom: 15
  },
  CardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 600
  },
  CardTwoTitle: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 600
  },
  Card2: {
    backgroundColor: '#8DC4BB',
    padding: 25,
    borderRadius: 10,
    marginBottom: 15
  },
  Card3: {
    backgroundColor: '#F2982F',
    padding: 25,
    borderRadius: 10,
    marginBottom: 15
  },
  Card4: {
    backgroundColor: '#327389',
    padding: 25,
    borderRadius: 10,
    marginBottom: 15
  }
});
