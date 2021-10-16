import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;

const boxStyle = StyleSheet.create({
  boxContainer: {
    width: windowWidth / 3,
    height: 100,
    fontFamily: 'Roboto',
    fontSize: 18
  }
})

export default boxStyle;
