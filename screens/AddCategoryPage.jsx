import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

const AddCategoryScreen = ({navigation}) => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: ''
        }
    });

    const onSubmit = (data) => {
        axios.post('https://northwind.vercel.app/api/categories', data).then(res => console.log(res.data))
    }

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Category name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                    />
                )}
                name="name"
            />

            {errors.name && <Text style={styles.text}>*This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Category Description"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                    />
                )}
                name="description"
            />

            {errors.description && <Text style={styles.text}>*This is required.</Text>}


            <Button title="Submit" onPress={handleSubmit(onSubmit)} />

            <TouchableOpacity style={styles.goBackBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.goBackText}>Go Back Home Page</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    text: {
        fontSize: 16,
        color: 'red',
        marginBottom: 12
    },
    input: {
        padding: 6,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 10,
    },
    goBackBtn: {
        backgroundColor: 'red',
        padding: 6,
        borderRadius: 6,
        marginTop: 10
    },
    goBackText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 600
    }
});

export default AddCategoryScreen;
