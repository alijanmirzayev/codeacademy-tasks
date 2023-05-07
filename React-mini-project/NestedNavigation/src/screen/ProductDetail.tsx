import { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ProductDetail({ route }: any) {
    const { item, basket, setbasket } = route.params

    const addbasket = () => {
        const checkProduct = basket.find((product: any) => product.id == item.id)
        if (!checkProduct) {
            setbasket([...basket, item])
            AsyncStorage.setItem('basket', JSON.stringify([...basket, item]))
            return
        }
        return null
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.imageLink }} />
            <Text style={styles.brandText}>{item.brand}</Text>
            <Text style={styles.colorText}>Colors</Text>
            <View style={styles.colorBtnContainer}>
                <Text style={styles.colorBtnText}>
                    <FontAwesome style={styles.icon} name='circle' size={12} color='#7485C1' />
                    Sky Blue
                </Text>
                <Text style={styles.colorBtnText}>
                    <FontAwesome style={styles.icon} name='circle' size={12} color='#C9A19C' />
                    Rose Gold
                </Text>
                <Text style={styles.colorBtnText}>
                    <FontAwesome style={styles.icon} name='circle' size={12} color='#A1C89B' />
                    Green
                </Text>
            </View>
            <Text style={styles.headerText}>
                Get Apple TV+ free for a year
            </Text>
            <Text style={styles.headerDesc}>
                Available when you purchase any new iPhone, iPad, iPod Touch, Mac or Apple TV, £4.99/month after free trial.
            </Text>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>Price</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={addbasket}>
                <Text style={styles.btnText}>
                    Add to basket
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        marginHorizontal: 20,
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
    },
    brandText: {
        fontFamily: 'Raleway-SemiBold',
        fontSize: 28,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',
    },
    colorText: {
        fontFamily: 'Raleway-SemiBold',
        fontSize: 19,
        fontWeight: '600',
        color: 'black',
    },
    colorBtnContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around'
    },
    colorBtnText: {
        fontSize: 13,
        color: 'black',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    headerText: {
        marginTop: 10,
        fontSize: 21,
        fontWeight: '600',
        color: 'black'
    },
    headerDesc: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: '400',
        color: '#9A9A9D'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 90,
    },
    priceText: {
        fontSize: 19,
        fontWeight: '400',
        color: 'black'
    },
    price: {
        fontSize: 21,
        fontWeight: '600',
        color: '#5956E9'
    },
    btn: {
        width: '100%',
        backgroundColor: '#5956E9',
        borderRadius: 8,
    },
    btnText: {
        fontSize: 19,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
    },
    icon: {
        margin: 10
    }
})

export default ProductDetail