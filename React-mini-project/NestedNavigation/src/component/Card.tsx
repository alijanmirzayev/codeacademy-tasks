import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Card = ({brand, model, price, imageLink}: any) => {


    return (
        <View style={styles.container}>


            <View style={styles.description}>


                <View style={{ alignSelf: 'center', marginTop: -30, marginBottom: 10 }}>

                    <Image style={{ width: 160, height: 160, marginTop: -40, borderRadius: 80, right: 5, }} source={{ uri: imageLink }} />


                </View>

                <View style={styles.description}>

                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'black' }}>{brand}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#868686' }}>{model}</Text>
                    <Text style={{ fontSize: 16, color: '#5956E9', fontWeight: 'bold', paddingTop: 40 }}>{price}</Text>


                </View>


            </View>

        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    img: {
        alignSelf: 'center',

    },
    description: {

        gap: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    container: {
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 25,
        marginVertical: 90,
        padding: 20,
        paddingVertical: 30,
        alignItems: 'center',
        marginHorizontal: 20
    }
})
