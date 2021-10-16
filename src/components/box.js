import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import boxStyle from '../styles/box';

const Box = ({category}) => {
  return (
    <View style={[boxStyle.boxContainer, category === 'Beauty' ? boxStyle.beautyBox : '']}>
      <Text>
        {category}
      </Text>
    </View>
  )
}



export default Box;
