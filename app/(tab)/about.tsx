import React from 'react';
import { View, Text } from 'react-native';

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24 }}>This is the About Page</Text>
    </View>
  );
};

export default About;
