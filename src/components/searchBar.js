import React, {useState} from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import searchBarStyle from '../styles/searchBar';

const SearchBar = () => {
  return (
    <View style={searchBarStyle.sbWrapper}>
      <TextInput placeholder="Search..."/>
    </View>
  )
}

export default SearchBar;
