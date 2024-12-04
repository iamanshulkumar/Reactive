import { View, Text, Image } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

const Login = () => {
    const router = useRouter();
    const onLogin = () => {
        router.navigate("/signup");
    }
    return (
        <View style={{ flex: 1}}>
            <Image source={require("@/assets/images/adaptive-icon.png")}
                style={{
                    width: "100%",
                    height: 400,
                }}
                resizeMode="cover"
            />
            <View>

                <TextInput placeholder='Enter Your Name' style={{
                    borderWidth: 1,
                    height: 50,
                    padding: 5
                }}
                    onChangeText={(e) => console.log(e)}
                />
                <TextInput placeholder='Enter Your Email' style={{
                    borderWidth: 1,
                    height: 50,
                    padding: 5
                }}
                    onChangeText={(e) => console.log(e)}
                />
                <TextInput placeholder='Enter Your Pssword' style={{
                    borderWidth: 1,
                    height: 50,
                    padding: 5
                }}
                    onChangeText={(e) => console.log(e)}

                />
                <MyButton title={"Login"} onPress={onLogin} />
            </View>
        </View>
    )
}

export default Login