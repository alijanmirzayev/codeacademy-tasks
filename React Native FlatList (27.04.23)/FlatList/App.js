import { StyleSheet, View } from 'react-native';
import UserInput from './src/components/UserInput';
import PostInput from './src/components/PostInput';

export default function App() {



  return (
    <View style={styles.container}>

      <UserInput />
      <PostInput />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
    marginHorizontal: 20
  }

});
