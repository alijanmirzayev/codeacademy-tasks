import {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = ({ id, name, category, imageUrl, price, allProduct, setNewProduct, productName, productPrice, productCategory, productId }) => {

    // Product silir
    const deleteProduct = () => {
        const product = allProduct.filter(item => item.id != id)
        setNewProduct(product)
    }

    // Card içində DELETE butonuna klik edəndə product dəyərlərini Update Textİnput'a daşıyır.
    const editProduct = () => {
        productName(name)
        productPrice(price)
        productCategory(category)
        productId(id)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: imageUrl }}
                />
            </View>
            <View style={styles.productDescriptionContainer}>
                <Text style={styles.productName} >{name}</Text>
                <Text style={styles.productCategory} >Category: {category}</Text>
                <Text style={styles.productPrice} >Price: {price}</Text>
            </View>
            <View style={styles.updateDeleteContainer}>
                <TouchableOpacity style={styles.buttonDelete} onPress={deleteProduct}>
                    <Text style={styles.buttonDeleteText} >DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonEdit} onPress={editProduct}>
                    <Text style={styles.buttonEditText} >EDIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        padding: 5,
        width: '100%',
        marginBottom: 15
    },
    imageContainer: {
        width: '20%',
        height: 70
    },
    image: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productContainer: {
        flexDirection: 'row',
    },
    productDescriptionContainer: {
        width: '60%',
        justifyContent: 'center'
    },
    productName: {
        fontSize: 17,
        fontWeight: 400,
        color: '#0A0A0A',
        marginBottom: 5
    },
    productCategory: {
        fontSize: 15,
        fontWeight: 400,
        color: '#6A707C',
    },
    productPrice: {
        fontSize: 15,
        fontWeight: 400,
        color: '#6A707C',
    },
    updateDeleteContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    buttonDelete: {
        backgroundColor: 'black',
        width: 65,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonDeleteText: {
        color: '#FF2849',
        fontSize: 12,
        fontWeight: 400,
    },
    buttonEdit: {
        backgroundColor: '#30C04F',
        width: 65,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonEditText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 400,
    }
});

export default Card;
