import {
  StyleSheet,
  Dimensions
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const backgroundStyle = StyleSheet.create({
  bgStyle: {
    backgroundColor: '#25B960',
    height: windowHeight / 4,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

export default backgroundStyle;

