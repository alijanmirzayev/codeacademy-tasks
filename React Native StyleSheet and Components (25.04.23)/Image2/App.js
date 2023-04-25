import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import Card from './src/components/card/Card';

const data = [
  {
    id: 1,
    color: 'black',
    username: 'xiaohuiGod',
    title: 'Flying wings',
    follow: 2631,
    like: 3256,
    smelting: 162,
    ranking: 1,
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
  {
    id: 2,
    username: 'Luck',
    title: 'Groming up trouicle',
    follow: 3463,
    like: 2589,
    smelting: 142,
    ranking: 2,
    color: 'red',
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
  {
    id: 3,
    username: 'Hamsn',
    title: 'Groming up Ybas',
    follow: 3463,
    like: 2589,
    smelting: 142,
    ranking: 3,
    color: 'orange',
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
  {
    id: 4,
    username: 'Heos',
    title: 'Groming up trouicle',
    follow: 3463,
    like: 2589,
    smelting: 142,
    ranking: 4,
    color: 'green',
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
  {
    id: 5,
    username: 'Luck',
    title: 'Groming up trouicle',
    follow: 3463,
    like: 2589,
    smelting: 142,
    ranking: 5,
    color: 'aqua',
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
  {
    id: 6,
    username: 'Luck',
    title: 'Groming up trouicle',
    follow: 3463,
    like: 2589,
    smelting: 142,
    ranking: 6,
    color: 'tomato',
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
  {
    id: 7,
    username: 'Luck',
    title: 'Groming up trouicle',
    follow: 3463,
    like: 2589,
    smelting: 142,
    ranking: 7,
    color: 'pink',
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
  {
    id: 8,
    username: 'Luck',
    title: 'Groming up trouicle',
    follow: 3463,
    like: 2589,
    smelting: 142,
    ranking: 8,
    color: 'blue',
    profilePhoto: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg'
  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {data.map(item => (
        <Card username={item.username}
        title={item.title}
        follow={item.follow}
        like={item.like}
        smelting={item.smelting}
        ranking={item.ranking}
        profilePhoto={item.profilePhoto}
        color = {item.color}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 25,
    flexDirection: 'column',
    width: '90%',
    height: '10%'
  }
});
