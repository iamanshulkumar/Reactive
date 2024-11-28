import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24 }}>Welcome to Home!</Text>
    </View>
  );
};

export default Home;
