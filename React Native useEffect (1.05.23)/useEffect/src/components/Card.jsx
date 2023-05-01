import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Card = ({ title, diseases, color }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.innerContainer, { backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.twoTitle}>{diseases} diseases</Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {

    },
    innerContainer: {
        backgroundColor: '#EB7662',
        padding: 25,
        borderRadius: 10,
        marginBottom: 15
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 600
    },
    twoTitle: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
        fontWeight: 600
    }
});

export default Card;
