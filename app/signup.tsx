import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import MyButton from '@/components/MyButton';

const SignUp = () => {

    const router = useRouter();
    const onSignUp = () => {
        router.navigate('/login')
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <MyButton title={"Sign Up"} onPress={onSignUp} />
        </View>
    )
}

export default SignUp