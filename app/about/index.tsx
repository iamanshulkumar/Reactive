import { Text, View } from "react-native";

const About = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 25 }}>This is the About Page</Text>
    </View>
  );
};

export default About;
