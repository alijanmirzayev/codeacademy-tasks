import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import CreateProduct from './src/components/CreateProduct';
import UpdateProduct from './src/components/UpdateProduct';
import Card from './src/components/Card';
import productData from './product';

export default function App() {

  const [allProduct, setNewProduct] = useState(productData)

  const [productId, setNewProductId] = useState('')
  const [productName, setNewProductName] = useState('')
  const [productPrice, setNewProductPrice] = useState('')
  const [productCategory, setNewProductCategory] = useState('')

  return (
    <View style={styles.container}>
      <CreateProduct allProduct={allProduct} setNewProduct={setNewProduct} />
      <View style={styles.flatList}>
        <FlatList
          data={allProduct}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            category={item.category}
            price={item.price}
            allProduct={allProduct}
            setNewProduct={setNewProduct}
            productName={setNewProductName}
            productPrice={setNewProductPrice}
            productCategory={setNewProductCategory}
            productId={setNewProductId}
          />}
        />
      </View>
      <UpdateProduct
        productId={productId}
        productName={productName}
        productPrice={productPrice}
        productCategory={productCategory}
        allProduct={allProduct}
        setNewProduct={setNewProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#white',
    margin: 28,
    gap: 5
  },
  flatList: {
    height: 250
  }
});
