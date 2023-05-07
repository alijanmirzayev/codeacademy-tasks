import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



function Splash({setSplash}: any) {

    const changeSplashStatus = () => {
        setSplash(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Find your Gadget</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/images/splash.png')} />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={changeSplashStatus}>
                    <Text style={styles.btnText}>Get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5956E9',
    },
    headerTextContainer: {
        marginTop: 25,
    },
    imageContainer: {
        marginBottom: 15
    },
    btnContainer: {

    },
    headerText: {
        fontSize: 65,
        fontWeight: '800',
        color: 'white',
        textAlign: 'left',
        marginLeft: 45,
    },
    image: {
        
    },
    btn: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 45
    },
    btnText: {
        color: '#5956E9',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        padding: 10
    }
});

export default Splash