import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router';

const HomePage = () => {
  // const [isPressed, setIsPressed] = useState(false);
  
  return (
    <View className="flex-1 items-center justify-start p-4 w-3/4 h-3/4">
      <View className="bg-white p-4 rounded-lg shadow-md w-full">
        <Text className="text-lg font-bold text-primary mb-2">HomePage </Text>
        <Text className="text-yellow-500 mb-4">Welcome to HomePage!</Text>
        
        {/* <Pressable 
          onPress={() => setIsPressed(!isPressed)}
          className={`p-3 rounded-md ${isPressed ? 'bg-secondary' : 'bg-primary'}`}
        >
          <Text className="text-white font-medium text-center">
            {isPressed ? 'Pressed!' : 'Press Me'}
          </Text>
        </Pressable> */}
        <Text className="text-blue-500">Link to another page</Text>
        <Link href="/profile" className="text-blue-500 underline mt-2 justify-center items-center" >
          Go to Profile
        </Link>
        <Link href="/about" className="text-blue-500 underline mt-2 font-medium bold">
          Go to Abouts
        </Link>
        <Link href="/products" className="text-blue-500 underline mt-2 font-medium bold">
          Go to Products
        </Link>

      </View>
    </View> 
  )
}

export default HomePage;