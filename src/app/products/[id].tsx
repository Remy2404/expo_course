import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useLocalSearchParams} from 'expo-router';
export default function ProductDetails() {
  const { id: productId } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Product Details about id {productId}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    }
})