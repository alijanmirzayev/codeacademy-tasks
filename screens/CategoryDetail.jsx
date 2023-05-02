//import liraries
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator,TouchableOpacity } from 'react-native';

// create a component
const CategoryDetail = ({ route, navigation }) => {

    const { id } = route.params

    const [load, setLoad] = useState(true)


    useEffect(() => {
        const test = axios.get('https://northwind.vercel.app/api/categories/' + id)
            .then(res => {
                setNewCategoryInfo(res.data)
                setLoad(false)
            })
    }, [])

    const [categoryInfo, setNewCategoryInfo] = useState([])


    return (
        <View style={styles.container}>
            {
                load ? <ActivityIndicator size="large" color="#00ff00" /> :
                    <View>
                        <Text style={styles.text}>ID: {categoryInfo.id}</Text>
                        <Text style={styles.text}>Name: {categoryInfo.name}</Text>
                        <Text style={styles.text}>Description: {categoryInfo.description}</Text>
                    </View>
            }
            <TouchableOpacity style={styles.goBackBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.goBackText}>Go Back Category List</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 500
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
export default CategoryDetail;
