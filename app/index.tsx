import { Text, View } from "react-native";
import {Link} from "expo-router";

const Index = () => {
  return  (
    <View style={{
      backgroundColor: "red",
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={{ color:"white", fontSize: 25}}>Hello Welcome to Mavenation</Text>
      <Link href="/about">About page</Link>
    </View>
  );
};

export default Index;