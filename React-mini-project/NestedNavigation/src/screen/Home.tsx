import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, FlatList, Pressable } from 'react-native';
import axios from 'axios'
import Card from '../component/Card';
import Feather from 'react-native-vector-icons/Feather';


function Home({ navigation }: any) {

    const [products, setproducts] = useState<any>([])
    const [filter, setfilter] = useState<any>([])
    const [search, setsearch] = useState<any>([])
    const [basket, setbasket] = useState<any>([])

    useEffect(() => {
        axios.get('https://643d3ce16afd66da6af14454.mockapi.io/api/v1/products')
            .then(res => {
                setproducts(res.data)
                setfilter(res.data)
            })
    }, [])

    useEffect(() => {

        const filteredProduct = products.filter((item: any) => {
            return (item.brand.toLowerCase()).includes(search.toLowerCase())
        })
        setfilter(filteredProduct)

    }, [search])

    const renderItem = ({ item }: any): any => {

        return (
            <Pressable onPress={() => navigation.navigate('ProductDetailScreen', { item, basket, setbasket })}>
                <Card brand={item.brand} model={item.model} price={item.price} imageLink={item.imageLink} />
            </Pressable>
        )
    }

    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Feather style={styles.searchIcon} name='search' size={26} color='black'/>
                <TextInput placeholder='Search' placeholderTextColor='#868686' style={styles.search} onChangeText={setsearch} />
                <Text style={styles.textHeader}>Order online collect in store</Text>
            </View>

            <View style={styles.tabContainer}>
                <Text style={styles.tabSelectText}>Wearable</Text>
                <Text style={styles.tabText}>Laptops</Text>
                <Text style={styles.tabText}>Phones</Text>
                <Text style={styles.tabText}>Drones</Text>
            </View>

            <View style={styles.cardContainer}>
                <FlatList
                    horizontal
                    data={filter}
                    renderItem={renderItem}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        marginHorizontal: 16,
        marginTop: 40,
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    search: {
        borderColor: '#C9C9C9',
        borderRadius: 30,
        borderWidth: 1,
        paddingLeft: 57,
    },
    textHeader: {
        fontSize: 34,
        fontFamily: 'Raleway-Bold',
        width: '65%',
        color: 'black',
        marginTop: 30,
    },
    tabContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tabSelectText: {
        fontSize: 21,
        fontFamily: 'Raleway-Bold',
        fontWeight: '600',
        color: '#5956E9',
        borderBottomWidth: 2,
        borderBottomColor: '#5956E9'
    },
    tabText: {
        fontSize: 21,
        fontWeight: '600',
        fontFamily: 'Raleway-Bold',
        color: '#9A9A9D'
    },
    searchIcon: {
        position: 'absolute',
        top: 10,
        left: 20
    }
})

export default Home