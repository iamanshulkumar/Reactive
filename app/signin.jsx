import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'

const SignIn = () => {

  const handleLogin = () => {

  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode="cover" />

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>
            Welcome to ReState
          </Text>
          <Text className='text-3xl text-center font-rubik-bold text-black-300 mt-2'>
            Let's Get You Closer To {"\n"}
            <Text className='text-primary-300'>
              Your Dream Home
            </Text>
          </Text>



            <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
              Login to ReState with Google
            </Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn