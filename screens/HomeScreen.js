import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const products = [
  { id: '1', name: 'Product 1', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BlpRtGIz8__UP-h_HAaGNWqsxwkd4gMqTQ&s' },
  { id: '2', name: 'Product 2', price: 200, image: 'https://www.metroecuador.com.ec/resizer/v2/GPK4VIJ2FJG43GDCXELV5ET32A.png?auth=7d342acbaca99870f00f33c56e9dbf775d7e9ac06bde726dca68ecb8f52a48e7&width=1200&height=675&smart=true' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.9,
    height: height * 0.3,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 9,
  },
});

export default HomeScreen;