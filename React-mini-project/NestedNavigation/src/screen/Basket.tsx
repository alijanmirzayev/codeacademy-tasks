import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const Basket = () => {
    const [favoriteProducts, setBasketProducts] = useState([]);
    const [total, setTotal] = useState(0)
    const isFocused = useIsFocused()
    

    useEffect(() => {
        getBasketProducts();
        let sum = 0
        favoriteProducts.forEach((item: any) => {
            sum += Number(item.price)
        })
        setTotal(sum)
    }, [isFocused]);

    const getBasketProducts = async () => {
        try {
            const products = await AsyncStorage.getItem('basket');
            
            if (products !== null) {
                setBasketProducts(JSON.parse(products));
            }
        } catch (error) {
            console.log(error);
        }
    };


    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item.imageLink }} />
                </View>
                <View style={styles.brandPriceContainer}>
                    <Text style={styles.brandText}>{item.brand}</Text>
                    <Text style={styles.priceText}>{item.price}</Text>
                    <Text style={styles.quantityText}>Quantity</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Basket</Text>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerDesc}>Delivery for FREE until the end of the month</Text>
                </View>
            </View>
            <View style={styles.flatListContainer}>
                <FlatList
                    keyExtractor={(item: any) => item.id}
                    data={favoriteProducts}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.totalCostContainer}>
                <View style={styles.totalTextContainer}>
                    <Text style={styles.totalText}>Total</Text>
                </View>
                <View style={styles.totalPriceContainer}>
                    <Text style={styles.totalPriceText}>${total}</Text>
                </View>
            </View>
            <View style={styles.checkoutContainer}>
                <TouchableOpacity style={styles.btnCheckoutContainer}>
                    <Text style={styles.textBtnContainer}>
                        Checkout
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    headerContainer: {
        alignItems: 'center'
    },
    headerTextContainer: {
        backgroundColor: '#D3F2FF',
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 21,
        fontWeight: '600',
        color: 'black',
    },
    headerDesc: {
        padding: 10,
        fontWeight: '600',
        color: 'black'
    },
    cardContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    image: {
        width: 80,
        height: 105,
    },
    brandText: {
        color: 'black',
        fontSize: 19,
        fontWeight: '600',
        marginBottom: 10,
    },
    priceText: {
        color: '#5956E9',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 20
    },
    quantityText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400'
    },
    flatListContainer: {
        marginTop: 40,
        maxHeight: '67%',
        alignItems: 'center',
        marginBottom: 20
    },
    imageContainer: {
        borderRadius: 10
    },
    brandPriceContainer: {
        marginLeft: 10
    },
    totalCostContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    totalTextContainer: {
        marginLeft: 10
    },
    totalText: {
        fontSize: 19,
        fontWeight: '400',
        color: 'black'
    },
    totalPriceText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#5956E9'
    },
    totalPriceContainer: {
        marginRight: 10
    },
    checkoutContainer: {
        marginHorizontal: 10,
        backgroundColor: '#5956E9',
        borderRadius: 10
    },
    textBtnContainer: {
        paddingVertical: 20,
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
    btnCheckoutContainer: {
        
    }
})

export default Basket;
