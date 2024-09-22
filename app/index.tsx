import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { useRouter } from 'expo-router'

const index = () => {

    const router = useRouter();

    return (
        <Pressable onPress={() => router.push('/home')} style={className`bg-orange-500 flex-1 justify-center items-center`}>
            <Image source={require('../assets/logo.png')} style={className`w-50 h-50`}/>
            <Text style={className`text-white text-6xl font-bold`}>Foodie</Text>
            <Text style={className`text-white text-lg font-semibold mt-2`}>Welcome to Foodie</Text>
        </Pressable>
    )
}

export default index