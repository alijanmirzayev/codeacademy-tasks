import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import Card from './src/components/card/Card';

const data = [
  {
    id: 1,
    fullname: 'Alijan Mirzayev',
    username: 'alijanmirzayev',
    profilephoto: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
  },
  {
    id: 2,
    fullname: 'Samir Mirzayev',
    username: 'samirmirzayev',
    profilephoto: 'https://media.gettyimages.com/id/1227618801/vector/human-face-avatar-icon-profile-for-social-network-man-vector-illustration.jpg?s=1024x1024&w=gi&k=20&c=jmyg6H4d9kkHPr4cA-w2ZYwcD9Hw2QXe61I-bYOEXgk='
  },
  {
    id: 3,
    fullname: 'Ali Mirzayev',
    username: 'alimirzayev',
    profilephoto: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg'
  },
  {
    id: 4,
    fullname: 'Sadiq Mirzayev',
    username: 'sadiqmirzayev',
    profilephoto: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
  },
  {
    id: 5,
    fullname: 'Mehdi Mirzayev',
    username: 'mehdimirzayev',
    profilephoto: 'https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png'
  },
  {
    id: 6,
    fullname: 'Hesen Mirzayev',
    username: 'hesenmirzayev',
    profilephoto: 'https://api.duniagames.co.id/api/content/upload/file/14055166521599123794.jpg'
  },
  {
    id: 7,
    fullname: 'Sabir Mirzayev',
    username: 'sabirmirzayev',
    profilephoto: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
  },
  {
    id: 8,
    fullname: 'Cabir Mirzayev',
    username: 'cabirmirzayev',
    profilephoto: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg'
  },
  
]


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
        <View style={styles.profilePhoto}>
          <Image
            style={styles.avatar}
            source={
              { uri: 'https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg' }
            } />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.fullname}>Devon Conway</Text>
          <Text style={styles.username}>@devinconway</Text>
        </View>
        <View style={styles.profileToggleMenu}>
          <Entypo name='menu' size={30} />
        </View>
      </View>

      <View style={styles.cardsInfoContainer}>
        <Text style={styles.cardsHeaderTitle}>Follow New Friends</Text>
        <Text style={styles.cardsHeaderDescription}>Follow Friends You Know</Text>
      </View>

      <View style={styles.cardsContainer}>
        
        {data.map(item => (
          <Card
          fullname={item.fullname}
          username={item.username}
          profilephoto={item.profilephoto}>
        </Card>
        ))}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  profileContainer: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#EBF9FF',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  cardsInfoContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    flex: 8,
    alignItems: 'flex-start',
  },
  profilePhoto: {
    flex: 2
  },
  avatar: {
    width: '80%',
    height: '50%',
    borderRadius: 40
  },
  profileInfo: {
    flex: 5
  },
  fullname: {
    fontSize: 20,
    fontWeight: 600
  },
  username: {
    fontSize: 14,
    fontWeight: 500,
    color: 'gray'
  },
  profileToggleMenu: {
    flex: 1,
    alignItems: 'flex-end'
  },
  cardsHeaderTitle: {
    fontSize: 26,
    fontWeight: 600,

  },
  cardsHeaderDescription: {
    fontSize: 16,
    fontWeight: 500,
    color: 'gray'
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    flexWrap: 'nowrap'
  },
  cardProfilePhoto: {
    flex: 2,
  },
  cardPhoto: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 40
  },
  cardProfileInfo: {
    flex: 6,
  },
  cardFullname: {
    fontSize: 20,
    fontWeight: 600
  },
  cardUsername: {
    fontSize: 14,
    fontWeight: 500,
    color: 'gray'
  },
  cardFollowButton: {
    flex: 3,
  },
  Button: {
    borderRadius: 20,
    backgroundColor: '#rgb(79,196,247)',
    padding: 10,
    color: 'white',
    textAlign: 'center'
  }
});
