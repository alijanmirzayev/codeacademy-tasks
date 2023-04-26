import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Card from './Card';

const dataArray = [
    {
        id: 1,
        title: 'İdman etmək'
    },
    {
        id: 2,
        title: 'Bazarlıq'
    }
]

const Input = () => {

    const [taskName, setTaskName] = useState('')
    const [data, setData] = useState(dataArray)

    const add = () => {
        let newObj = {
            id: data.length + 1,
            title: taskName
        }
        setData([...data, newObj])
        setTaskName('')
    }
    
    const deleteTask = (id) => {
        let newData = data.filter(item=> item.id !== id)
        setData(newData)
      }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setTaskName}
                placeholder='Please add a new task!'
            />
            <TouchableOpacity style={styles.button} onPress={add}>
                <Text style={styles.text}>ADD</Text>
            </TouchableOpacity>
            <ScrollView style={styles.scroll}>
            {
                data.map(item => (
                        <View>
                            <Card key={item.id} id={item.id} title={item.title} delete={deleteTask}/>
                        </View>
                )
                )
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
    },
    input: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    text: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        backgroundColor: 'green',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10
    },
    ListText: {
        fontSize: 24,
        color: 'black'
    },
    button2: {
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

export default Input;
