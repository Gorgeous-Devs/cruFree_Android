import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import boxStyle from '../styles/box';

const Box = ({category, navigation, id}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {
      itemId: id,
    })} style={[boxStyle.boxContainer, category === 'Beauty' ? boxStyle.beautyBox : '']}>
      <Text>
        {category}
      </Text>
    </TouchableOpacity>
  )
}



export default Box;
