import React from 'react';
import { View, Text } from 'react-native';

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 24 }}>This is the Profile Page</Text>
    </View>
  );
};

export default Profile;
