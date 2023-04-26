import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>To Do App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c3e50'
    },
    text: {
        color: 'white',
        fontSize: 24,
        marginTop: 30,
        fontWeight: 600
    }
});

export default Header;
