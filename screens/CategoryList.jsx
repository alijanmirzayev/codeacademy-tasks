//import liraries
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

// create a component
const CategoryList = ({ navigation }) => {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/categories').then(res => {
            setCategory(res.data)
            setLoading(false)
        })
    }, [])

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CategoryDetail', { id: item.id })}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            {
                loading ? <ActivityIndicator size="large" color="#00ff00" /> : <FlatList
                    data={category}
                    renderItem={renderItem}
                />
            }
            <TouchableOpacity style={styles.goBackBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.goBackText}>Go Back Home</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    btn: {
        backgroundColor: 'black',
        borderRadius: 6,
        marginTop: 8,
        padding: 8,
    },
    text: {
        fontSize: 18,
        color: 'white'
    },
    goBackBtn: {
        backgroundColor: 'red',
        padding: 6,
        borderRadius: 6,
    },
    goBackText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 600
    }
});

//make this component available to the app
export default CategoryList;
