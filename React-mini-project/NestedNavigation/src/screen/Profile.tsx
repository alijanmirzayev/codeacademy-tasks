import { } from 'react'
import { Image, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.profilePhotoContainer}>
                <Image style={styles.profilePhoto} source={require('../../assets/images/pp.png')} />
            </View>
            <View style={styles.profileNameContainer}>
                <Text style={styles.profileName}>Rosina Doe</Text>
            </View>
            <View style={styles.addressHeaderContainer}>
                <View style={styles.addressIconContainer}>
                    <EvilIcons name='location' size={28} color='black'/>
                </View>
                <View style={styles.addressContainer}>
                    <Text style={styles.addressText}>Address: 43 Oxford Road</Text>
                    <Text style={styles.addressText}>M13 4GR</Text>
                    <Text style={styles.addressText}>Manchester Uk</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 41,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerContainer: {

    },
    headerText: {
        fontSize: 18,
        fontWeight: '800',
        color: 'black'
    },
    profilePhotoContainer: {
        marginTop: 50
    },
    profilePhoto: {

    },
    profileNameContainer: {
        marginTop: 14
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black'
    },
    addressHeaderContainer: {
        flexDirection: 'row',
        marginTop: 14
    },
    addressIconContainer: {
        marginRight: 10,
        paddingTop: 5,
    }, 
    addressContainer: {

    },
    addressText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default Profile