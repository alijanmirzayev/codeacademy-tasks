import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({fullname, username, profilephoto}) {

    return (

        <View style={styles.cards}>
            <View style={styles.cardProfilePhoto}>
                <Image
                    style={styles.cardPhoto}
                    source={
                        { uri: profilephoto }
                    } />
            </View>
            <View style={styles.cardProfileInfo}>
                <Text style={styles.cardFullname}>{fullname}</Text>
                <Text style={styles.cardUsername}>{username}</Text>
            </View>
            <View style={styles.cardFollowButton}>
                <Text style={styles.Button}>Following</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    cards: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
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
