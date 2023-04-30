import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CreateProduct = ({ allProduct, setNewProduct }) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    // Yeni product yaradir
    const addProduct = () => {
        let newProductObj = {
            id: generateId(),
            imageUrl: 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png',
            name: name,
            category: category,
            price: price,
        }
        setNewProduct([...allProduct, newProductObj])
    }

    // Unique id yaradir
    const generateId = () => {
        let id = allProduct.length * Math.random(10000000)
        return id
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Create Product</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.productName}
                    placeholder='Enter Product Name'
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.productName}
                    placeholder='Enter Price'
                    onChangeText={setPrice}
                    inputMode='numeric'
                />
                <TextInput
                    style={styles.productName}
                    placeholder='Enter Category'
                    onChangeText={setCategory}
                />
                <TouchableOpacity style={styles.button} onPress={addProduct}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 25
    },
    headerTextContainer: {
        backgroundColor: 'white',
        marginBottom: 14,
        alignItems: 'center'
    },
    inputContainer: {
        gap: 10,
        backgroundColor: 'white',
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
export default CreateProduct;
