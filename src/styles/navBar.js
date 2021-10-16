import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const navBarStyle = StyleSheet.create({
  navBar: {
    height: windowHeight / 18,
    width: windowWidth,
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButtons: {
    height: windowHeight / 18,
    width: windowWidth / 8,
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default navBarStyle;
