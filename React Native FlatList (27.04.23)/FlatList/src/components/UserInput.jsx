import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import userData from '../../userData';
import Card from './Card';

const Input = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [data, setData] = useState(userData)

    const add = () => {
        let id = data.length + 1
        let username = (name.concat(surname)).toLowerCase()

        let newUserObj = {
            id: id,
            name: name,
            surname: surname,
            username: username
        }

        setData([...data, newUserObj])
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} multiline placeholder='Enter your name' value={name} onChangeText={setName} />
                <TextInput style={styles.input} multiline placeholder='Enter your surname' value={surname} onChangeText={setSurname} />
                <TouchableOpacity style={styles.button} onPress={add} >
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.cardsContainer}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>ALL USERS</Text>
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Card key={item.id} name={item.name} surname={item.surname} username={item.username} />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    style={styles.FlatList}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        alignItems: 'center',
    },
    cardsContainer: {
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        width: '90%'
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    info: {
        marginTop: 5,
        alignItems: 'center'
    },
    infoText: {
        fontSize: 22,
        fontWeight: 600
    },
    FlatList: {
        height: 200
    }
});

export default Input;
