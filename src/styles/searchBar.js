import {StyleSheet} from 'react-native';

const searchBarStyle = StyleSheet.create({
  sbWrapper: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 16,
    fontSize: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5
  }
})

export default searchBarStyle;
