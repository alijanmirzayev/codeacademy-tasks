import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = ({ name, surname, username, content }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.username}>name: {name}</Text>
            <Text style={styles.username}>surname: {surname}</Text>
            <Text style={styles.username}>Username: {username}</Text>
            {
                content ? <Text style={styles.nameSurname}>Content: {content}</Text> : null
            }

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    nameSurname: {
        fontSize: 18,
        color: 'white'
    },
    username: {
        fontSize: 18,
        color: 'white'
    }
});

export default Card;
