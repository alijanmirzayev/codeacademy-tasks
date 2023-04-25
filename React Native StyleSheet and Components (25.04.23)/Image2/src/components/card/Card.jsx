import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Card({username, title, follow, like, smelting, ranking, profilePhoto, color = 'orange'}) {
  return (
      <View style={[styles.cardContainer, {backgroundColor: color}] }>

        <View style={styles.cardProfilePhotoContainer}>
          <Image style={styles.ProfilePhoto} source={{ uri: profilePhoto }} />
        </View>

        <View style={styles.cardProfileInfoContainer}>

          <View style={styles.usernameTitle}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.Title}>Title: {title}</Text>
          </View>

          <View style={styles.profileFollowLikeSmeltingContainer}>

            <View style={styles.followContainer}>
              <Text style={styles.followCount}>{follow}</Text>
              <Text style={styles.follow}>follow</Text>
            </View>

            <View style={styles.likeContainer}>
              <Text style={styles.likeCount}>{like}</Text>
              <Text style={styles.like}>like</Text>
            </View>

            <View style={styles.smeltingContainer}>
              <Text style={styles.smeltingCount}>{smelting}</Text>
              <Text style={styles.smelting}>smelting</Text>
            </View>

          </View>

        </View>

        <View style={styles.cardRankingContainer}>
          <View style={styles.icon}>
              <AntDesign name='ellipsis1' size={20} color={'white'}/>
          </View>
          <View style={styles.rankingContanier}>
            <Text style={styles.ranking}>{ranking}</Text>
            <Text  style={styles.rankingText}>Ranking</Text>
          </View>
        </View>


      </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10
  },
  cardProfilePhotoContainer: {
    flex: 1
  },
  ProfilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 40
  },
  cardProfileInfoContainer: {
    flex: 4
  },
  usernameTitle: {
    marginBottom: 15,
    marginLeft: 15
  },
  username: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5
  },
  Title: {
    color: 'white',
    fontSize: 12

  },
  profileFollowLikeSmeltingContainer: {
    flexDirection: 'row',
    width: '90%'
  },
  followContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%'
  },
  followCount: {
    color: 'white',
    fontSize: 12
  },
  follow: {
    color: 'white',
    fontSize: 12
  },
  likeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%'
  },
  likeCount: {
    color: 'white',
    fontSize: 12
  },
  like: {
    color: 'white',
    fontSize: 12
  },
  smeltingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%'
  },
  smeltingCount: {
    color: 'white',
    fontSize: 12
  },
  smelting: {
    color: 'white',
    fontSize: 12
  },
  cardRankingContainer: {
  },
  icon: {
    marginBottom: 10
  },
  rankingContanier: {
    alignItems: 'center',
  },
  ranking: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600
  },
  rankingText: {
    color: 'white',
    fontSize: 12
  }
});
