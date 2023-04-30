//import liraries
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// create a component
const UpdateProduct = ({productId, productName, productPrice, productCategory, allProduct, setNewProduct}) => {

    const [updateName, setUpdateName] = useState('')
    const [updatePrice, setUpdatePrice] = useState('')
    const [updateCategory, setUpdateCategory] = useState('')

    // Card icinde productun edit butonuna klikleyende dusen deyerleri update edir
    const editProduct = () => {
        const findProduct = allProduct.find(item => item.id == productId)
        const otherProduct = allProduct.filter(item => item.id !=productId)
        let updatedProduct = {
            id: findProduct.id,
            imageUrl: findProduct.imageUrl,
            name: updateName,
            price: updatePrice,
            category: updateCategory
        }

        setNewProduct([...otherProduct, updatedProduct])
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Update Product</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.productName}
                    placeholder='Enter Product Name'
                    defaultValue={productName}
                    onChangeText={setUpdateName}
                />
                <TextInput
                    style={styles.productName}
                    placeholder='Enter Price'
                    defaultValue={productPrice}
                    onChangeText={setUpdatePrice}
                    inputMode='numeric'
                />
                <TextInput
                    style={styles.productName}
                    placeholder='Enter Category'
                    defaultValue={productCategory}
                    onChangeText={setUpdateCategory}
                />
                <TouchableOpacity style={styles.button} onPress={editProduct}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 25,
    },
    headerTextContainer: {
        backgroundColor: 'white',
        marginBottom: 14,
        alignItems: 'center'
    },
    inputContainer: {
        gap: 10
    },
    headerText: {
        fontSize: 30,
        fontWeight: 700,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 600,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#1E232C',
        paddingVertical: 6
        
    },
    productName: {
        fontSize: 12,
        color: '#8391A1',
        width: '100%',
        height: 40,
        paddingLeft: 40,
        backgroundColor: '#F7F8F9',
        borderRadius: 8,
        borderWidth: 1
    }
});

//make this component available to the app
export default UpdateProduct;
