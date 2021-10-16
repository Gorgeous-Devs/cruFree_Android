import React from 'react';
import {
  View,
} from 'react-native';
import Background from '../components/background';
import Box from "../components/box";

const Home = () => {
  return (
    <View>
      <Background />
      <View>
        <Box category="Beauty"/>
      </View>
    </View>
  );
};


export default Home;
