import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.container}>
                <View style={styles.col1}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
                <View style={styles.col2}>
                    <TouchableOpacity onPress={() => props.delete(props.id)} style={styles.button}>
                        <Text style={styles.text2}>X</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#2c3e50',
        marginVertical: 10
    },
    col1: {
        width: '88%',
        height: 40,
        justifyContent: 'center'
    },
    col2: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    },
    text: {
        fontSize: 20,
        color: 'white',
        paddingLeft: 20,

    },
    deleteText: {
        color: 'white'
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20
    },
    text2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});

export default Card;
