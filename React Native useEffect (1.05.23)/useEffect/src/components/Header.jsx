import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Header = ({allOriginalData, setNewData}) => {

    const search = (value) => {
        const filteredData = allOriginalData.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        setNewData(filteredData)
    }

    return (
        <View style={styles.textContainer}>
        <TextInput style={styles.textInput} defaultValue='Search..' onChangeText={search} />
        <Text style={styles.mainText}>Learn</Text>
        <Text style={styles.otherText}>Choose the part of the body</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        
      },
      textInput: {
        marginVertical: 10,
        fontSize: 14,
        color: '#E0E2E7',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20
      },
      mainText: {
        fontSize: 25,
        fontWeight: 700,
        marginBottom: 5
      },
      otherText: {
        fontWeight: 400,
        marginBottom: 20
      }
});

export default Header;
