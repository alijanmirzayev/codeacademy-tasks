//import liraries
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// create a component
const Home = ({navigation}) => {

    const goToCategoryList = () => {
        navigation.navigate('CategoryList');
    }

    const goToCategoryPage = () => {
        navigation.navigate('AddCategoryScreen');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={goToCategoryList}>
                <Text style={styles.text}>Go To Category List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={goToCategoryPage}>
                <Text style={styles.text}>Go To Add Category Page</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    btn: {
        width: '100%',
        height: 50,
        borderRadius: 6,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
});

//make this component available to the app
export default Home;
