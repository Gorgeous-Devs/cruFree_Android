import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const boxStyle = StyleSheet.create({
  boxContainer: {
    width: windowWidth / 2.5,
    height: windowWidth / 2.5,
    fontWeight: 500,

    fontSize: 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 8
  },
  beautyBox: {
    backgroundColor: '#D75951'
  }
})

export default boxStyle;
