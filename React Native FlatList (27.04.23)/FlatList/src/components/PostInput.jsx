import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import userContent from '../../userContent';
import Card from './Card';

const PostInput = () => {

    const [content, setContent] = useState('')
    const [checkUsername, setcheckUsername] = useState('')
    const [allContent, setNewContent] = useState(userContent)

    const addContent = () => {
        let newContentObj = {
            id: allContent.length + 1,
            username: checkUsername,
            content: content
        }

        setNewContent([...allContent, newContentObj])
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} multiline placeholder='Enter your username' value={checkUsername} onChangeText={setcheckUsername} />
                <TextInput style={styles.input} multiline placeholder='Enter content' value={content} onChangeText={setContent} />
                <TouchableOpacity style={styles.button} onPress={addContent} >
                    <Text style={styles.buttonText}>POST</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>ALL POSTS</Text>
                </View>

                <FlatList
                    data={allContent}
                    renderItem={({ item }) => (
                        <View style={styles.cardContainer}>
                            <Card key={item.id} username={item.username} content={item.content} />
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

export default PostInput;
