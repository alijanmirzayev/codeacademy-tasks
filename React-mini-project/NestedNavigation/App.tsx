import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Route from './Route';
import Splash from './src/screen/Splash';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'Raleway': require('./assets/fonts/Raleway-Black.ttf'),
  });
}

loadFonts();


function App(): any {

  const [splash, setSplash] = useState(true)

  return (
   <SafeAreaView style={styles.container}>
      {splash ? <Splash setSplash={setSplash}/> : <Route />}
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    color: 'black',
    padding: 10,
    margin: 10
  },
  btn: {
    borderRadius: 6,
    backgroundColor: 'black',
    marginHorizontal: 10
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 10
  },
  text: {
    fontFamily: 'Raleway', // burada yeni font adını belirtiyoruz
    fontSize: 24,
  },
});

export default App;
