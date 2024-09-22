import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const index = () => {
    return (
        <View style={className`bg-orange-500 flex-1 justify-center items-center`}>
            <Image source={require('../assets/logo.png')}/>
            <Text style={className`text-white text-6xl font-bold`}>Foodie</Text>
            <Text style={className`text-white text-lg font-semibold mt-2`}>Welcome to Foodie</Text>
        </View>
    )
}

export default index