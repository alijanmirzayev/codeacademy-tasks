import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';
import axios from 'axios';

export default function App() {

  const [allData, setNewData] = useState([])
  const [allOriginalData, setNewOriginalData] = useState([])

  useEffect(async () => {
    const data = (await axios.get('https://643d3ce16afd66da6af14454.mockapi.io/api/v1/lists')).data
    setNewData(data)
    setNewOriginalData(data)
  }, [])

  const renderItem = ({ item }) => {
    return <Card title={item.title} diseases={item.diseases} color={item.color} />
  }

  return (
    <View style={styles.container}>

      <Header allOriginalData={allOriginalData} setNewData={setNewData} />

      <FlatList
        data={allData}
        renderItem={renderItem}
      />

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 24
  }
  // Card2: {
  //   backgroundColor: '#8DC4BB',
  //   padding: 25,
  //   borderRadius: 10,
  //   marginBottom: 15
  // },
  // Card3: {
  //   backgroundColor: '#F2982F',
  //   padding: 25,
  //   borderRadius: 10,
  //   marginBottom: 15
  // },
  // Card4: {
  //   backgroundColor: '#327389',
  //   padding: 25,
  //   borderRadius: 10,
  //   marginBottom: 15
  // }
});
