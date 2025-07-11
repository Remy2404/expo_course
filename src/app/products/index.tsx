import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      <Link href="/products/1">
        <Text>Go to Product 1</Text>
      </Link>
      <Link href="/products/2">
        <Text>Go to Product 2</Text>
      </Link>
      <Link href="/products/3">
        <Text>Go to Product 3</Text>
      </Link>
      <Link href="/products/4">
        <Text>Go to Product 4</Text>
      </Link>
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